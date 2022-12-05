from rest_framework import serializers
from jobs.models import *


"""serializing and deserializing models"""


class ApplicantSerializer(serializers.Serializer):
    """
    using model serializers to serialize and deserialize objects to json format
    """
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    date_of_birth = serializers.CharField(max_length=50)
    phone = serializers.CharField(max_length=15)

    def create(self, validated_data):
        """
        Creates and return a new Applicant instance, given the validated data
        """
        return Applicant.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get(
            'first_name', instance.first_name)
        instance.last_name = validated_data.get(
            'last_name', instance.last_name)
        instance.date_of_birth = validated_data.get(
            'date_of_birth', instance.date_of_birth)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()
        return instance


class CompanySerializer(serializers.Serializer):
    """
    using model serializers to serialize and deserialize objects to json format
    """
    id = serializers.IntegerField(read_only=True)
    company_name = serializers.CharField(max_length=100)
    phone = serializers.CharField(max_length=15)
    website = serializers.CharField(max_length=100)
    company_description = serializers.CharField(max_length=1000)
    location = serializers.CharField(max_length=100)


class JobSerializer(serializers.Serializer):
    """
    using model serializers to serialize and deserialize objects to json format
    """
    id = serializers.IntegerField(read_only=True)
    job_title = serializers.CharField(max_length=100)
    company = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=1000)
    skills = serializers.CharField(max_length=100)
    start_date = serializers.CharField(max_length=50)
    end_date = serializers.CharField(max_length=50)
    location = serializers.CharField(max_length=100)

    def create(self, validated_data):
        """
        Creates and return a new Applicant instance, given the validated data
        """
        return Job.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.job_title = validated_data.get(
            'job_title', instance.job_title)
        instance.company = validated_data.get(
            'company', instance.company)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.skills = validated_data.get(
            'skills', instance.skills
        )
        instance.start_date = validated_data.get(
            'start_date', instance.start_date
        )
        
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()
        return instance


class ApplicationSerializer(serializers.Serializer):
    """
    using model serializers to serialize and deserialize objects to json format
    """
    id = serializers.IntegerField(read_only=True)
    company = serializers.CharField(max_length=100)
    job_title = serializers.CharField(max_length=100)
    applicant = serializers.CharField(max_length=100)
    apply_date = serializers.CharField(max_length=100)
