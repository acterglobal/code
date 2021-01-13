FROM node:current-alpine

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src/app

# Copying source files
COPY package*.json ./
COPY yarn*.lock ./

# Install dependencies
RUN yarn

# add node_modules path to environment
ENV PATH /usr/src/app/node_modules/.bin:${PATH}

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
