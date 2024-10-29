FROM node:18-alpine

WORKDIR /usr/appFrontend
COPY package*.json ./
RUN npm install

COPY . . 

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000