import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pluralize from 'pluralize'
import { Box, Divider, Grid, Typography } from '@material-ui/core'

import { acterAsUrl } from 'src/lib/acter/acter-as-url'

import { Acter } from '@schema'
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import { ACTIVITY } from 'src/constants'
import { grey } from '@material-ui/core/colors'
import { getImageUrl } from 'src/lib/images/get-image-url'

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

  return (
    <Grid container>
      {Object.entries(actersByType).map(([type, subset]) => (
        <StyledTypeContainer
          item
          xs={12}
          sm={6}
          md={4}
          key={`acter-types-${type}`}
          role="list"
        >
          <Typography className={classes.heading} variant="h2">
            {`My ${pluralize(type)}`}
          </Typography>

          <StyledDevider />

          {subset.map((acter) => {
            const image =
              acter.ActerType.name === ACTIVITY
                ? getImageUrl(acter.bannerUrl, 'banner')
                : getImageUrl(acter.avatarUrl, 'avatar')
            return (
              <Link
                href={acterAsUrl(acter)}
                key={`acter-${type}-link-${acter.id}`}
              >
                <a className={classes.link}>
                  <StyledBox key={acter.id} role="listitem">
                    <Image src={image} width={80} height={70} />
                    <Box className={classes.info}>
                      <Typography className={classes.title} variant="h3">
                        {acter.name}
                      </Typography>
                      <Typography className={classes.subttitle} variant="body1">
                        {acter.ActerType.name}
                      </Typography>
                    </Box>
                  </StyledBox>
                </a>
              </Link>
            )
          })}
        </StyledTypeContainer>
      ))}
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontSize: '1rem',
    fontWeight: theme.typography.fontWeightBold,
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
  },
  title: {
    fontSize: '1rem',
    fontWeight: theme.typography.fontWeightBold,
  },
  subttitle: {
    fontSize: '0.8rem',
  },
}))

const StyledTypeContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  })
)(Grid)

const StyledBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 5,
      borderRadius: 5,
      border: '1px solid',
      borderColor: grey[400],
      backgroundColor: grey[200],
      display: 'flex',
      marginBottom: theme.spacing(1.2),
      cursor: 'pointer',
    },
  })
)(Box)

const StyledDevider = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 1,
      backgroundColor: grey[800],
      marginBottom: theme.spacing(2.5),
    },
  })
)(Divider)
