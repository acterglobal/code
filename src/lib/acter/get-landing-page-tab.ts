import { NextRouter } from 'next/router'
import { ACTIVITIES, MEMBERS, FEED } from 'src/constants'

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
