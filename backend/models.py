
from sqlalchemy import Column, Integer, Float, String
from db import Base


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
