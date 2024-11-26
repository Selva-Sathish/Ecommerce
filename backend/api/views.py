from django.shortcuts import render

from rest_framework.response import Response
from .models import ShowListProduct
from .serializers import ShowListProductSerializer
from rest_framework import status
from rest_framework import generics

class ShowListProductAdd(generics.CreateAPIView):
    queryset = ShowListProduct.objects.all()
    serializer_class = ShowListProductSerializer

class ShowListProductView(generics.ListAPIView):
    queryset = ShowListProduct.objects.all()
    serializer_class = ShowListProductSerializer