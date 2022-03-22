/**
 * Generates default invitation message
 * @param acterName
 * @param userName
 * @returns
 */
export const getInvitationMessage = (
  hi: string,
  content: string,
  greetings: string,
  userName: string
): string => `${hi} 
${content}

${greetings} ,
${userName}`
