# Acter <!-- omit in toc -->

This is some description

## Table of contents <!-- omit in toc -->

- [Laptop setup](#laptop-setup)
- [Technology Stack](#technology-stack)
- [Getting started](#getting-started)
  - [Service Dependencies](#service-dependencies)
  - [Installation, build and dev server](#installation-build-and-dev-server)
  - [Deployment](#deployment)
    - [Demo](#demo)
    - [Production](#production)
- [Monorepo Layout](#monorepo-layout)
  - [`apps/web`](#appsweb)
  - [`packages/components`](#packagescomponents)
  - [`packages/lib`](#packageslib)
  - [`packages/schema`](#packagesschema)
  - [`services/api`](#servicesapi)
  - [`services/jobs`](#servicesjobs)
  - [`tools`](#tools)
- [Vendors](#vendors)
  - [Github](#github)
  - [Heroku](#heroku)
  - [Auth0](#auth0)
  - [Amazon AWS](#amazon-aws)
  - [Google](#google)
  - [Imgix](#imgix)
  - [Sendgrid](#sendgrid)
  - [Sentry](#sentry)

# Laptop setup

Head to [New laptop setup](./docs/new-laptop-setup.md)

# Technology Stack

Acter is built with the following stack.
|Role|Technology|
|-|-|
|Language|[Typescript]()|
|Frontend|[Next.js](https://nextjs.org)|
|Components|[Material-UI](https://material-ui.com/)|
| Testing | [Jest](https://jestjs.io), [Testing Library](https://testing-library.com), [Storybook](https://storybook.js.org/) |
|Authenticaton|[Auth0](https://auth0.com)| 
| Hosting/DNS | [Heroku](https://heroku.com), [CloudFlare](https://cloudflare.com) |
| Notification/Email | [Sendgrid](https://sendgrid.com), [Fake SMTP Server](https://github.com/ReachFive/fake-smtp-server) on dev|
|API/Data|[GraphQL](https://graphql.org/), [Apollo](https://www.apollographql.com/) (server), [URQL](https://formidable.com/open-source/urql/) (client), [TypeGraphQL](https://typegraphql.com/), [Prisma TypeGraphQL](https://prisma.typegraphql.com/) |
|Database|[PostgreSQL](https://www.postgresql.org/), [Prisma ORM](https://www.prisma.io/)|

# Getting started

## Service Dependencies

The application's dependencies are dockerized. Currently this consists of a Postgres database and a fake SMTP server. Make sure that [Docker](http://docker.com), copy `.env.example` to `.env` and set the appropriate fields is set up, then run:

```
docker-compose up -d --build
```

Or better yet use the VS Code built-in Docker command: `command+shift+p` and select "Docker Compose: Up"

We have a fake SMTP server that is deployed with Docker which allows us to receive emails in development. When our app is running in Docker, it is available at [http://localhost:1080](http://localhost:1080).

## Installation, build and dev server

The app currently uses [Yarn 3](https://yarnpkg.com) with workspaces to manage it's monorepo dependencies. Get started by running the following from the root folder: 

```
yarn
```

After that, you will need to build various parts of the application:
```
yarn build
```

Finally, start the Next.js server with:

```
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Deployment

### Demo

The `main` branch is automatically deployed as [the `acter-dev` app on Heroku](https://dashboard.heroku.com/apps/acter-dev) to https://demo.acter.app.

### Production

Deployment to production is achieved as a manual deploy of `main` as the [`acter-prod` app on Heroku](https://dashboard.heroku.com/apps/acter-prod/deploy/github) to https://acter.app.
# Monorepo Layout

Acter's codebase is laid out in a [monorepo](https://en.wikipedia.org/wiki/Monorepo).

## `apps/web`

This is the main [Next.js](https://nextjs.org) application. It is the primary glue between our component library and Next.js. It is also the entrypoint for serving the application.

## `packages/components`

The React components used to build our application. Acter uses [Component Driven Develompment](https://www.componentdriven.org/) to build the application from the "bottom up" using smaller components incorporated into larger components. While not complete, some effort has been made to migrate the application to use [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principals. Smaller components use [Material-UI](https://material-ui.com/) to build larger functional pieces. 

Components should use [Storybook](https://storybook.js.org/) to visualize & test their look and behavior.

## `packages/lib`

Pure Javascript/Typescript functions meant to encapsulate our business logic into small, testable functions.

## `packages/schema`

Currently a combination of our [Prisma](https://www.prisma.io/) schema, the output from [TypeGraphQLPrisma](https://prisma.typegraphql.com), and our GraphQL queries, mutations, and fragments.

## `services/api`

The Apollo GraphQL server used to serve both generated and custom resolvers. The API layer starts with [GraphQL](https://graphql.org/) and the [Apollo GraphQL](https://www.apollographql.com/) client/server library. On the backend, the GraphQL resolvers use [Prisma](https://www.prisma.io/) as an ORM for interactions with the database as well as database migrations. We use the [TypeGraphQL Prisma](https://typegraphql.com/docs/prisma.html) integration to autogenerate types, which can be imorted via `@acter/schema` after running `yarn generate`.

## `services/jobs`

Various asynchronous jobs like email notifications and daily digest creation

## `tools`

Custom configuration, currently just for eslint.

# Vendors

## Github

We use [Github](https://github.com) for a code repository, and to run basic [CI tests](https://en.wikipedia.org/wiki/Continuous_integration) by way of [Github Actions](https://docs.github.com/en/actions).

## Heroku

Our applications and databases are hosted on [Heroku](https://dashboard.heroku.com/pipelines/f814f074-77e1-4719-87d9-318e61daec15). We currently have both a demo/dev instance as well as production.

## Auth0

We use [Auth0](https://auth0.com/) for managing our authentication layer. It provides "authentication as a service" and a library for integrating with Next.js. Note that we use two different "tenants": one for production and one for demo & local.

## Amazon AWS

We use Amazon AWS for the storage of images, both our static images and user-uploaded avatars and banners. Items live in [S3](https://s3.console.aws.amazon.com/s3/buckets) and are managed by [IAM](https://aws.amazon.com/iamv2) keys.

## Google 

We use the Google Maps & Places APIs for our mapping and places, respectively. Management of keys is done via the APIs and Services Credentials page for [development](https://console.cloud.google.com/apis/credentials?authuser=1&project=acter-dev) and [production](https://console.cloud.google.com/apis/credentials?authuser=1&project=acter-315721)).

## Imgix

We use [Imgix](https://dashboard.imgix.com) for image resizing. This was done because of bugs in Next.js' own image resize library and issues with performance on Heroku, though this should probably be revisited.

## Sendgrid

We use [Sendgrid](https://sendgrid.com) for sending emails.

## Sentry

We currently have [Sentry](https://sentry.io/organizations/acter/issues/) monitoring our application for bugs and performance.
