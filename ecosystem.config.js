module.exports = {
  apps: [
    {
      name: 'web',
      script: 'yarn dev-web',
    },
    {
      name: 'notification-worker',
      script: 'yarn dev-jobs',
      watch: ['./packages/jobs/src'],
    },
  ],
}
