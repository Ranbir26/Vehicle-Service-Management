from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Component, Vehicle, Repair
from .serializers import ComponentSerializer, VehicleSerializer, RepairSerializer

class ComponentViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing component instances.
    """
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VehicleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing vehicle instances.
    """
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RepairViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing repair instances.
    """
    queryset = Repair.objects.all()
    serializer_class = RepairSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)