FROM node:22
WORKDIR /app
COPY server/package*.json ./server/
RUN cd server && npm install --production
COPY server ./server
COPY client/build ./client/build
WORKDIR /app/server
EXPOSE 8080
CMD ["node", "index.js"]