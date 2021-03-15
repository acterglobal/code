import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, MenuItem, InputLabel, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Field } from 'formik'
import { Select, TextField } from 'formik-material-ui'
import { ActerAvatar } from 'components/acter/avatar'
import { Acter } from '@generated/type-graphql'
import { NETWORK, ORGANISATION } from 'src/constants'
import { FormikSetFieldType } from 'src/components/activity/form'

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    color: grey[700],
    marginBottom: 5,
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
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    /* below are old styles for choose organiser picker */
    fontSize: '0.9rem',
    marginLeft: 10,
  },
}))

export interface SelectOrganiserProps {
  /**
   * A list of potential Organiser Acters
   */
  acters: Acter[]

  setFieldValue: FormikSetFieldType
}

export const SelectOrganiser: FC<SelectOrganiserProps> = ({
  acters,
  setFieldValue,
}) => {
  const classes = useStyles()
  const [organiser, setOrganiser] = useState(null)

  // TODO:  Refactor this to use rule set
  const organisers = acters.filter(({ ActerType: { name } }) =>
    [ORGANISATION, NETWORK].includes(name)
  )

  /**
   * below code is to access the acter(organiser) from url
   */
  // const router = useRouter()
  // const { organiserActerId } = router.query

  // useEffect(() => {
  //   if (organiserActerId) {
  //     setOrganiser(organisers.find((acter) => acter.id === organiserActerId))
  //   } else {
  //     setOrganiser(organisers[0])
  //   }
  //   // @ts-ignore
  //   setFieldValue('organiserActerId', organiser?.id)
  // }, [organiser])

  return (
    <>
      <InputLabel className={classes.label}>Show activity in:</InputLabel>
      {/**
       *  Below code is for to show organisers
       */}

      {/* <Typography className={classes.name} variant="h6">
        {organiser?.name}
      </Typography> */}

      <Field
        className={classes.chooseOrganiser}
        component={Select}
        name="organiserActerId"
        label="Create activity in:"
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
    </>
  )
}
