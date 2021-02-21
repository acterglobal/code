import React, { FC } from 'react'

import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core'

import { HeaderSection } from 'src/components/acter/landing-page/header-section'
import { MenuSection } from 'src/components/acter/landing-page/menu-section'
import { InfoSection } from 'src/components/acter/landing-page/info-section'

import { Acter } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2),
    },
    menu: {
      order: 1,
    },
    main: {
      order: 2,
      [theme.breakpoints.down('md')]: {
        // order: 1,
      },
    },
    info: {
      order: 3,
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(2),
      },
    },
  })
)

interface ActerViewProps {
  acter: Acter
}

export const ActerLanding: FC<ActerViewProps> = ({ acter }) => {
  const classes = useStyles({})
  return (
    <Grid className={classes.header} container>
      <Grid item xs={12}>
        <HeaderSection acter={acter} />
      </Grid>
      <Grid container>
        <Grid className={classes.menu} item xs={12} sm>
          <MenuSection />
        </Grid>
        <Grid className={classes.main} item xs={12} sm={6}>
          main
        </Grid>
        <Grid className={classes.info} item xs={12} sm>
          <InfoSection acter={acter} />
        </Grid>
      </Grid>
    </Grid>
  )
}
