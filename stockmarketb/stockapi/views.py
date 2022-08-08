from django.http import HttpResponse
from django.shortcuts import render
import pandas as pd
from alpha_vantage.timeseries import TimeSeries
import time
from stocksymbol import StockSymbol
from .models import StockSymbol
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
import io
from django.views.decorators.csrf import csrf_exempt
from .serializers import SymbolSerializer
# Create your views here.
def Stock(request):
    values=StockSymbol.objects.get(pk=1)
    api_key='VXBJH8A0SFUYCWMR'
    ts=TimeSeries(key=api_key,output_format='pandas')
    data,meta_data=ts.get_intraday(symbol='MSFT',interval='1min',outputsize='full')
    close_data=data['4. close']
    percentage_change=close_data.pct_change()
    last_change=percentage_change[-1]
    print(last_change)
    return HttpResponse(data)
@csrf_exempt
def Symbols(request):
    if request.method=="POST":
        json_data=request.body
        stream=io.BytesIO(json_data)
        python_data=JSONParser().parse(stream)
        for i in range(len(python_data)):
            serializer=SymbolSerializer(data=python_data[i])
            print(serializer.is_valid())
            if serializer.is_valid():
                serializer.save()
