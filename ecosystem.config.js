module.exports = {
  apps: [
    {
      name: 'web',
      script: 'yarn dev-web',
    },
    {
      name: 'jobs',
      script: 'yarn workspace @acter/jobs dev',
      watch: ['./packages/jobs/src'],
      ignore_watch: ['node_modules'],
    },
    // {
    //   name: 'email-worker',
    //   script: 'yarn workspace @acter/jobs email-worker',
    //   watch: ['./packages/jobs/src/workers'],
    // },
    // {
    //   name: 'notification-worker',
    //   script: 'yarn workspace @acter/jobs notification-worker',
    //   watch: ['./packages/jobs/src/workers'],
    // },
  ],
}
