
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DB_URL= 'sqlite:///./cars.db'

engine = create_engine(
DB_URL,
connect_args = {"check_same_thread": False},
echo=True)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()
