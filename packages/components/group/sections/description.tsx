import React, { FC } from 'react'

import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

import { SectionContainer } from '@acter/components/group/sections/container'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { useActer } from '@acter/lib/acter/use-acter'
import { SectionTabs as GroupSectionTabs } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export const DescriptionSection: FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('group-landing', { keyPrefix: 'description' })

  const { acter } = useActer()
  if (!acter) return null

  return (
    <SectionContainer
      title={t('title')}
      buttonText={t('buttonText')}
      sectionContent={GroupSectionTabs.ABOUT}
      hideAddIcon
    >
      {acter?.description.length === 0 ? (
        <ZeroMessage
          contentTab={GroupSectionTabs.ABOUT}
          primaryText={t('zeroMessage.primaryText')}
          secondaryText={t('zeroMessage.secondaryText')}
          buttonText={t('zeroMessage.buttonText')}
        />
      ) : (
        <div className={classes.descriptionSection}>
          <Typography className={classes.text}>{acter.description}</Typography>
        </div>
      )}
    </SectionContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    descriptionSection: {
      wordBreak: 'keep-all',
      overflow: 'hidden',
      display: '-webkit-box',
      boxOrient: 'vertical',
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: 12,
      color: theme.palette.secondary.main,
    },
  })
)
