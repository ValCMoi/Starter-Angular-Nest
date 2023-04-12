# base image
FROM node:19

RUN mkdir /usr/src/app 
 
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .

RUN npm install
# start app
#CMD ng serve --host 0.0.0.0 --disable-host-check --poll=100
EXPOSE ${ANGULAR_PORT_INIT}