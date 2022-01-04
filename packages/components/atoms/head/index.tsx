import React, { FC } from 'react'

import NextHead from 'next/head'

type HeadProps = {
  title: string
}

export const Head: FC<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/acter-logo-32.ico" />
    </NextHead>
  )
}
