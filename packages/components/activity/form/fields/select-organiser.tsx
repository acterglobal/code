import React, { FC } from 'react'

import { Box, MenuItem, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import { Field } from 'formik'
import { Select } from 'formik-material-ui'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { MainActerTypes, ActerTypes } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { GROUP } = ActerTypes

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
    [...MainActerTypes, GROUP].includes(name as ActerTypes)
  )

  return (
    <Field
      className={classes.chooseOrganiser}
      fullWidth
      component={Select}
      name="organiserActerId"
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
    color: theme.palette.secondary.main,
    fontSize: '0.9rem',
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: 10,
  },
}))
