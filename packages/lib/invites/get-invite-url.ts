/**
 * Generates invite url
 * @param inviteId
 * @returns invite url
 */
export const getInviteUrl = (inviteId: string): string =>
  [process.env.BASE_URL, 'api', 'accept-invite', inviteId].join('/')
