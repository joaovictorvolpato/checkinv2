import jwt
import os
import time
from datetime import datetime, timedelta
import json

TOKEN_SECRET_KEY = os.getenv('SECRET_KEY')

def encode_token(id):
    date_time = datetime.utcnow()+timedelta(minutes=60)
    
    auth_token = jwt.encode({
        'id': id,
        'expires': json.dumps(date_time, indent=4, sort_keys=True, default=str)
    }, TOKEN_SECRET_KEY, 
        algorithm='HS256')
    return auth_token

def decode_token(token):
    try:
        payload = jwt.decode(token, TOKEN_SECRET_KEY)
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'


def validate_token(token, id):
    try:
        data = jwt.decode(token, TOKEN_SECRET_KEY)
    except Exception as e:
        return False
    if data['id'] == id and data['exp'] >= time.time():
        return True
    else:
        return False