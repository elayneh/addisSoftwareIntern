FROM node:21-alpine

WORKDIR /app

ADD package.json yarn.lock /app/

RUN yarn

COPY . /app/

ENV PORT=5173

EXPOSE ${PORT}

RUN yarn build

CMD yarn preview