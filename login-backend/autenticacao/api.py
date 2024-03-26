from ninja import NinjaAPI,Schema
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from typing import Dict
from ninja.security import django_auth

api = NinjaAPI()

@api.get('teste/')
def teste(request):
    return 1

@api.get('logado/',auth=django_auth)
def teste(request):
    return 'Usuário logado'

class UserSchema(Schema):
    username:str
    password:str

@api.post('register/')
def register(request,userS:UserSchema):
    user = User(username = userS.username)
    user.set_password(userS.password)
    user.save()
    return 200

@api.post('login/')
def login(request,user:UserSchema):
    username = user.username
    password = user.password
    autenticated_user = authenticate(request,username=username,password=password)
    if autenticated_user is not None:
        login(request,autenticated_user)
        return 200
    else:
        return 401