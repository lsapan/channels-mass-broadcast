from channels import Group
from channels.generic.websockets import WebsocketConsumer


class TestConsumer(WebsocketConsumer):
    def connection_groups(self, **kwargs):
        return ["test"]
