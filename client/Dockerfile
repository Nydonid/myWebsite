# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Client build
RUN npm ci               # installs react-scripts here
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

# WORKDIR /app

ENV NODE_ENV=production

#COPY package*.json ./
COPY --from=builder /app/build ./build

EXPOSE 80

USER node

CMD ["npx", "serve", "-s", "build", "-l", "80"]
