from rest_framework import serializers
from .models import StockSymbol
class SymbolSerializer(serializers.Serializer):
    symbol=serializers.CharField(max_length=200)
    shortName=serializers.CharField(max_length=200)
    longName=serializers.CharField(max_length=200)
    exchange=serializers.CharField(max_length=200)
    market=serializers.CharField(max_length=200)
    quoteType=serializers.CharField(max_length=200)
    def create(self, validated_data):
        return StockSymbol.objects.create(**validated_data)
