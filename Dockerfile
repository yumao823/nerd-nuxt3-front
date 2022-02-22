FROM node:16.13.2-alpine3.15 AS build
WORKDIR /home/node/app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:16.13.2-alpine3.15 AS prod
COPY --from=build /home/node/app/.output ./.output
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["node","./.output/server/index.mjs"]
