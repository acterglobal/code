import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { Field, useFormikContext } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { ActerTypes } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

export interface SelectFollowersProps {
  acters: Acter[]
}

export interface SelectFollowersValues {
  organiserActerId: string
  followerIds: string[]
}

export const SelectFollowers: FC<SelectFollowersProps> = ({ acters }) => {
  const classes = useStyles()
  const {
    setFieldValue,
    values: { followerIds = [], organiserActerId = '' },
  } = useFormikContext<SelectFollowersValues>()

  // Ensure that the organiser is also a follower
  if (!followerIds.includes(organiserActerId)) {
    setFieldValue('followerIds', [organiserActerId])
  }

  const potentialActers = acters.filter(
    (acter) => acter.ActerType.name !== ActerTypes.USER
  )

  return (
    <>
      {potentialActers.map((acter) => {
        const isOrganiser = acter.id === organiserActerId
        const isInPostToList = followerIds.includes(acter.id)
        return (
          <Box className={classes.container} key={`follower-acter-${acter.id}`}>
            <Field
              fullWidth
              component={CheckboxWithLabel}
              type="checkbox"
              name="followerIds"
              value={acter.id}
              checked={isInPostToList || isOrganiser}
              disabled={isOrganiser}
            />
            <ActerAvatar acter={acter} />

            {acter.name}
          </Box>
        )
      })}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: theme.spacing(1),
      borderColor: theme.palette.secondary.light,
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      '& > .MuiFormControlLabel-root': {
        marginRight: 0,
      },
      '& > .MuiAvatar-root': {
        marginRight: theme.spacing(1),
      },
    },
  })
)
