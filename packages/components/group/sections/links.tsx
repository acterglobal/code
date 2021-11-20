import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { SectionContainer } from '@acter/components/group/sections/container'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'

export const LinksSection: FC = () => {
  const classes = useStyles()
  const links = []

  return (
    <SectionContainer title="Links" buttonText="Manage Links">
      <Box className={classes.list}>
        {links?.length === 0 ? (
          <ZeroMessage
            primaryText="There are currently no links added to this group."
            secondaryText="Do you want to add a link?"
            buttonText="Add new link"
          />
        ) : (
          <>activities list comes here</>
        )}
      </Box>
    </SectionContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      height: theme.spacing(12),
    },
  })
)
