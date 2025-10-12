FROM node:18
WORKDIR /app
# Copy server
COPY server/package*.json ./server/
RUN cd server && npm install --production
COPY server ./server
# Copy client build
COPY client/build ./client/build
# Set working directory to server
WORKDIR /app/server
EXPOSE 8080
CMD ["node", "index.js"]