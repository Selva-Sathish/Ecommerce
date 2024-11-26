from django.urls import path
from . import views
urlpatterns = [
    path('showlist/', views.ShowListProductView.as_view()),
    path('showlist/add/', views.ShowListProductAdd.as_view()),
]