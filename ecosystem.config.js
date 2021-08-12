module.exports = {
  apps: [
    {
      name: 'web',
      script: 'yarn workspace @acter/web dev',
    },
    {
      name: 'jobs',
      script: 'yarn workspace @acter/jobs dev',
      watch: ['./packages/jobs/src'],
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
