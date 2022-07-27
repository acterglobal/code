import React, { FC } from 'react'

import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { InterestsSection } from '@acter/components/interests/interests-section'
import { useUser } from '@acter/lib/user/use-user'

export const About: FC = () => {
  const { user } = useUser()
  const classes = useStyles()

  if (!user) {
    return null
  }
  return (
    <>
      {(user?.Acter?.description || user?.ActerInterest?.length !== 0) && (
        <Box className={classes.section}>
          {user.Acter.description && (
            <>
              <Typography className={classes.heading}>About</Typography>
              <Typography className={classes.description}>
                {user.Acter.description}
              </Typography>
            </>
          )}
          {user?.ActerInterest?.length !== 0 && (
            <>
              <Typography className={classes.heading}>Interests</Typography>
              <Box>
                <InterestsSection
                  selected={user.Acter.ActerInterests?.map(
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
  })
)
