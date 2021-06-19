from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('invoice', views.generate, name='generate'),
    path('login', views.login, name='login')
]
