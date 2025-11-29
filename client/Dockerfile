# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm ci

COPY client .

RUN npm run build
# RUN npx tailwindcss -i ./src/input.css -o ./src/output.css --minify

RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/build ./build
COPY server ./server

EXPOSE 5000

USER node

CMD ["node", "server/index.js"]
# CMD ["serve", "-s", "build"]