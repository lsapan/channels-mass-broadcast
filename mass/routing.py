from channels.routing import route_class

from mass.consumers import TestConsumer

channel_routing = [
    route_class(TestConsumer, path=r'^/test/'),
]
