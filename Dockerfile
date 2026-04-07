# syntax=docker/dockerfile:1

FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["package.json", "app.js"]
