FROM node:10.15.0-alpine
RUN mkdir -p /app

EXPOSE 4101
ENV PORT_EX=4101

RUN mkdir -p /app

COPY app/ /app/
WORKDIR /app
RUN npm install

WORKDIR /app

COPY app /app

RUN chown -R node:node /app

USER node

CMD ["node", "index.js"]





FROM node:10.13.0-alpine

# google pub-sub deps
RUN apk update
RUN apk add --no-cache make
RUN apk add --no-cache build-base
RUN apk add --no-cache python
RUN apk add --no-cache gcc
RUN apk add --no-cache libc6-compat

RUN npm config set registry https://npm.wdprapps.disney.com/

EXPOSE 4117
ENV APP_ID=DTSS-UNIDTOOLS-QA
ENV APP_ENV=QA
ENV DEV_PORT=4117
ENV BASIC_AUTH=false
ENV DOCKERIZED=true
ENV REACT_APP_EMAIL_SVC='https://email.unid.go.com/v2?'
ENV REACT_APP_REDIRECT_SVC='https://u.go.com/?target='

RUN mkdir -p /app

COPY app/ /app/
# create a production build
WORKDIR /app/client
RUN npm install
RUN npm run build
# install server dependencies
WORKDIR /app/
RUN npm install

RUN chown -R node:node /app

USER node

RUN npm rebuild grpc

CMD ["node", "server.js"]
