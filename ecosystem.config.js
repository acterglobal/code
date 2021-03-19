module.exports = {
  apps: [
    {
      name: 'web',
      instances: 'max',
      script: 'node_modules/.bin/next',
      args: 'start',
      exec_mode: 'cluster',
      cwd: './',
      env_development: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
