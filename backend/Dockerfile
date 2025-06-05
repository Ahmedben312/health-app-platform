# Stage 1: Development
FROM node:18-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# Stage 2: Production
FROM node:18-alpine AS prod
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
HEALTHCHECK --interval=30s CMD curl --fail http://localhost:5000/health || exit 1
CMD ["npm", "start"]