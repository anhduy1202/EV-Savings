from typing import List
from sqlalchemy.orm import Session
from sqlalchemy import Column
from db import Base, SessionLocal



def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()
