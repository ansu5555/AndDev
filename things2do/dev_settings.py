from .settings import *

SECRET_KEY = '=6wm+k5yo&d7ue3a^!qxdh#wkms0+xtn!a0-z04q!e3r435)r('

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'things2do',
        'USER': 'todouser',
        'PASSWORD': 'Password1',
        'HOST': 'localhost',
        'PORT': '',
    }
}

STATIC_ROOT = os.path.join(BASE_DIR, '../staticroot/')
