
from sqlalchemy import Column, Integer, Float, String
from db_system import db, schemas, models
from .db import Base

class Car(Base):
    __tablename__ = "cars"
    id = Column(Integer, primary_key=True, index=True)
    manufacturer = Column(String)
    modelName = Column(String)
    tankSize = Column(Float)
    batterySize = Column(Float)
    elecPrice = Column(Float)
    gasPrice = Column(Float)
    energySource = Column((String))


class User(Base):
    __tablename__ = "Users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
