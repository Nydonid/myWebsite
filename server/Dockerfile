# build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./


# production stage
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci

# COPY --from=builder /app/client/build ./build
# COPY server ./server

COPY . .

EXPOSE 5000

USER node

CMD ["node", "index.js"]
