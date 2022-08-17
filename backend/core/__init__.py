from flask import Flask
from config import Configuration
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager

app = Flask(__name__)
app.config.from_object(Configuration)


db = SQLAlchemy(app)
migrate = Migrate(app, db)

from .auth import auth_blueprint
from .user import user_blueprint

app.register_blueprint(user_blueprint)
app.register_blueprint(auth_blueprint)

