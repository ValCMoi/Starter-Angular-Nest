# base image
FROM node:19

RUN mkdir /usr/src/app 
 
WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

COPY . .

RUN npm install

EXPOSE ${NEST_PORT_INIT}