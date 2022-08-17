from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from core import db


class User(UserMixin, db.Model):

    __tablename__ = 'user'

    id = db.Column(db.Integer, 
                    primary_key=True)

    email = db.Column(db.String(128), 
                        unique=True, 
                        nullable=False)

    password = db.Column(db.String(255), 
                            nullable=False)

    active = db.Column(db.Boolean(), 
                        default=True, 
                        nullable=False)

    os = db.Column(db.String(128), 
                    nullable = False)

    os_version= db.Column(db.String(128), 
                            nullable = False)



    def __init__(self, email, password, os, os_version):
        self.email = email
        self.password = password
        self.active = True
        self.os = os
        self.os_version = os_version

