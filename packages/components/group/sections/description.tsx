import React, { FC } from 'react'

import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

import { SectionContainer } from '@acter/components/group/sections/container'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { SectionTabs as GroupSectionTabs } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { Acter } from '@acter/schema'

interface DescriptionSectionProps {
  acter: Acter
}

export const DescriptionSection: FC<DescriptionSectionProps> = ({ acter }) => {
  const classes = useStyles()
  const { t } = useTranslation('group-landing', { keyPrefix: 'description' })

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
