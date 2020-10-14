FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY public ./public

EXPOSE 3000
CMD [ "node", "server.js" ]