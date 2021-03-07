module.exports = {
  apps: [
    {
      name: 'web',
      script: 'server.mjs',
      instances: 'max',
      watch: '.',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
