FROM node:current-alpine

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src


# Install dependencies
COPY package*.json ./
COPY yarn*.lock ./
# Prisma schema is needed for postinstall client generation
COPY prisma .
RUN yarn

# add node_modules path to environment
ENV PATH /usr/src/node_modules/.bin:${PATH}

# Generate code
RUN yarn run generate

# Copying source files
WORKDIR /usr/src/app
COPY . .


# Building app
RUN yarn run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
