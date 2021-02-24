import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
}))

export interface peopleProps {
  numOfPeople: number
  imageURL: string[]
}

const People: FC<peopleProps> = ({ numOfPeople }) => {
  const classes = useStyles()
  return (
    <Box>
      <Typography variant="h5" className={classes.section}>
        People {numOfPeople}
      </Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
        />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar
          alt="Agnes Walker"
          src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
        />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </Box>
  )
}

export default People
