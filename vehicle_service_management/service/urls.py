from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ComponentViewSet, VehicleViewSet, RepairViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'components', ComponentViewSet)
router.register(r'vehicles', VehicleViewSet)
router.register(r'repairs', RepairViewSet)

urlpatterns = [
    path('', include(router.urls)),
]