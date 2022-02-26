from sqlalchemy import create_engine, MetaData

#engine = create_engine("mysql+pymysql://root@localhost3306/test") incase below does not work for mysql xxaamp connection
engine = create_engine("mysql+pymysql://root@localhost/test")
meta = MetaData()
conn = engine.connect()
