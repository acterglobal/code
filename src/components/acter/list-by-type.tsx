import React, { FC } from 'react'
import Image from 'next/image'
import { Box, Divider, Grid, Hidden, Typography } from '@material-ui/core'

import { Acter } from '@generated/type-graphql'
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { getImageUrl } from 'src/lib/images/get-image-url'

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontSize: '1rem',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  subttitle: {
    fontSize: '0.8rem',
  },
}))

const StyledBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 5,
      borderRadius: 5,
      border: '1px solid',
      borderColor: grey[400],
      backgroundColor: grey[200],
      display: 'flex',
      marginBottom: 10,
    },
  })
)(Box)

const StyledDevider = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 1,
      backgroundColor: grey[800],
      marginBottom: 20,
    },
  })
)(Divider)

export interface ActerListByTypeProps {
  acters: Acter[]
}

type ActersByType = {
  [key: string]: Acter[]
}

export const ActerListByType: FC<ActerListByTypeProps> = ({ acters }) => {
  const classes = useStyles()

  const actersByType = acters.reduce((prev, acter) => {
    prev[acter.ActerType.name] = [...(prev[acter.ActerType.name] || []), acter]
    return prev
  }, {} as ActersByType)

  console.log(actersByType)

  const tasks = []
  const activities = []

  return (
    <Grid container spacing={1}>
      {Object.entries(actersByType).map(([type, subset]) => (
        // <Hidden key={type} xsDown={type === 'Network' || type === 'Group'}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography className={classes.heading} variant="h6">
            {`My ${type}s`}
          </Typography>

          <StyledDevider />

          {subset.map((acter) => (
            <StyledBox key={acter.id}>
              <Image
                src={getImageUrl(acter.avatarUrl, 'avatar')}
                width={80}
                height={70}
                layout="fixed"
              />
              <Box className={classes.info}>
                <Typography className={classes.title} variant="h5">
                  {acter.name}
                </Typography>
                <Typography className={classes.subttitle} variant="body1">
                  {acter.ActerType.name}
                </Typography>
              </Box>
            </StyledBox>
          ))}
        </Grid>
        // </Hidden>
      ))}
    </Grid>
  )
}
