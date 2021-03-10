import { NextRouter } from 'next/router'
import { ACTIVITIES, MEMBERS, FORUM } from 'src/constants'

export const getLandingPageTab = (
  router: NextRouter,
  defaultTab = ''
): string => {
  const tab = router.query?.tab?.length ? router.query.tab[0] : ACTIVITIES
  switch (tab) {
    case ACTIVITIES:
    case MEMBERS:
    case FORUM:
      return tab
    default:
      return defaultTab
  }
}
