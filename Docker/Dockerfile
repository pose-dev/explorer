# Build
FROM node:lts-alpine as build

WORKDIR /code

# Service
FROM node:lts-alpine as service

COPY ./ /srv/web-app/

WORKDIR /srv/web-app/

ENV NODE_ENV production
ENV MODE production

EXPOSE 5111

CMD ["node", "serve.js"]