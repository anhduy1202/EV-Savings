from sqlalchemy.orm import Session
from db_system.schemas import *
from db_system.models import *
from fastapi import HTTPException, status, Depends, Response

def get_all_cars(db: Session):
    gcars = db.query(models.G_car).all()
    return gcars

def show_car_id(id:int , db: Session = Depends(db.get_db)):
    gcar = db.query(models.G_car).filter(models.G_car.id==id).first()
    if not gcar:
       response.status_code = status.HTTP_404_NOT_FOUND
    return gcar

def update_car(id: int, request:schemas.G_car, db:Session):
    gcar = db.query(models.G_car).filter(models.G_car.id == id).update(request.dict())
    #=================
    if not gcar:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Car ID {id} not found")
    #=================
        car.update(request)
        db.commit()
        return 'updated'


def create_car(request: schemas.G_car, db: Session):
    new_car = models.G_car(
    manufacturer = request.manufacturer,
    modelName = request.modelName,
    tankSize = request.tankSize,
    gasPrice = request.gasPrice
    )
    db.add(new_car)
    db.commit()
    db.refresh(new_car)
    return new_car

def destroy_car(id, db: Session = Depends(db.get_db)):
    car=db.query(models.G_car).filter(models.G_car.id == id).delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
