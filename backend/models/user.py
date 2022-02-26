from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta

users = Table(
'users',meta,
Column('id',Integer,primary_key=True),
Column('name',String(255)),
Column('email',String(255)),
Column('password',String(255))
)
#12:33 timestamp
