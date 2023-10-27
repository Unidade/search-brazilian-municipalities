FROM node:20

WORKDIR /app

COPY . .

RUN apt-get update && apt-get upgrade -y &&  \
    npm install

EXPOSE 8080
