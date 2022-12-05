from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect
from jobs.models import *
from jobs.serializer import *
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout


@api_view(['GET'])
def index(request):

    return Response("Hello World!!")


@api_view(['POST'])
def sign_up(request):
    """
    veiw for users to sign up
    """
    if request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ApplicantSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        

        # email = request.POST['email']
        # first_name = request.POST['first_name']
        # last_name = request.POST['last_name']
        # password1 = request.POST['password1']
        # password2 = request.POST['password2']
        # phone = request.POST['phone']
        # gender = request.POST['gender']
        # image = request.POST['image']

        # if password1 != password2:
        #     print(request, "passwords do not match")
        #     return redirect('/sign_up')
        # applicants = Applicant.objects.create(first_name=first_name, last_name=last_name, email=email,
        #                                       phone=phone, gender=gender, image=image,password=password1, type='applicant')
        # applicants.save()
        return Response(request, status=status.HTTP_201_CREATED)

@api_view(['POST', 'GET'])
def sign_in(request):
    if request.user.is_authenticated:
        return redirect('/')
    else:
        if request.method == 'POST':
            user = sign_up(request)

            if user is not None:
                user1 = Applicant.objects.get(user)
                if user1.type == 'applicant':
                    return redirect('/user_homepage')

@api_view(['GET', 'POST'])
def applicant_list(request):
    """
    List all applicants or create a new one
    """
    if request.method == 'GET':
        applicant = Applicant.objects.all()
        serializer = ApplicantSerializer(applicant, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ApplicantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET', 'PUT', 'DELETE'])
def applicant_details(request, pk):
    """
    retrieve, updates and deletes an applicant record
    """
    try:
        applicant = Applicant.objects.get(pk=pk)
    except Applicant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ApplicantSerializer(applicant)
        return Response(serializer.data)

    elif request.method == "PUT":
        # data = JSONParser().parse(request)
        serializer = ApplicantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        applicant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@csrf_protect
@api_view(['GET', 'POST'])
def company_list(request):
    """
    List all companys available
    """
    if request.method == "GET":
        company = Company.objects.all()
        serializer = CompanySerializer(company, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_protect
@api_view(['GET', 'PUT', 'DELETE'])
def company_details(request, pk):
    """
    retrieve, update and deletes a company record
    """
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == "PUT":
        # data = JSONParser().parse(request)
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@csrf_protect
@api_view(['GET', 'POST'])
def job_list(request):
    """
    List all companys available
    """
    if request.method == "GET":
        job = Job.objects.all().order_by('-creation_date')
        serializer = JobSerializer(job, many=True)
        return Response(serializer.data, status=200)
    
    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@csrf_protect
@api_view(['GET', 'PUT', 'DELETE'])
def job_details(request, pk):
    """
    retrieve, update and deletes a company record
    """
    try:
        job = Job.objects.get(pk=pk)
    except Job.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = CompanySerializer(job)
        return Response(serializer.data)
    elif request.method == "PUT":
        # data = JSONParser().parse(request)
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        job.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@csrf_protect
@api_view(['GET'])
def application_details(request):
    """ 
    list details of application
    """
    if request.method == 'GET':
        application = Application.objects.all()
        serializer = ApplicationSerializer(application)
        return Response(serializer, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = ApplicationSerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)
