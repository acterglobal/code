import { isEqual } from 'date-fns'
import { format } from 'date-fns-tz/fp'
import Handlebars from 'handlebars'
//@ts-ignore
import { marked } from 'marked'
import path from 'path'

import { NotificationByActer } from '@acter/jobs/src/daily-digest/types'
import {
  DATE_FORMAT_TZ,
  DATE_FORMAT_SHORT_TZ,
  DATE_FORMAT_NO_TIME,
} from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter } from '@acter/schema'

type CreateDailyDigestEmailParams = {
  notificationsByActer: NotificationByActer
}

export const createDailyDigestEmail = ({
  notificationsByActer,
}: CreateDailyDigestEmailParams): CreateEmailReturn => {
  Handlebars.registerHelper('marked', function (markdownString) {
    return marked(markdownString)
  })
  Handlebars.registerHelper(
    'dateFormat',
    function (startAt: Date, endAt: Date, isAllDay: boolean): string {
      try {
        const formatString = isAllDay ? DATE_FORMAT_NO_TIME : DATE_FORMAT_TZ
        const [formattedStartAt, formattedEndAt] = [startAt, endAt].map(
          format(formatString)
        )
        if (isEqual(startAt, endAt)) {
          return `on ${formattedStartAt}`
        }
        return `from ${formattedStartAt} to ${formattedEndAt}`
      } catch (e) {
        console.error(e)
      }
    }
  )
  Handlebars.registerHelper('dateFormatShort', function (date) {
    try {
      return format(DATE_FORMAT_SHORT_TZ)(date)
    } catch (e) {
      console.error(e)
      return date
    }
  })
  Handlebars.registerHelper('capitalize', capitalize)
  Handlebars.registerHelper('avatarUrl', function (acter: Acter) {
    return getImageUrl(acter.avatarUrl, 'avatar', {
      suffix: '?w=64&h=64&crop=entropy',
    })
  })

  const html = createEmailTemplate(path.join(__dirname, 'template.hbs'))({
    acters: notificationsByActer.acters,
  })

  const text = notificationsByActer.acters
    .map(({ acter, activities, posts }) => {
      const header = `Here is the news for ${acter.ActerType.name} ${acter.name}`

      const activitiesHeader = activities.length ? 'Activities' : ''
      const activitiesContent = activities
        .map(
          (activity) =>
            `A new activity titled "${activity.Acter.name} at ${parseAndFormat(
              activity.startAt,
              DATE_FORMAT_TZ
            )}.`
        )
        .join('\n')

      const postsHeader = posts.length ? 'Activities' : ''
      const postsContent = posts
        .map(
          (post) =>
            `${post.Author.name} created a new post at ${parseAndFormat(
              post.createdAt,
              DATE_FORMAT_SHORT_TZ
            )}:\n ${post.content}`
        )
        .join('\n')
      return [
        header,
        activitiesHeader,
        activitiesContent,
        postsHeader,
        postsContent,
      ].join('\n')
    })
    .join('\n')

  return { html, text }
}
