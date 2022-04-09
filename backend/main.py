
from fastapi import FastAPI, APIRouter
from typing import List
import db_system
from routers import g_cars, e_cars, users
from db_system import db, schemas, models, hashing
from db_system.db import engine

app = FastAPI()
models.Base.metadata.create_all(engine)

app.include_router(e_cars.router)
app.include_router(g_cars.router)
app.include_router(users.router)
