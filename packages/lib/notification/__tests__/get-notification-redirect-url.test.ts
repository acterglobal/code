import { ActerTypes } from '@acter/lib/constants'
import {
  Acter,
  ActerJoinSettings,
  Notification,
  NotificationType,
} from '@acter/schema'
import { ExampleActer } from '@acter/schema/fixtures'

import { getNotificationRedirectUrl } from '../get-notification-redirect-url'

const { NEW_ACTIVITY, NEW_MEMBER } = NotificationType
const { RESTRICTED, EVERYONE } = ActerJoinSettings
const { GROUP, ORGANISATION } = ActerTypes

describe('getNotificationRedirectUrl', () => {
  const notification = {
    id: 'e6253711-e362-46a1-af96-36f3d394a4fa',
    url: 'http://localhost:3000/organisations/blue-organisation/members',
  } as Notification

  const onActer = { ...ExampleActer } as Acter

  it('should return notification url as redirect url when onActer join settings is not RESTRICTED or notification type is not NEW_MEMBER', () => {
    const notification1 = {
      ...notification,
      type: NEW_MEMBER,
    } as Notification
    const onActer1 = {
      ...onActer,
      acterJoinSetting: EVERYONE,
    } as Acter

    const url1 = getNotificationRedirectUrl(notification1, onActer1)
    expect(url1).toEqual(notification1.url)

    const notification2 = {
      ...notification,
      type: NEW_ACTIVITY,
    } as Notification
    const onActer2 = {
      ...onActer,
      acterJoinSetting: RESTRICTED,
    } as Acter

    const url2 = getNotificationRedirectUrl(notification2, onActer2)
    expect(url2).toEqual(notification2.url)
  })

  it('should return url which redirects to invite->requests under settings page when onActer join settings is RESTRICTED and notification type is NEW_MEMBER', () => {
    const notification1 = {
      ...notification,
      type: NEW_MEMBER,
    } as Notification

    const onActer1 = {
      ...onActer,
      ActerType: { name: ORGANISATION },
      slug: 'blue-organisation',
      acterJoinSetting: RESTRICTED,
    } as Acter

    const redirectToRequestsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${onActer1.ActerType.name}s/${onActer1.slug}/settings?inviteTab=requests`

    const url1 = getNotificationRedirectUrl(notification1, onActer1)
    expect(url1).toEqual(redirectToRequestsUrl)
  })

  it('should return url which redirects to invite->requests on group landing page when onActer acterType is GROUP, join settings is RESTRICTED and notification type is NEW_MEMBER', () => {
    const notification1 = {
      ...notification,
      type: NEW_MEMBER,
    } as Notification

    const onActer1 = {
      ...onActer,
      ActerType: { name: GROUP },
      slug: 'blue-organisation-group1',
      acterJoinSetting: RESTRICTED,
    } as Acter

    const redirectToRequestsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${onActer1.ActerType.name}s/${onActer1.slug}/?inviteTab=requests`

    const url1 = getNotificationRedirectUrl(notification1, onActer1)
    expect(url1).toEqual(redirectToRequestsUrl)
  })
})
