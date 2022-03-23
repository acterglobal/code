import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { SectionContainer } from '@acter/components/group/sections/container'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { Link } from '@acter/components/util/anchor-link'
import { useActer } from '@acter/lib/acter/use-acter'
import { SectionTabs as GroupSectionTabs } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { getUrl } from '@acter/lib/links/get-url'
import { useLinks } from '@acter/lib/links/use-links'
import { capitalize } from '@acter/lib/string/capitalize'

export const LinksSection: FC = () => {
  const { t } = useTranslation('group-landing', { keyPrefix: 'links' })
  const classes = useStyles()
  const { acter } = useActer()

  const { links, fetching: linksLoading } = useLinks({
    acterId: acter?.id,
  })

  if (!acter) return null

  return (
    <SectionContainer
      title={capitalize(t('title'))}
      buttonText={t('buttonText')}
      sectionContent={GroupSectionTabs.LINKS}
    >
      {linksLoading ? (
        <LoadingSpinner />
      ) : (
        <Box>
          {links?.length === 0 ? (
            <ZeroMessage
              primaryText={t('zeroMessage.primaryText')}
              secondaryText={t('zeroMessage.secondaryText')}
              buttonText={t('zeroMessage.buttonText')}
              contentTab={GroupSectionTabs.LINKS}
            />
          ) : (
            links.map((link) => (
              <Link href={getUrl(link.url)} target="_blank">
                <Typography className={classes.linkName}>
                  {link.name}
                </Typography>
              </Link>
            ))
          )}
        </Box>
      )}
    </SectionContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkName: {
      borderRadius: 4,
      margin: 4,
      backgroundColor: theme.palette.background.default,
      padding: 6,
      paddingLeft: 12,
      fontSize: 12,
      color: theme.palette.secondary.main,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
)
