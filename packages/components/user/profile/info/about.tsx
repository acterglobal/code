import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import clsx from 'clsx'

import { InterestsSection } from '@acter/components/interests/interests-section'
import { SearchInterestsFilter } from '@acter/components/search/organisms/interests-filter'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { interestNameMap } from '@acter/lib/interests/map-interest-name'
import { useInterestTypes } from '@acter/lib/interests/use-interest-types'
import { useUser } from '@acter/lib/user/use-user'

interface AboutProps {
  acterId?: string
}

export const About: FC<AboutProps> = ({ acterId }) => {
  const { user } = useUser(acterId && { acterId })
  const classes = useStyles()
  const { route } = useRouter()

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
      {(user?.Acter?.description ||
        user?.Acter?.ActerInterests?.length !== 0) && (
        <Box
          className={clsx(classes.section, acterId && classes.sidebarSection)}
        >
          {user.Acter?.description && (
            <>
              <Typography className={classes.heading}>About</Typography>
              <Typography className={classes.description}>
                {user.Acter?.description}
              </Typography>
            </>
          )}
          {user.Acter?.ActerInterests?.length !== 0 && (
            <>
              <Box className={classes.interestsHeading}>
                <Typography className={classes.heading}>Interests</Typography>
                {route === '/profile/edit' && (
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
            </>
          )}
        </Box>
      )}
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
      marginTop: 5,
      backgroundColor: theme.colors.toolbar.main,
      minHeight: 100,
      fontSize: '0.85rem',
      paddingRight: 5,
      paddingLeft: 5,
    },
    editIcon: {
      color: theme.colors.blue.mediumGrey,
      fontSize: 20,
      cursor: 'pointer',
    },
  })
)
