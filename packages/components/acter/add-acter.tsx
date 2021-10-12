import React, { FC, useState } from 'react'

import { StoreObject } from '@apollo/client'
import { ListItem } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { AddActerType } from '@acter/components/acter/add-acter-type'
import { ActerForm } from '@acter/components/acter/form'
import { AddIcon } from '@acter/components/icons'
import { Drawer } from '@acter/components/util/drawer'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { addToCacheList } from '@acter/lib/apollo/add-to-cache-list'
import { ActerType } from '@acter/schema'

export const AddActer: FC = () => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [showActerForm, setShowActerForm] = useState(false)
  const [heading, setHeading] = useState('Create')
  const [acterType, setActerType] = useState<ActerType>(null)

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

  const { acterTypes } = useActerTypes()

  const [createActer] = useCreateActer({
    update: (cache, { data }) => {
      const { createActerCustom: newActer } = data
      cache.modify({
        id: cache.identify((newActer as unknown) as StoreObject),
        fields: { acters: addToCacheList(newActer) },
      })
    },
    onCompleted: handleDrawerClose,
  })

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
            <AddActerType onClick={handleChooseActerType} />
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
