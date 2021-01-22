# Acter

## Getting started
The application and it's dependencies are dockerized. Make sure that [Docker](http://docker.com) is set up, then run:
```
Create a .env file with : DB_NAME, DB_USER,DB_PASS

docker-compose up -d --build
```

Or better yet use the VS Code built-in Docker command: `command+shift+p` and select "Docker Compose: Up"

The application will be available at: [http://localhost:3000](http://localhost:3000)

## Technology Stack
Acter is built with the following stack.
|Role|Technology|
|-|-|
|Language|[Typescript]()|
|Frontend|[Next.js](https://nextjs.org)|
|Components|[Material-UI](https://material-ui.com/), [Storybook](https://storybook.js.org/)|
|Authenticaton|[NextAtuh.js](https://next-auth.js.org/), [Fake SMTP Server](https://github.com/ReachFive/fake-smtp-server), [JWT](https://jwt.io/) (planned)|
|API/Data|[GraphQL](https://graphql.org/), [Apollo](https://www.apollographql.com/), [TypeGraphQL](https://typegraphql.com/), [Prisma](https://www.prisma.io/)|
|Database|[PostgreSQL](https://www.postgresql.org/)|

### Components

Acter uses [Component Driven Develompment](https://www.componentdriven.org/) to build the application from the "bottom up" using smaller components incorporated into larger components. Smaller components use [Material-UI](https://material-ui.com/) to build larger functional pieces. Components are unit tested and use [Storybook](https://storybook.js.org/) to visualize their look and behavior.

### Authentication

We use [NextAtuh.js](https://next-auth.js.org/) for managing our authentication layer. It provides a react hook as well as server-side call to easily fetch session information, and managed authentication methods via Providers. We currently only use a password-less email provider, but will expand to use [JWT](https://jwt.io/) at a later date, likely using Azure-provided means of SSO. We may investigate the use of other auth providers such as Facebook, LinkedIn, Discord, Apple, and others. Tracked in #5.

We have a fake SMTP server that is deployed with Docker which allows us to receive emails in development. When our app is running in Docker, it is available at [http://localhost:1080](http://localhost:1080).

### API/Data

The API layer starts with [GraphQL](https://graphql.org/) and the [Apollo GraphQL](https://www.apollographql.com/) client/server library. On the backend, the GraphQL resolvers use [Prisma](https://www.prisma.io/) as an ORM for interactions with the database as well as database migrations. We use the [TypeGraphQL Prisma](https://typegraphql.com/docs/prisma.html) integration to autogenerate types, which can be imorted via `@generated/<type>` after running `yarn run generate`.

## Layout

### `.storybook`
Contains configuration files for [Storybook](https://graphql.org/), including webpack.

### `graphql`

Contains `graphql` [queries](https://graphql.org/learn/queries/) and [TypeGraphQL resolvers](https://typegraphql.com/docs/resolvers.html).

### `prisma`

Contains [Prisma](https://www.prisma.io/) migrations and schema.

### `public`

[Next.js public files](https://nextjs.org/docs/basic-features/static-file-serving)

### `src`

Main application code folder

### `src/__fixtures__`

Used for shared test fixtures

### `src/__mocks__`

Module mocks. Currently only used for Storybook.

### `src/components`

All components, tests, and stories. The components folder will be organized by major functional area, with common elements in a `shared` folder and organized by functionality.

### `src/lib`

When additional business logic or extensions to external libraries are needed, they should be placed in the `lib` folder.

### `src/pages`

Next.js api and pages live in this folder. Pages will contain any data loading but leave all dislay logic to the display components.

### `src/stories`

Assets for Storybook

### `src/themes`

Material-UI theme files