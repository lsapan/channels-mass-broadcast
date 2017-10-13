# channels-mass-broadcast
A test to demonstrate dropped messages when using WebSockets with Django Channels.

## How does the test work?
Simply fire up the test using Docker (instructions below), and navigate to
[http://localhost:8000/](http://localhost:8000/) in your favorite browser.

By default, the test will create 200 sockets (one at a time, in 50ms intervals).
Each of these sockets will report their status in the JavaScript console.

Every 10 seconds, a celery process will send out a random UUID message to the
"test" Group (which each socket is automatically subscribed to upon connecting).
You can tell how many sockets actually received the message by looking at the
number next to the message. Here's an example with two browsers running at the
same time (Chrome left, Safari right):

<img width="1343" alt="screen shot 2017-10-12 at 9 27 39 pm" src="https://user-images.githubusercontent.com/3203257/31526875-892398c6-af97-11e7-8143-25495810498f.png">

Obviously, any number less than 200 means messages were lost. You can configure
the number of sockets to open in `mass/static/js/app.js`. Simply change the
value of `targetSockets`.

I'd recommend using separate browsers if you are going to run more than one
instance of the test at once.

## How do I run the test?
It's very easy once you have Docker! Simply:
```
docker-compose pull
docker-compose up -d
```

That's it! To view the logs from a certain service, run:
```
docker-compose logs -f service_name
```

So to view logs from daphne you'd run:
```
docker-compose logs -f web
```
