import React, { FC } from 'react'
import { Box, MenuItem, InputLabel, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import { ActerAvatar } from 'components/acter/avatar'
import { Acter, User } from '@generated/type-graphql'
import { NETWORK, ORGANISATION } from 'src/constants'

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
    // marginLeft: 10,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}))

export interface SelectOrganiserProps {
  /**
   * A list of potential Organiser Acters
   */
  acters: Acter[]
  user: User
}

export const SelectOrganiser: FC<SelectOrganiserProps> = ({ acters, user }) => {
  const classes = useStyles()
  // TODO:  Refactor this to use rule set
  const organisers = acters.filter(({ ActerType: { name } }) =>
    [ORGANISATION, NETWORK].includes(name)
  )

  return (
    <>
      <InputLabel className={classes.label}>Organiser</InputLabel>
      <Typography className={classes.name} variant="body1">
        {user.name}
      </Typography>
      {/* <Field
        className={classes.chooseOrganiser}
        component={Select}
        name="organiserActerId"
        label="organiser"
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
      </Field> */}
    </>
  )
}
