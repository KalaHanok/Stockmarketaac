import json
from multiprocessing.resource_sharer import stop
from operator import index
from posixpath import split
import pandas as pd
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
    data_dic={'data':[]}
    values=StockSymbol.objects.all()
    api_key='VXBJH8A0SFUYCWMR'
    ts=TimeSeries(key=api_key,output_format='pandas')
    data,meta_data=ts.get_intraday(symbol='MSFT',interval='1min',outputsize='full')
    close_data=data['4. close']
    percentage_change=close_data.pct_change()
    last_change=percentage_change[-1]
    #print(last_change)
    print(data)
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
                
def test(request,rag):
    data_dic={'data':[]}
    anurag='D1POQPCSKKGG4TQ8'
    hanok='VXBJH8A0SFUYCWMR'
    sri='XYI25WD28RBUU573'
    akash='7I53ZP4DF8JGFJAE' 
    api_key=''
    rage=rag//10
    rag=str(rag)
    if int(rag[-1])==1:
        api_key=anurag
    elif int(rag[-1])==2:
        api_key=hanok
    elif int(rag[-1])==3:
        api_key=sri
    elif int(rag[-1])==4:
        api_key=akash
    ts=TimeSeries(key=api_key,output_format='pandas')
    datas=StockSymbol.objects.all()
    for i in range(rage,rage+6):
        ticker=datas[i].symbol
        print(ticker)
        try:
            data,meta_data=ts.get_intraday(symbol=ticker,interval='1min',outputsize='full')
            close_data=data['4. close']
            percentage_change=close_data.pct_change()
            last_change=percentage_change[-1]
            print(last_change)
            data_dic['data'].append({'name':datas[i].shortName,'change':round(last_change,4)})
        except ValueError:
            pass
    j_data=json.dumps(data_dic)
    print(j_data)

    return HttpResponse(j_data)
@csrf_exempt
def Search(request):
    symbols=StockSymbol.objects.all().values()
    df=pd.DataFrame(symbols)
    if request.method=="POST":
        json_data=request.body
        stream=io.BytesIO(json_data)
        python_data=JSONParser().parse(stream)
        python_data=python_data['search'].lower()
        df=df.loc[(df.shortName.str.lower()).str.slice(stop=len(python_data)).eq(python_data)|(df.longName.str.lower()).str.slice(stop=len(python_data)).eq(python_data)| (df.symbol.str.lower()).str.slice(stop=len(python_data)).eq(python_data)].head()
        print(df) 
        sestr_data=df.to_json(orient='index')
        print(sestr_data)
        return HttpResponse(sestr_data)
def Basic_details(request,id):
    if request.method=="GET":
        print(id)
        stock_deatails=StockSymbol.objects.get(pk=id)
        print(stock_deatails.longName)
        return HttpResponse(json.dumps({"id":stock_deatails.id,"symbol":stock_deatails.symbol,"shortName":stock_deatails.shortName,"longName":stock_deatails.longName,"exchange":stock_deatails.exchange,"market":stock_deatails.market,"quoteType":stock_deatails.quoteType}))
def Apikey(request):
    if request.method=='GET':
        api_key='D1POQPCSKKGG4TQ8'
        pobj={'apiKey':api_key}
        jobj=json.dumps(pobj)
        print(jobj)
        return HttpResponse(jobj)