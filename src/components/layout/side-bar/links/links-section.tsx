import { FC } from 'react'
import { Box } from '@material-ui/core'
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
      <LinksList links={links} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(1.1),
    },
  })
)
