FROM node:latest
MAINTAINER Silvio Mattos
ENV NODE_ENV=development
COPY . /var/www
WORKDIR /var/www
RUN npm install 
ENTRYPOINT ["npm", "run", "prod"]
EXPOSE 3000
