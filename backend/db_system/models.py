
from sqlalchemy import Column, Integer, Float, String
from db_system import db, schemas, models
from .db import Base

class G_car(Base):
    __tablename__ = "gas cars"
    id = Column(Integer, primary_key=True, index=True)
    manufacturer = Column(String)
    modelName = Column(String)
    tankSize = Column(Float)
    gasPrice = Column(Float)

class E_car(Base):
    __tablename__ = "electric cars"
    id = Column(Integer, primary_key=True, index=True)
    manufacturer = Column(String)
    modelName = Column(String)
    batterySize = Column(Float)
    elecPrice = Column(Float)



class User(Base):
    __tablename__ = "Users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
