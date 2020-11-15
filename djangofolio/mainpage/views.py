from django.shortcuts import render

# Create your views here.
def index(request):
    context= {
        "title":"Guillaume Roux Créations"
    }
    return render(request,'mainpage/mainpage.html', context)