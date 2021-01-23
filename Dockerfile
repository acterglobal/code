FROM node:current-stretch
# RUN apt-get update
# RUN apt-get install -y g++ make python libvips-dev

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Workaround for M1 chip problems with sharp. sorry.
RUN wget https://github.com/libvips/libvips/releases/download/v8.10.5/vips-8.10.5.tar.gz && tar xf vips-8.10.5.tar.gz
WORKDIR /usr/src/vips-8.10.5
RUN ./configure && make && make install && ldconfig

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
WORKDIR /usr/src/app
COPY . .

# # Building app
RUN yarn run build

EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
