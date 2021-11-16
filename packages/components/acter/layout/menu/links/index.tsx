import React, { FC } from 'react'

import { Box, Divider, ListItem, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { Tooltip } from '@acter/components/util/tool-tip'
import { useLinks } from '@acter/lib/links/use-links'
import { capitalize } from '@acter/lib/string/capitalize'

export const LinksList: FC = () => {
  const classes = useStyles()
  const { links } = useLinks()
  if (!links || links.length === 0) return null

  const getUrl = (url) => {
    if (!url) {
      return ''
    }

    if (url.match(/^https?:\/\//)) {
      return url
    }

    return `http://${url}`
  }

  return (
    <>
      <Divider className={classes.divider} />

      <Box className={classes.container}>
        {links.map((link) => (
          <ListItem className={classes.item} key={link.id}>
            <a
              href={getUrl(link.url)}
              className={classes.links}
              target="_blank"
            >
              {link.name.length > 15 ? (
                <Tooltip title={link.name}>
                  <Typography className={classes.name} variant="body2" noWrap>
                    {capitalize(link.name)}
                  </Typography>
                </Tooltip>
              ) : (
                <Typography className={classes.name} variant="body2">
                  {capitalize(link.name)}
                </Typography>
              )}
            </a>
          </ListItem>
        ))}
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
    },
    container: {
      width: '100%',
      marginTop: theme.spacing(0.2),
    },
    item: {
      marginBottom: 5,
      '& a': {
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
        fontWeight: theme.typography.fontWeightLight,
        fontSize: '0.8rem',
      },
    },
    links: {
      '&:hover': {
        color: 'white',
      },
    },
    name: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
      width: 140,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    divider: {
      marginTop: theme.spacing(1),
    },
  })
)
