from typing import List, Optional
from pydantic import BaseModel


class CarBase(BaseModel):
    id: int
    manufacturer: str
    modelName: str
    tankSize: float
    batterySize: float
    elecPrice: float
    gasPrice : float
    energySource : str

class Car(CarBase):
    class Config():
        orm_mode = True

class User(BaseModel):
    name:str
    email:str
    password:str

class ShowUser(BaseModel):
    name:str
    email:str
    class Config():
        orm_mode = True

class ShowCar(BaseModel):
    id: str
    manufacturer: str
    modelName: str
    class Config():
        orm_mode = True


class Login(BaseModel):
    username: str
    password:str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None
