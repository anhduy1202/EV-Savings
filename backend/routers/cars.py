
from typing import List
from sqlalchemy.orm import Session
from fastapi import Depends, status, Response, APIRouter
from db_system import db, schemas, models
from crud import cars_crud

router = APIRouter()
router= APIRouter(tags=['cars'])


@router.get('/cars', response_model = List[schemas.ShowCar], tags=['cars'])
def all(db: Session = Depends(db.get_db)):
    return cars_crud.get_all_cars(db)

@router.get('/cars{id}', status_code=200, response_model=schemas.ShowCar)
def show(id: int,response:Response, db: Session = Depends(db.get_db),status_code=200):
    return cars_crud.show_car_id(id, db)


@router.put('/cars{id}', status_code = status.HTTP_202_ACCEPTED)
def update(id:int, request: schemas.Car, db: Session = Depends(db.get_db)):
    return cars_crud.update_car(id,request,db)

@router.post('/car',status_code=status.HTTP_201_CREATED)
def create(request: schemas.Car, db: Session = Depends(db.get_db)):
    return cars_crud.create_car(request, db)

@router.delete('/car{id}', status_code = status.HTTP_204_NO_CONTENT)
def destroy(id:int,db: Session = Depends(db.get_db)):
    return cars_crud.destroy_car(id, db)
