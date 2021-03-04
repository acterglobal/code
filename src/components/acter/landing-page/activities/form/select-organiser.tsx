import React, { FC } from 'react'
import { Box, MenuItem, InputLabel, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import { ActerAvatar } from 'components/acter/avatar'
import { Acter } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    color: grey[700],
    marginBottom: 5,
    fontSize: '0.9rem',
  },
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
    fontWeight: 'bold',
    marginLeft: 10,
  },
}))

export interface SelectOrganiserProps {
  defaultOrganiser: Acter
}

export const SelectOrganiser: FC<SelectOrganiserProps> = (props) => {
  const { defaultOrganiser } = props
  const classes = useStyles()

  return (
    <>
      <InputLabel className={classes.label}>Organiser</InputLabel>
      <Field
        className={classes.chooseOrganiser}
        component={Select}
        name="organiser"
        label="organiser"
        // displayEmpty
        required={true}
      >
        {/* TODO: loop the list of acters instead of defaultOrganiser */}
        <MenuItem value="1">
          <Box className={classes.organiserContainer}>
            <ActerAvatar acter={defaultOrganiser} size={4} />
            <Typography className={classes.name} variant="body1">
              {defaultOrganiser.name}
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem value="2">
          <Box className={classes.organiserContainer}>
            <ActerAvatar acter={defaultOrganiser} size={4} />
            <Typography className={classes.name} variant="body1">
              {defaultOrganiser.name}
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem value="3">
          <Box className={classes.organiserContainer}>
            <ActerAvatar acter={defaultOrganiser} size={4} />
            <Typography className={classes.name} variant="body1">
              {defaultOrganiser.name}
            </Typography>
          </Box>
        </MenuItem>
      </Field>
    </>
  )
}
