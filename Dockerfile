FROM node:20-alpine AS base

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
ENV NODE_ENV=production

COPY . .
RUN npm run build

EXPOSE 3000
ENV PORT=3000

CMD ["npm", "run", "start"]