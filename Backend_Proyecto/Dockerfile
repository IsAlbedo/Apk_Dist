FROM python:3.12.3-bullseye

ENV PYTHONUNBUFFERED 1
ENV PYTHONDOWNWRITEBYTECODE 1 

WORKDIR /app

COPY . /app/

RUN apt-get update 


COPY ./requirements.txt .
RUN pip install -r requirements.txt

