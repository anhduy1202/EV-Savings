
from typing import List
from sqlalchemy.orm import Session
from fastapi import Depends, status, Response, APIRouter
from db_system import db, schemas, models
from crud import users_crud

router = APIRouter()
router= APIRouter(tags=['users'])

@router.post('/user',response_model=schemas.ShowUser)
def create(request: schemas.User, db: Session = Depends(db.get_db)):
    return users_crud.create_user(request, db)

@router.get('/user{id}', status_code=200, response_model=schemas.ShowUser)
def show(id:int, db: Session = Depends(db.get_db)):
   return users_crud.show_user(id, db)
