FROM node:18-slim

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

RUN yarn && yarn cache clean

COPY --chown=node:node . .

ENV NODE_ENV=production

RUN yarn build

USER node

EXPOSE 80

CMD node ./dist/app.js