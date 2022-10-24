import React, { FC } from 'react'

import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import clsx from 'clsx'

import { InterestsSection } from '@acter/components/interests/interests-section'
import { SanitizedContent } from '@acter/components/molecules/sanitized-content'
import { SearchInterestsFilter } from '@acter/components/search/organisms/interests-filter'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { interestNameMap } from '@acter/lib/interests/map-interest-name'
import { useInterestTypes } from '@acter/lib/interests/use-interest-types'
import { useUser } from '@acter/lib/user/use-user'
import { capitalize } from '@acter/lib/string/capitalize'
import { useTranslation } from '@acter/lib/i18n/use-translation'

interface AboutProps {
  acterId?: string
}

export const About: FC<AboutProps> = ({ acterId }) => {
  const { user } = useUser(acterId && { acterId })
  const classes = useStyles()
  const {t} = useTranslation()
  const [_, updateActer] = useUpdateActer(user?.Acter)

  const { interestTypes } = useInterestTypes()
  if (!interestTypes) return null

  const interests = interestNameMap(interestTypes)

  if (!user) {
    return null
  }

  const handleFilterInterests = (data) => {
    const interestIds: string[] = data.map((interestName) =>
      Object.keys(interests).find((id) => interests[id] === interestName)
    )

    updateActer({ interestIds } as ActerVariables)
  }

  return (
    <>
      <Box className={clsx(classes.section, acterId && classes.sidebarSection)}>
        <Typography className={classes.heading}>{capitalize(t('about'))}</Typography>

        <SanitizedContent isMarkdown={false}>
          {user.Acter?.description}
        </SanitizedContent>

        <Box className={classes.interestsHeading}>
          <Typography className={classes.heading}>{capitalize(t('interests'))}</Typography>

          {!acterId && (
            <SearchInterestsFilter
              applyFilters={handleFilterInterests}
              isAnchorElementIcon={true}
              userInterestIds={user?.Acter?.ActerInterests.map(
                ({ Interest }) => Interest.id
              )}
            />
          )}
        </Box>
        <Box>
          <InterestsSection
            selected={user?.Acter?.ActerInterests?.map(
              ({ Interest }) => Interest
            )}
          />
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      backgroundColor: theme.colors.toolbar.main,
      minHeight: 300,
      borderRadius: 5,
      padding: '10px 20px',
    },
    sidebarSection: {
      width: 526,
      marginTop: 10,
      marginLeft: 40,
      minHeight: 100,
    },
    interestsHeading: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 90,
    },
    heading: {
      marginTop: 10,
      color: theme.colors.blue.mediumGrey,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.9rem',
    },
    description: {
      display: 'block',
      backgroundColor: theme.colors.toolbar.main,
      fontSize: '0.85rem',
      paddingRight: 5,
      paddingLeft: 5,
      lineHeight: 1,
      hyphens: 'auto',
      overflow: 'hidden',
      '& p': {
        margin: 0,
        lineHeight: '1.25rem',
      },
      '& li': {
        lineHeight: '1.2rem',
      },
    },
    editIcon: {
      color: theme.colors.blue.mediumGrey,
      fontSize: 20,
      cursor: 'pointer',
    },
  })
)
