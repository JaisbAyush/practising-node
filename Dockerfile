FROM node:22

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["node", "src/index.js"]
