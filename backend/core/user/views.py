import json
from flask_sqlalchemy import SQLAlchemy
from flask import request, make_response, jsonify
from flask.views import MethodView
from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity
from core.models import User
from core import db

class ProfileAPI(MethodView):

    def __init__(self):
        verify_jwt_in_request()
    
    def get(self):
        user = User.query.filter_by(email=get_jwt_identity()).first()
        
        responseObject = {
            'email': user.email,
            'password': user.password,
            'activate': user.active,
            'os': user.os,
            'os_version': user.os_version
        }
        return make_response(jsonify(responseObject))