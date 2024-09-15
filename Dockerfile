FROM node:18.20.4-alpine3.20 AS build
COPY ./ /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM node:18.20.4-alpine3.20 AS production
COPY --from=build /app/dist/ /app/dist/
WORKDIR /app
EXPOSE 3000
ENTRYPOINT [ "node", "dist/index.js" ]