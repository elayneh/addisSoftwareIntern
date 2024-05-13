FROM node:21-alpine

WORKDIR /app

ADD package.json yarn.lock /app/

RUN yarn

COPY . /app/

ENV PORT=5000

EXPOSE ${PORT}

CMD ["yarn", "start:prod"]