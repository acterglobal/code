import React, { FC } from 'react'
import { Box, MenuItem, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import { ActerAvatar } from '@acter/components/acter/avatar'
import { Acter } from '@acter/schema/types'
import { ActerTypes } from '@acter/lib/constants'

const { ORGANISATION, NETWORK } = ActerTypes

export interface SelectOrganiserProps {
  /**
   * A list of potential Organiser Acters
   */
  acters: Acter[]
}

export interface SelectOrganiserValues {
  organiserActerId: string
}

export const SelectOrganiser: FC<SelectOrganiserProps> = ({ acters }) => {
  const classes = useStyles()
  // TODO:  Refactor this to use rule set
  const organisers = acters.filter(({ ActerType: { name } }) =>
    [ORGANISATION, NETWORK].includes(name as ActerTypes)
  )

  return (
    <Field
      className={classes.chooseOrganiser}
      fullWidth
      component={Select}
      name="organiserActerId"
      label="Show activity in:"
      // displayEmpty
      required={true}
    >
      {organisers.map((acter) => (
        <MenuItem value={acter.id} key={`organiser-${acter.id}`}>
          <Box className={classes.organiserContainer}>
            <ActerAvatar acter={acter} size={4} />
            <Typography className={classes.name} variant="body1">
              {acter.name}
            </Typography>
          </Box>
        </MenuItem>
      ))}
    </Field>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  chooseOrganiser: {
    marginBottom: 25,
  },
  organiserContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  organiser: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  name: {
    color: grey[800],
    fontSize: '0.9rem',
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: 10,
  },
}))
