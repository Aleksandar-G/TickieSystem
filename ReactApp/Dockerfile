FROM node:latest

WORKDIR /app

EXPOSE 3000

COPY package.json ./
COPY package-lock.json ./
RUN npm install
Run npm install react-scripts@3.4.1 -g

COPY src/ .

CMD ["npm", "start"]
