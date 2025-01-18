from rest_framework import serializers
from .models import Component , Vehicle, Repair

class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = '__all__'

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '_all_'


class RepairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Repair
        fields = '_all_'