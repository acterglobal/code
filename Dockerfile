FROM node:current-alpine

WORKDIR /usr/src

# Prisma schema is needed for postinstall client generation
COPY prisma ./

# Install dependencies
COPY package*.json ./
COPY yarn*.lock ./

RUN yarn

# add node_modules path to environment
ENV PATH /usr/src/node_modules/.bin:${PATH}

# Copying source files
WORKDIR /usr/src
COPY . .

# # Building app
RUN yarn run build

EXPOSE 3000

# Running the app
CMD "npm" "run" "start"
