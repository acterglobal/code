import React, { FC, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'

import { InvitesSection } from '@acter/components/invites'
import { Drawer } from '@acter/components/util/drawer'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerTypes, InviteTabs } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'

export const AddInviteSection: FC = () => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const { query } = useRouter()

  const [openDrawer, setOpenDrawer] = useState(false)
  const [drawerHeading, setDrawerHeading] = useState('Invite people')

  const handleOnClick = () => setOpenDrawer(true)
  const handleClose = () => setOpenDrawer(false)

  const { user } = useUser()
  const { acter } = useActer()

  useEffect(() => {
    if (
      acter?.ActerType.name === ActerTypes.GROUP &&
      query?.inviteTab === InviteTabs.REQUESTS
    ) {
      setOpenDrawer(true)
    }
  }, [acter, query])

  const isMember = checkMemberAccess(user, acter)

  if (!isMember) return null

  return (
    <>
      <Button className={classes.button} onClick={handleOnClick}>
        {t('invite')}
      </Button>

      <Drawer
        heading={drawerHeading}
        open={openDrawer}
        handleClose={handleClose}
      >
        <InvitesSection setDrawerHeading={setDrawerHeading} />
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      minWidth: theme.spacing(14),
      height: theme.spacing(4.5),
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '1rem',
    },
  })
)
