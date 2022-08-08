from django.db import models
# Create your models here.
class StockSymbol(models.Model):
    symbol=models.CharField(max_length=200)
    shortName=models.CharField(max_length=200)
    longName=models.CharField(max_length=200)
    exchange=models.CharField(max_length=200)
    market=models.CharField(max_length=200)
    quoteType=models.CharField(max_length=200)