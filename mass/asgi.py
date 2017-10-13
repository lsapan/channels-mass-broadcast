import os
import channels.asgi

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mass.settings")
channel_layer = channels.asgi.get_channel_layer()
