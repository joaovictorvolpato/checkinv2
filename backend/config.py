import os
from dotenv import load_dotenv
from datetime import timedelta, datetime, timezone
load_dotenv()

# pega o caminho da pasta principal (flask)
basedir = os.path.abspath(os.path.dirname(__file__))

class Configuration(object):
    # SECRET_KEY recebe o valor do SECRET_KEY do .env
    # Método usado é possível por causa do load_dotenv
    SECRET_KEY = os.environ.get('SECRET_KEY')
    JWT_SECRET_KEY = SECRET_KEY
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    # SQLACHEMY_DATABASE_URI recebe a url do banco de dados
    # O or é utilizado, pois caso o url não tenha sido declara
    # do no .env, ele será criado no diretório principal. Com
    # o nome de todo.db
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'todo.db')
    
    # Setar isto em falso, desabilita o recurso que envia um sinal
    # toda vez que o bd muda
    SQLALCHEMY_TRACK_MODIFICATIONS = False