module.exports = {
  apps: [
    {
      name: 'web',
      script: 'next start -P $PORT',
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
