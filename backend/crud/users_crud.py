
from sqlalchemy.orm import Session
from db_system import db, schemas, models
from db_system.hashing import Hash
from fastapi import HTTPException, status, Depends, Response


def create_user(request: schemas.User, db: Session = Depends(db.get_db)):
    new_user=models.User(
    name = request.name,
    email = request.email,
    password = Hash.bcrypt(request.password)
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def show_user(id, db: Session = Depends(db.get_db)):
    user = db.query(models.User).filter(models.User.id==id).first()
    if not user:
       response.status_code = status.HTTP_404_NOT_FOUND
    return user
