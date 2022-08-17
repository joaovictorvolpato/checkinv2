from flask import Blueprint
from .views import LogoutAPI, RegisterAPI, LoginAPI


auth_blueprint = Blueprint('auth',
                __name__)
              

# define the API resources
registration_view = RegisterAPI.as_view('register_api')
login_view = LoginAPI.as_view('login_api')
logout_view = LogoutAPI.as_view('logout_api')

# add Rules for API Endpoints
auth_blueprint.add_url_rule(
    '/register',
    view_func = registration_view,
    methods=['POST']
)
auth_blueprint.add_url_rule(
    '/login',
    view_func = login_view,
    methods=['POST']
)

auth_blueprint.add_url_rule(
    '/logout',
    view_func = logout_view,
    methods=['POST']
)

from . import views