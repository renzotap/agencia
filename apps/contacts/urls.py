from django.urls import path
from .views import *
# from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', ContactCreateView.as_view()),
    path('opt-in', OptInView.as_view()),
]