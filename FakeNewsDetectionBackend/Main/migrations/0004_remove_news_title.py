# Generated by Django 5.1.3 on 2024-11-29 10:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0003_todaysnews'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='title',
        ),
    ]
