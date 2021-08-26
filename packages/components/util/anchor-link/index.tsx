import React, { FC, ReactNode } from 'react'
import NextLink from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

interface AnchorLinkProps {
  href: string
  as?: string
  passHref?: boolean
  isExternal?: boolean
  children: ReactNode
}

export const Link: FC<AnchorLinkProps> = ({
  href,
  as,
  passHref = false,
  isExternal = false,
  children,
}) => {
  const classes = useStyles()

  if (isExternal)
    return (
      <a href={href} className={classes.link}>
        {children}
      </a>
    )

  return (
    <NextLink href={href} as={as} passHref={passHref}>
      <a className={classes.link}>{children}</a>
    </NextLink>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  })
)
