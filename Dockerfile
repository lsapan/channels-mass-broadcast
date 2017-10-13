FROM python:3.6

# Install app requirements
COPY requirements.txt /home/docker/code/
RUN pip install -r /home/docker/code/requirements.txt

# Install the app code
COPY . /home/docker/code/
RUN rm -rf /home/docker/code/static/

WORKDIR /home/docker/code
