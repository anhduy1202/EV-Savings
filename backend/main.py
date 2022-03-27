
from fastapi import FastAPI, Depends, status, Response
from sqlalchemy.orm import Session
from db import engine
import schemas
import models
from crud import get_db


app = FastAPI()
models.Base.metadata.create_all(engine)
#migrates tables into db (if it does not exist)

@app.post('/car',status_code=status.HTTP_201_CREATED)
def create_car(request: schemas.Car, db: Session = Depends(get_db)):
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

@app.delete('/car{id}', status_code = status.HTTP_204_NO_CONTENT)
def destroy(id,db: Session = Depends(get_db)):
    car=db.query(models.Car).filter(models.Car.id == id).delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)

@app.get('/cars')
def all(db: Session = Depends(get_db)):
   cars = db.query(models.Car).all()
   return cars

@app.get('/cars{id}')
def show(id,response:Response, db: Session = Depends(get_db),status_code=200):
   car = db.query(models.Car).filter(models.Car.id==id).first()
   if not car:
      response.status_code = status.HTTP_404_NOT_FOUND
   return car

@app.put('/cars{id}')
def update(id, request: schemas.Car, db: Session = Depends(get_db)):
    car = db.query(models.Car).filter(models.Car.id == id).update(request.dict())
    if not car.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Car ID {id} not found")
        car.update(request)
        db.commit()
        return 'updated'
