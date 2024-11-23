from django.urls import path
from . import views

urlpatterns = [
    path('',views.landing,name='landing'),
    path('index/', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('library/', views.library, name='library'),
    path('prediction/', views.prediction, name='prediction'),
    path('services/', views.services, name='services'), 
     path('newsletter/signup/', views.newsletter_signup, name='newsletter_signup'),
]
