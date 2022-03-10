import React, { FC, ReactNode } from 'react'

import NextLink from 'next/link'

import { Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { Language as Locale } from '@acter/schema'

interface AnchorLinkProps {
  href: string
  as?: string
  passHref?: boolean
  isExternal?: boolean
  target?: string
  children: ReactNode
  locale?: Locale
}

export const Link: FC<AnchorLinkProps> = ({
  href,
  as,
  passHref = false,
  isExternal = false,
  target,
  children,
  locale,
}) => {
  const classes = useStyles()

  if (isExternal)
    return (
      <a href={href} className={classes.link}>
        {children}
      </a>
    )

  return (
    <NextLink href={href} as={as} passHref={passHref} locale={locale}>
      <a className={classes.link} target={target}>
        {children}
      </a>
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
