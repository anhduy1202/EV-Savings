from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI, Request, Response, status
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import Session

#DB_HOST = "localhost"
#DATABASE = "playground"
#engine = create_engine(f"mysql+pymysql://root:pass123@{DB_HOST}/{DATABASE}")
engine = create_engine("mysql+pymysql://root@localhost3306/test")
DBSession = Session(engine)
DB_BASE_ORM = declarative_base()

class Car(BaseModel):
    id: Optional[int] = None
    car_model: int
    manufacturer: str
    Type: str
#can add more datatypes here later used in calculation
#or can just create child classes for electric car and gasoline car

class CarORM(DB_BASE_ORM):
    __tablename__ = "cars"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    car_model = Column(Integer, index=False)
    manufacturer = Column(String, index=False)
    Type = Column(String, index=False)

app = FastAPI()

@app.get("/")
def say_hello():
    return {"hello": "world"}

@app.get("/cars")
def get_all_cars():
    return {"cars": ["all"]}

@app.get("/cars/{car_id}")
def get_car(
    car_id: int
):
    return {"car": [f"returning details for {car_id}"]}

@app.put("/cars/{car_id}")
def edit_car(
    car_id: int
):
    return {"car": [f"editing details for {car_id}"]}


@app.post("/cars")
def create_car(
    request: Request,
    response: Response,
    car: Car,
):
    try:
        DBSession.begin()
        car_record = CarORM(**dict(_car))
        DBSession.add(_car_record)
        DBSession.commit()
        _car.id = _car_record.id
        return _car
    except Exception as e:
        DBSession.rollback()
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {
            "error": e,
            "error_details": e.orig.args if hasattr(e, 'orig') else f"{e}"
        }

@app.delete("/cars/{car_id}")
def delete_car(
    car_id: int
):
    return {"car": [f"delete car {car_id}"]}
