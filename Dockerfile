FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app

#change for prod
ENV NODE_ENV=developtment
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/index.js ./
COPY --from=builder /app/src ./src

EXPOSE 5000
CMD ["node", "index.js"]