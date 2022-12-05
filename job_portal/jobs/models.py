from django.db import models
from django.utils import timezone


class Applicant(models.Model):
    """
    this class is for the Applicant profile.
    stores the class attribute as column name in the Employee table
    """

    gender_choices = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other')
    ]

    first_name = models.CharField(max_length=100, default="")
    last_name = models.CharField(max_length=100, default="")
    date_of_birth = models.DateField(null=True)
    phone = models.CharField(max_length=15)
    image = models.ImageField(upload_to="")
    password = models.CharField(max_length=100, default="")
    gender = models.CharField(max_length=1,choices=gender_choices)
    type = models.CharField(max_length=15)

    def __str__(self):
        return "{:s} {:s}".format(self.first_name, self.last_name)


class Company(models.Model):
    """
    Table for Company profile
    """

    company_name = models.CharField(max_length=100, default="")
    company_description = models.TextField(default="")
    phone = models.CharField(max_length=15)
    image = models.ImageField(upload_to="")
    type = models.CharField(max_length=15)
    location = models.CharField(max_length=100, default="")
    website = models.CharField(max_length=100, default="")
    password = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.company_name


class Job(models.Model):
    """
    Table for Job Post,
    this table has a foriegn key from Company for identification
    To the Employee Table
    """
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    title = models.CharField(max_length=200)
    salary = models.FloatField()
    image = models.ImageField(upload_to="")
    description = models.TextField()
    experience = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    skills = models.CharField(max_length=200)
    creation_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title


class Application(models.Model):
    """
    This class defines the activity model
    For the job_Post
    """

    company = models.CharField(max_length=200, default="")
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE)
    resume = models.ImageField(upload_to="")
    apply_date = models.DateField()

    def __str__(self):
        return str(self.applicant)
