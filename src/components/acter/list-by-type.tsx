import React, { Fragment, FC } from 'react'
import Link from 'next/link'
import {
  Link as MuiLink,
  List,
  ListItem,
  ListSubheader,
} from '@material-ui/core'

import { acterAsUrl } from 'src/lib/acter/acter-as-url'

import { Acter } from '@generated/type-graphql'

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
    <List>
      {Object.entries(actersByType).map(([type, subset]) => (
        <ListItem key={`acterType-${type}`} aria-label="acter-type">
          <List>
            <ListSubheader role="heading">{type}</ListSubheader>
            {subset.map((acter) => (
              <ListItem key={`acter-${acter.id}`}>
                <Link href={acterAsUrl(acter)} passHref>
                  <MuiLink>{acter.name}</MuiLink>
                </Link>
              </ListItem>
            ))}
          </List>
        </ListItem>
      ))}
    </List>
  )
}
