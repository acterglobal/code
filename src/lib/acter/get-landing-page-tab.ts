import { NextRouter } from 'next/router'
import { ActerMenu } from 'src/constants'

const { ACTIVITIES, MEMBERS, FEED } = ActerMenu

export const getLandingPageTab = (
  router: NextRouter,
  defaultTab = ''
): string => {
  if (!router.query.tab) {
    return defaultTab
  }
  const tab = router.query.tab[0]
  switch (tab) {
    case ACTIVITIES:
    case MEMBERS:
    case FEED:
      return tab
    default:
      return defaultTab
  }
}
