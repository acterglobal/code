import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography, Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    fontSize: '0.7rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
  organizations: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.3),
    },
  },
  organization: {
    border: '1px solid ',
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
}))

export interface organisationsProps {
  imageURL: string[]
}

export const Organizations: FC<organisationsProps> = () => {
  const classes = useStyles()
  return (
    <Box>
      <Typography variant="h5" className={classes.section}>
        Organizations
      </Typography>
      <Box className={classes.organizations}>
        <Avatar
          className={classes.organization}
          alt="Remy Sharp"
          src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
        />
        <Avatar
          className={classes.organization}
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        />
        <Avatar
          className={classes.organization}
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
        <Avatar
          className={classes.organization}
          alt="Agnes Walker"
          src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
        />
        <Avatar
          className={classes.organization}
          alt="Trevor Henderson"
          src="/static/images/avatar/5.jpg"
        />
      </Box>
    </Box>
  )
}
