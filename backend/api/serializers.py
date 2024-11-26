from rest_framework.serializers import ModelSerializer

from . import models 
class ShowListProductSerializer(ModelSerializer):
    class Meta:
        model = models.ShowListProduct
        fields = '__all__'

    