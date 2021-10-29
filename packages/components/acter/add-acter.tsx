import React, { FC, useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import { ListItem } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { SelectActerType } from '@acter/components/acter/select-acter-type'
import { AddIcon } from '@acter/components/icons'
import { Drawer } from '@acter/components/util/drawer'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { ActerType } from '@acter/schema'

const ActerForm = dynamic(() =>
  import('@acter/components/acter/form').then((mod) => mod.ActerForm)
)

export const AddActer: FC = () => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [showActerForm, setShowActerForm] = useState(false)
  const [heading, setHeading] = useState('Create')
  const [acterType, setActerType] = useState<ActerType>(null)
  const { acterTypes } = useActerTypes()

  const handleAddIconClick = () => setOpenDrawer(true)

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    setHeading('Create')
    setShowActerForm(false)
  }

  const handleChooseActerType = async (acterTypeName) => {
    const acterType = acterTypes.find((type) => type.name === acterTypeName)
    setActerType(acterType)
    setHeading(`Create ${acterTypeName}`)
    setShowActerForm(true)
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
          {showActerForm ? (
            <ActerForm acterType={acterType} onSubmit={createActer} />
          ) : (
            <SelectActerType onClick={handleChooseActerType} />
          )}
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
