import React, { Fragment, FC } from 'react'
import Link from 'next/link'
import {
  Box,
  Grid,
  Hidden,
  Link as MuiLink,
  List,
  ListItem,
  ListSubheader,
} from '@material-ui/core'

import { acterAsUrl } from 'src/lib/acter/acter-as-url'

import { Acter } from '@generated/type-graphql'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const StyledBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid black',
    },
  })
)(Box)

export interface ActerListByTypeProps {
  acters: Acter[]
}

type ActersByType = {
  [key: string]: Acter[]
}

export const ActerListByType: FC<ActerListByTypeProps> = ({ acters }) => {
  const actersByType = acters.reduce((prev, acter) => {
    prev[acter.ActerType.name] = [...(prev[acter.ActerType.name] || []), acter]
    return prev
  }, {} as ActersByType)

  return (
    // <List>
    <Grid container>
      {Object.entries(actersByType).map(([type, subset]) => (
        <Grid item xs={6} sm={3} style={{ border: '1px solid blue' }}>
          {subset.map((acter) => (
            <Grid item key={`acter-${acter.id}`}>
              <Link href={acterAsUrl(acter)} passHref>
                <MuiLink>{acter.name}</MuiLink>
              </Link>
            </Grid>
          ))}
        </Grid>
        // <Hidden xsDown>
        //   <Grid item xs={6} sm={3} style={{ border: '1px solid red' }}>
        //     one
        //   </Grid>
        // </Hidden>
        // <Grid item xs={6} sm={3} style={{ border: '1px solid blue' }}>
        //   two
        // </Grid>
        // <Hidden xsDown>
        //   <Grid item xs={6} sm={3} style={{ border: '1px solid green' }}>
        //     three
        //   </Grid>
        // </Hidden>
        // <Grid item xs={6} sm={3} style={{ border: '1px solid yellow' }}>
        //   four
        // </Grid>
        // <ListItem key={`acterType-${type}`} aria-label="acter-type">
        //   <List>
        //     <ListSubheader role="heading">{type}</ListSubheader>
        //     {subset.map((acter) => (
        //       <ListItem key={`acter-${acter.id}`}>
        //         <Link href={acterAsUrl(acter)} passHref>
        //           <MuiLink>{acter.name}</MuiLink>
        //         </Link>
        //       </ListItem>
        //     ))}
        //   </List>
        // </ListItem>
      ))}
    </Grid>

    // </List>
  )
}
