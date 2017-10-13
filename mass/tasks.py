import json
import uuid

from celery import shared_task
from channels import Group


@shared_task
def broadcast():
    Group('test').send({"text": json.dumps(str(uuid.uuid4()))})
