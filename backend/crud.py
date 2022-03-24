from typing import List
from sqlalchemy.orm import Session
from sqlalchemy import Column
from db import Base, SessionLocal


#can add more datatypes here later used in calculation
#or can just create child classes for electric car and gasoline car

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()
