FROM node:24

COPY . .

EXPOSE 3000

CMD node server.mjs