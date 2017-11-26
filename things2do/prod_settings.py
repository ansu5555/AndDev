from .settings import *
import dj_database_url

SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = False

ALLOWED_HOSTS = ['todomngr.herokuapp.com']

DATABASES = {'default': dj_database_url.config()}

STATIC_ROOT = os.path.join(BASE_DIR, 'staticroot/')
