FROM node:18.13.0-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN npm i --global turbo
COPY . .
RUN turbo prune --scope=money-tracker-web --docker

FROM node:18.13.0-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo run build --filter=money-tracker-web...

FROM node:18.13.0-alpine AS runner
WORKDIR /app

COPY --from=installer /app .

EXPOSE 3000
CMD ["npm", "run", "preview", "--prefix", "apps/web"]