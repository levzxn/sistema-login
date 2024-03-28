from django.http import HttpRequest
from ninja import NinjaAPI,Schema
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from typing import Any, Dict
from ninja.security import HttpBearer
from django.conf import settings
import jwt

api = NinjaAPI()

class UserBearer(HttpBearer):
    def authenticate(self, request, token):
        try:    
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user_id = payload.get('user_id')
            if user_id:
                user = User.objects.get(id=user_id)
                return user
        except jwt.ExpiredSignatureError:
            pass
        except (jwt.InvalidTokenError, User.DoesNotExist):
            pass

        return None

@api.get('teste/')
def teste(request):
    return 1

@api.get('logado/',auth=UserBearer())
def teste(request):
    return 'Usuário logado'

class UserSchema(Schema):
    username:str
    password:str

@api.post('register/')
def register(request,user:UserSchema):
    user = User.objects.create_user(user.username,'',user.password)
    user.save()
    return 200

@api.post('login/')
def login(request,user:UserSchema):
    authenticated_user = authenticate(request,username=user.username,password=user.password)
    if authenticated_user is not None:
        payload = {
            'user_id': authenticated_user.id, 
        }
        token = jwt.encode(payload, settings.SECRET_KEY) 
        token = token.decode('utf-8')
        return token
    else:
        return 401
    
