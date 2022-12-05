from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from jobs import views


urlpatterns = [
    path('sign_up/', views.sign_up, name='sign_up'),

    #Applicant
    path('applicants/', views.applicant_list),
    path('applicants/<int:pk>/', views.applicant_details),

    #company
    path('companys/', views.company_list),
    path('companys/<int:pk>/', views.company_details),

    #job_post
    path("job_list/", views.job_list),
    path('job_details/<int:pk>', views.job_details),
    
]

urlpatterns = format_suffix_patterns(urlpatterns)