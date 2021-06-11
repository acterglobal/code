import { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { LinksList } from 'src/components/layout/side-bar/links'
import { Link as LinkType } from '@schema'

export interface LinkSectionProps {
  links: LinkType[]
}

export const LinkSection: FC<LinkSectionProps> = ({ links }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Box className={classes.heading}>
        <Typography variant="caption">Links</Typography>
      </Box>

      <LinksList links={links} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
    },
    container: {
      marginBottom: theme.spacing(1.1),
    },
  })
)
