import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    fontSize: '0.7rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
  people: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
}))

export interface peopleProps {
  numOfPeople: number
  imageURL: string[]
}

export const People: FC<peopleProps> = ({ numOfPeople }) => {
  const classes = useStyles()
  return (
    <Box>
      <Typography variant="h6" className={classes.section}>
        People ({numOfPeople})
      </Typography>
      <Box style={{ display: 'flex' }}>
        {/* <AvatarGroup max={4} style={{ width: '32px', height: '32px' }}> */}
        <Avatar
          className={classes.people}
          alt="Remy Sharp"
          src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
        />
        <Avatar
          className={classes.people}
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        />
        <Avatar
          className={classes.people}
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
        <Avatar
          className={classes.people}
          alt="Agnes Walker"
          src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
        />
        <Avatar
          className={classes.people}
          alt="Trevor Henderson"
          src="/static/images/avatar/5.jpg"
        />
        {/* </AvatarGroup> */}
      </Box>
    </Box>
  )
}

// export default People
