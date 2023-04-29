FROM node:latest
WORKDIR app
COPY . .
RUN npm install
RUN npm init
RUN npm i express
RUN npm i mongoose
RUN npm i nodemon
EXPOSE 8000
CMD ["node","index.js"]
