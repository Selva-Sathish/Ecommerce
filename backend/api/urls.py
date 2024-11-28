from django.urls import path
from . import views
urlpatterns = [
    path('showlist/', views.ShowListProductView.as_view()),
    path('showlist/add/', views.ShowListProductAdd.as_view()),
    path('showlist/delete/<int:pk>/',views.ShowListProductDelete.as_view()),
    path('showlist/edit/<int:pk>/',views.ShowListProductUpdate.as_view()),
    path('showlist/<int:pk>/',views.ShowListProductById.as_view()),
]