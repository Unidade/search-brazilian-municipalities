FROM node:20.8.1

WORKDIR /app

COPY . .

RUN apt-get update && apt-get upgrade -y &&  \
    npm install