
from typing import List
from sqlalchemy.orm import Session
from fastapi import Depends, status, Response, APIRouter
from db_system import db, schemas, models
from crud import e_cars_crud


router = APIRouter()
router= APIRouter(tags=['electric cars'])


@router.get('/electric cars', response_model = List[schemas.ShowCar])
def all(db: Session = Depends(db.get_db)):
    return e_cars_crud.get_all_cars(db)

@router.get('/electric cars{id}', status_code=200, response_model=schemas.ShowCar)
def show(id: int,response:Response, db: Session = Depends(db.get_db),status_code=200):
    return e_cars_crud.show_car_id(id, db)


@router.put('/electric cars{id}', status_code = status.HTTP_202_ACCEPTED)
def update(id:int, request: schemas.E_car, db: Session = Depends(db.get_db)):
    return e_cars_crud.update_car(id,request,db)

@router.post('/electric car',status_code=status.HTTP_201_CREATED)
def create(request: schemas.E_car, db: Session = Depends(db.get_db)):
    return e_cars_crud.create_car(request, db)

@router.delete('/electric cars{id}', status_code = status.HTTP_204_NO_CONTENT)
def destroy(id:int,db: Session = Depends(db.get_db)):
    return e_cars_crud.destroy_car(id, db)
