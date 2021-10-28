/**
 * Generates default invitation message
 * @param acterName
 * @param userName
 * @returns
 */
export const getInvitationMessage = (
  acterName: string,
  userName: string
): string => `Hi! 
I'm inviting you to join ${acterName} on Acter. ${acterName} is using Acter as our dedicated space for communication & collaboration.

Best regards,
${userName}`
