# project/auth/views.py
import email
import json
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager

from flask import request, make_response, jsonify
from flask.views import MethodView

from core.auth import auth_token_handler
from core.models import User
from core import db

from core import app

jwt = JWTManager(app)

@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response

        
class RegisterAPI(MethodView):
    """
    User Registration Resource
    """

    def post(self):
        # get the post data
        register_data = request.get_json()
        # check if user already exists
        user = User.query.filter_by(email=register_data.get('email')).first()
        if not user:
            try:
                
                user = User( 
                    email = register_data.get('email'),
                    password = register_data.get('password'),
                    os = register_data.get('os'),
                    os_version = register_data.get('os_version') 
                )
                
                # insert the user
                db.session.add(user)
                db.session.commit()

                responseObject = {
                    'status': 'success',
                    'message': 'Successfully registered.',
                }

                return make_response(jsonify(responseObject)), 201

            except Exception as e:
                responseObject = {
                    'status': 'fail',
                    'message': 'Some error occurred. Please try again.'
                }
                return make_response(jsonify(responseObject)), 401
        else:
            responseObject = {
                'status': 'fail',
                'message': 'User already exists. Please Log in.',
            }
            return make_response(jsonify(responseObject)), 202


class LoginAPI(MethodView):
    """
    User Login Resource
    """

    def post(self):
        # get the post data
        login_data = request.get_json()
        try:
            # fetch the user data
            
            user = User.query.filter_by(
                email= login_data.get('email')
            ).first()

            if user:
                
                email = login_data.get('email')

                if user.password == login_data.get('password'):

                    #login_user(user, remember = True)
            
                    access_token = create_access_token(identity=email)
                    responseObject = {"access_token":access_token}
                    response = make_response(jsonify(response))
                    response.headers.add("Access-Control-Allow-Origin", "*")
                    return response
                else:
                    responseObject = {
                        'status': 'fail',
                        'message': 'Senha incorreta'
                    }
                    response = make_response(jsonify(responseObject))
                    response.headers.add("Access-Control-Allow-Origin", "*")
                    return response, 402
            else:
                responseObject = {
                    'status': 'fail',
                    'message': 'User does not exist.'
                }

                response = make_response(jsonify(responseObject))
                response.headers.add("Access-Control-Allow-Origin", "*")
                return make_response(jsonify(responseObject)), 404

        except Exception as e:
            print(e)
            responseObject = {
                'status': 'fail',
                'message': 'Try again'
            }
            
            response = make_response(jsonify(responseObject))
            response.headers.add("Access-Control-Allow-Origin", "*")

            return make_response(jsonify(responseObject)), 500

class LogoutAPI(MethodView):

    def post(self):

        response = jsonify({"msg": "logout successful"})
        unset_jwt_cookies(response)
        return response
      

