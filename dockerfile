 # base image
FROM node:9.6.1

RUN npm install 

# start app
CMD ["npm", "start"]