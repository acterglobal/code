FROM node:15.8.0-alpine AS prebase
# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src
EXPOSE 3000

FROM prebase as base
WORKDIR /usr/src
# Prisma schema is needed for postinstall client generation
COPY prisma ./
# Install dependencies
COPY package*.json ./
COPY yarn*.lock ./
RUN yarn

FROM base as source
# Copying source files
WORKDIR /usr/src
COPY . .

FROM source AS dev
CMD "yarn" "dev"

FROM source AS prod
# Building app
RUN yarn run build
# Running the app
CMD "yarn" "start"
