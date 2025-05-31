FROM node:22

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENTRYPOINT ["node"]
CMD ["dist/index.js"]
