import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
  organizations: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  organization: {
    border: '2px solid ',
  },
}))

export interface organisationsProps {
  imageURL: string[]
}

const Organizations: FC<organisationsProps> = () => {
  const classes = useStyles()
  return (
    <Box>
      <Typography variant="h5" className={classes.section}>
        Orgoanizations
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
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </Box>
    </Box>
  )
}

export default Organizations
