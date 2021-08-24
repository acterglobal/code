module.exports = {
  apps: [
    {
      name: 'web',
      script: 'yarn workspace @acter/web dev',
    },
    {
      name: 'jobs',
      script: 'yarn workspace @acter/jobs dev',
      watch: ['./packages/jobs/src/**/*.*'],
      ingnore: ['node_modules'],
    },
  ],
}
