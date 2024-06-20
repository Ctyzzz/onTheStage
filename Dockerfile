# Install dependencies and build
FROM node:20-alpine as builder

WORKDIR /app
COPY . .

RUN npm ci 
RUN npm run build

# Bundle static assets with nginx
FROM nginx:alpine as production
ENV NODE_ENV production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
 
CMD ["nginx", "-g", "daemon off;"]
