import React, { Fragment } from 'react'

import {
  render,
  MjmlColumn,
  MjmlDivider,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from 'mjml-react'

import { DATE_FORMAT_TZ, DATE_FORMAT_SHORT_TZ } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { CreateEmailReturn } from '@acter/lib/email'
import { getImageUrl } from '@acter/lib/images/get-image-url'

import { ActivityEmailBlock } from '../../activity-notifications/template/activity-email-block'
import { PostEmailBlock } from '../../post-notifications/template/post-email-block'
import { EmailLayout } from '../../templates/layout'
import { NotificationByActer } from '../types'

type CreateDailyDigestEmailParams = {
  notificationsByActer: NotificationByActer
}

export const createDailyDigestEmail = ({
  notificationsByActer,
}: CreateDailyDigestEmailParams): CreateEmailReturn => {
  const { html } = render(
    <EmailLayout>
      <MjmlSection backgroundColor="#fff">
        <MjmlColumn>
          <MjmlText fontFamily="Montserrat, Arial, non-serif">
            Here is your daily digest
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      {notificationsByActer.acters.map(({ acter, posts, activities }) => (
        <Fragment key={acter.id}>
          <MjmlWrapper backgroundColor="#fff">
            <MjmlSection backgroundColor="#fff">
              <MjmlColumn>
                <MjmlText fontFamily="Montserrat, Arial, non-serif">
                  <table>
                    <tr>
                      <td width="64px">
                        <img
                          src={getImageUrl(acter.avatarUrl, 'avatar', {
                            suffix: '?w=64&h=64&crop=entropy',
                          })}
                          className="avatar"
                          width={64}
                          height={64}
                        />
                      </td>
                      <td>
                        <h2>{acter.name}</h2>
                      </td>
                    </tr>
                  </table>
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
            {posts.length && (
              <MjmlSection backgroundColor="#fff">
                <MjmlColumn>
                  <MjmlText>
                    <h3>Posts</h3>
                    {posts.map((post) => (
                      <PostEmailBlock
                        key={post.id}
                        post={post}
                        notificationUrl={post.notificationUrl}
                      />
                    ))}
                  </MjmlText>
                </MjmlColumn>
              </MjmlSection>
            )}
            {activities.length && (
              <MjmlSection backgroundColor="#fff">
                <MjmlColumn>
                  <MjmlText>
                    <h3>Activities</h3>
                    {activities.map((activity) => (
                      <Fragment key={activity.id}>
                        <h4>
                          <a href={activity.notificationUrl}>
                            {activity.Acter.name}
                          </a>
                        </h4>
                        <ActivityEmailBlock
                          activity={activity}
                          acter={activity.Acter}
                        />
                      </Fragment>
                    ))}
                  </MjmlText>
                </MjmlColumn>
              </MjmlSection>
            )}
          </MjmlWrapper>
          <MjmlSection backgroundColor="#fff">
            <MjmlColumn>
              <MjmlDivider />
            </MjmlColumn>
          </MjmlSection>
        </Fragment>
      ))}
    </EmailLayout>
  )

  const text = notificationsByActer.acters
    .map(({ acter, activities, posts }) => {
      const header = `Here is the news for ${acter.ActerType.name} ${acter.name}`

      const activitiesHeader = activities.length ? 'Activities' : ''
      const activitiesContent = activities
        .map(
          (activity) =>
            `A new activity titled "${activity.Acter.name} at ${parseAndFormat({
              dateString: activity.startAt,
              formatString: DATE_FORMAT_TZ,
            })}.`
        )
        .join('\n')

      const postsHeader = posts.length ? 'Activities' : ''
      const postsContent = posts
        .map(
          (post) =>
            `${post.Author.name} created a new post at ${parseAndFormat({
              dateString: post.createdAt,
              formatString: DATE_FORMAT_SHORT_TZ,
            })}:\n ${post.content}`
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
