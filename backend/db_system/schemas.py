from typing import List, Optional
from pydantic import BaseModel


class G_car(BaseModel):
    manufacturer: str
    modelName: str
    tankSize: float
    gasPrice : float

class E_car(BaseModel):
    manufacturer: str
    modelName: str
    batterySize: float
    elecPrice: float

class ShowCar(BaseModel):  #schema used in get requests to not show all data
    manufacturer: str
    modelName: str
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


class Login(BaseModel):
    username: str
    password:str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None
