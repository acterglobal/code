FROM node:current-alpine

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src/app


# Install dependencies
COPY package*.json ./
COPY yarn*.lock ./
# Prisma schema is needed for postinstall client generation
COPY prisma /usr/src/app
RUN yarn

# add node_modules path to environment
ENV PATH /usr/src/app/node_modules/.bin:${PATH}

# Copying source files
COPY . /usr/src/app

# Generate code
RUN yarn run generate

# Building app
RUN yarn run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
