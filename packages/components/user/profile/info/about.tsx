import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { InterestsSection } from '@acter/components/interests/interests-section'
import { SearchInterestsFilter } from '@acter/components/search/organisms/interests-filter'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { interestNameMap } from '@acter/lib/interests/map-interest-name'
import { useInterestTypes } from '@acter/lib/interests/use-interest-types'
import { useUser } from '@acter/lib/user/use-user'
import { Acter } from '@acter/schema'

interface AboutProps {
  acter?: Acter
}

export const About: FC<AboutProps> = ({ acter }) => {
  const { user } = useUser()
  const classes = useStyles()
  const { route } = useRouter()

  const currentActer = acter ? acter : user?.Acter

  const [_, updateActer] = useUpdateActer(currentActer)

  const { interestTypes } = useInterestTypes()
  if (!interestTypes) return null

  const interests = interestNameMap(interestTypes)

  if (!acter && !user) {
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
      {(currentActer?.description ||
        currentActer?.ActerInterests?.length !== 0) && (
        <Box className={classes.section}>
          {currentActer.description && (
            <>
              <Typography className={classes.heading}>About</Typography>
              <Typography className={classes.description}>
                {currentActer.description}
              </Typography>
            </>
          )}
          {currentActer?.ActerInterests?.length !== 0 && (
            <>
              <Box className={classes.interestsHeading}>
                <Typography className={classes.heading}>Interests</Typography>
                {route === '/profile/edit' && (
                  <SearchInterestsFilter
                    applyFilters={handleFilterInterests}
                    isAnchorElementIcon={true}
                    userInterestIds={currentActer?.ActerInterests.map(
                      ({ Interest }) => Interest.id
                    )}
                  />
                )}
              </Box>
              <Box>
                <InterestsSection
                  selected={currentActer.ActerInterests?.map(
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
      backgroundColor: theme.colors.white,
      minHeight: 300,
      borderRadius: 5,
      padding: '10px 20px',
    },
    interestsHeading: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 90,
    },
    heading: {
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
