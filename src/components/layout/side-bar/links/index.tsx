import { FC } from 'react'
import { Box, ListItem } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { Link as LinkType } from '@schema'

export interface LinkListProps {
  links: LinkType[]
}

export const LinksList: FC<LinkListProps> = ({ links }) => {
  const classes = useStyles()

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
    <Box className={classes.container}>
      {links.map((link) => (
        <ListItem className={classes.item} key={link.id}>
          <a href={getUrl(link.url)} className={classes.links} target="_blank">
            {link.name}
          </a>
        </ListItem>
      ))}
    </Box>
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
      height: 20,
      '& a': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        textTransform: 'capitalize',
      },
    },
    links: {
      transition: 'transform .2s',
      '&:hover': {
        color: theme.palette.secondary.contrastText,
        transform: 'scale(1.1)',
      },
    },
  })
)
