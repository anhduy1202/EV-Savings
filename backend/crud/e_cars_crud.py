from sqlalchemy.orm import Session
from db_system import db, schemas, models
from fastapi import HTTPException, status, Depends, Response

def get_all_cars(db: Session):
    ecars = db.query(models.E_car).all()
    return ecars

def show_car_id(id:int , db: Session = Depends(db.get_db)):
    ecar = db.query(models.E_car).filter(models.E_car.id==id).first()
    if not ecar:
       response.status_code = status.HTTP_404_NOT_FOUND
    return ecar

def update_car(id: int, request:schemas.E_car, db:Session):
    ecar = db.query(models.E_car).filter(models.E_car.id == id).update(request.dict())
    #=================
    if not ecar:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Car ID {id} not found")
    #=================
        ecar.update(request)
        db.commit()
        return 'updated'


def create_car(request: schemas.E_car, db: Session):
    new_car = models.E_car(
    manufacturer = request.manufacturer,
    modelName = request.modelName,
    batterySize = request.batterySize,
    elecPrice = request.elecPrice
    )
    db.add(new_car)
    db.commit()
    db.refresh(new_car)
    return new_car

def destroy_car(id, db: Session = Depends(db.get_db)):
    car=db.query(models.E_car).filter(models.E_car.id == id).delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
