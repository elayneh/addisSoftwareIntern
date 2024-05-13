FROM node:21-alpine

WORKDIR /app

ADD package.json yarn.lock /app/

RUN yarn

COPY . /app/

ENV PORT=3000

EXPOSE ${PORT}

RUN yarn build

CMD yarn preview