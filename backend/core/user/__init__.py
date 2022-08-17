from flask import Blueprint
from .views import ProfileAPI


user_blueprint = Blueprint('user',
                __name__)
                

# define the API resources
profile_view = ProfileAPI.as_view('profile_api')

# add Rules for API Endpoints
user_blueprint.add_url_rule(
    '/profile',
    view_func = profile_view,
    methods=['GET']
)



from . import views