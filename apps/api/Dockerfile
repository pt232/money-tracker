
FROM node:18.13.0 AS builder

WORKDIR /app
RUN npm i --global turbo
COPY . .
RUN turbo prune --scope=money-tracker-api --docker

FROM node:18.13.0 AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo run build --filter=money-tracker-api...

FROM node:18.13.0 AS runner
WORKDIR /app

COPY --from=installer /app .

EXPOSE 5000
CMD [ "npm", "--prefix", "apps/api", "start" ]