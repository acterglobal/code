export COMMIT_SHA=`$(git rev-parse --short HEAD)`
export NEXT_PUBLIC_IMAGE_LOADER_URL=https://acter-dev.imgix.net
export NEXT_PUBLIC_GRAPHQL_URL=http://localhost:3000/api/graphql
export PORT=3000

dev: 
	yarn dev

build: 
	yarn build

prod: export NODE_ENV=production 
prod: build
	yarn start