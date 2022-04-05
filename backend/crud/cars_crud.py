from sqlalchemy.orm import Session
from db_system import db, schemas, models
from fastapi import HTTPException, status, Depends, Response

def get_all_cars(db: Session):
    cars = db.query(models.Car).all()
    return cars

def show_car_id(id:int , db: Session = Depends(db.get_db)):
    car = db.query(models.Car).filter(models.Car.id==id).first()
    if not car:
       response.status_code = status.HTTP_404_NOT_FOUND
    return car

def update_car(id: int, request:schemas.Car, db:Session):
    car = db.query(models.Car).filter(models.Car.id == id).update(request.dict())
    #=================
    if not car:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Car ID {id} not found")
    #=================
        car.update(request)
        db.commit()
        return 'updated'


def create_car(request: schemas.Car, db: Session):
    new_car = models.Car(
    manufacturer = request.manufacturer,
    modelName = request.modelName,
    tankSize = request.tankSize,
    batterySize = request.batterySize,
    elecPrice = request.elecPrice,
    gasPrice = request.gasPrice,
   energySource = request.energySource
    )
    db.add(new_car)
    db.commit()
    db.refresh(new_car)
    return new_car

def destroy_car(id, db: Session = Depends(db.get_db)):
    car=db.query(models.Car).filter(models.Car.id == id).delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
