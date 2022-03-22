import React, { FC, useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import { ListItem } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { AddIcon } from '@acter/components/icons'
import { Drawer } from '@acter/components/util/drawer'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { useTranslation } from '@acter/lib/i18n/use-translation'

const ActerForm = dynamic(() =>
  import('@acter/components/acter/form').then((mod) => mod.ActerForm)
)

export const AddActer: FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('common')
  const [openDrawer, setOpenDrawer] = useState(false)
  const [heading, setHeading] = useState(t('form.create') as string)
  const { acterTypes } = useActerTypes()

  const handleAddIconClick = () => setOpenDrawer(true)

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    setHeading(t('form.create'))
  }

  const [{ data, fetching }, createActer] = useCreateActer()

  useEffect(() => {
    if (!fetching && data) {
      handleDrawerClose()
    }
  }, [data, fetching])

  return (
    <>
      <ListItem className={classes.icon} onClick={handleAddIconClick}>
        <AddIcon fontSize="large" aria-label="Add Acter" />
      </ListItem>

      {acterTypes && (
        <Drawer
          heading={heading}
          open={openDrawer}
          handleClose={handleDrawerClose}
        >
          <ActerForm onSubmit={createActer} />
        </Drawer>
      )}
    </>
  )
}

const useStyles = makeStyles(
  createStyles({
    icon: {
      cursor: 'pointer',
    },
  })
)
