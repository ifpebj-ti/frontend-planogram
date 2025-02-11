FROM node:18-alpine

WORKDIR /usr/appFrontend
COPY package*.json ./
RUN npm install

COPY . . 

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000
