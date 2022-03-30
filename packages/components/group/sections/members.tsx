import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { SectionContainer } from '@acter/components/group/sections/container'
import { useActer } from '@acter/lib/acter/use-acter'
import { SectionTabs as GroupSectionTabs } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export const MembersSection: FC = () => {
  const { t } = useTranslation('group-landing', { keyPrefix: 'members' })
  const classes = useStyles()
  const { acter } = useActer()

  return (
    <SectionContainer
      title={t('title')}
      buttonText={t('buttonText')}
      sectionContent={GroupSectionTabs.MEMBERS}
    >
      <div className={classes.list}>
        <FollowersAvatars acter={acter} />
      </div>
    </SectionContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      paddingTop: theme.spacing(1),
      height: theme.spacing(15),
    },
  })
)
