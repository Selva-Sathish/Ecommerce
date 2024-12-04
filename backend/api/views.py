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

class ShowListProductDelete(generics.DestroyAPIView):
    queryset = ShowListProduct.objects.all()
    serializer_class = ShowListProductSerializer
    lookup_field = 'pk'

from rest_framework.generics import mixins
class ShowListProductUpdate(mixins.UpdateModelMixin, generics.GenericAPIView):
    queryset = ShowListProduct.objects.all()
    serializer_class = ShowListProductSerializer  

    def patch(self, request, *args, **kwargs):
        print(request.data)
        return self.partial_update(request, *args, **kwargs)
    
class ShowListProductById(generics.RetrieveAPIView):
    queryset = ShowListProduct.objects.all()
    serializer_class = ShowListProductSerializer
    lookup_field = 'pk'
