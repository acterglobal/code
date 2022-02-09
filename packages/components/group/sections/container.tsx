import React, { FC, ReactNode, useState } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { AddRounded as AddIcon } from '@material-ui/icons'

import { AddActivity } from '@acter/components/activity/add-activity'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ManageContent } from '@acter/components/group/sections/manage-content'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  ActerTypes,
  GroupSectionTabs as GroupSectionContent,
  GroupSectionTabs,
} from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

interface SectionContainerProps {
  addItem?: ActerTypes
  children: ReactNode
  title: string
  buttonText: string
  hideAddIcon?: boolean
  sectionContent?: GroupSectionContent
}
export const SectionContainer: FC<SectionContainerProps> = ({
  addItem,
  children,
  title,
  buttonText,
  hideAddIcon,
  sectionContent,
}) => {
  const [onHover, setOnHover] = useState(false)
  const classes = useStyles({ onHover })
  const [openDrawer, setOpenDrawer] = useState(false)
  const [contentTab, setContentTab] = useState(sectionContent)
  const router = useRouter()

  const { user } = useUser()
  const { acter, fetching: acterFetching } = useActer()

  if (acterFetching) return <LoadingSpinner />
  if (!acter) return null

  const handleAddIconClick = () => {
    if (sectionContent === GroupSectionTabs.MEMBERS) {
      setContentTab(GroupSectionTabs.INVITE)
    }
    setOpenDrawer(true)
  }
  const handleButtonClick = () => {
    if (addItem === ActerTypes.ACTIVITY) {
      return router.push(acterAsUrl({ acter, extraPath: 'activities' }))
    }

    setContentTab(sectionContent)
    setOpenDrawer(true)
  }

  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <Box
      className={classes.container}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Box className={classes.header}>
        <Typography className={classes.heading}>{title}</Typography>

        <Box className={classes.buttons}>
          {isMember && !hideAddIcon && (
            <AddIcon
              className={classes.addIcon}
              fontSize="inherit"
              onClick={handleAddIconClick}
            />
          )}

          {isMember && (
            <Button className={classes.button} onClick={handleButtonClick}>
              {buttonText}
            </Button>
          )}
        </Box>
      </Box>

      {children}

      {addItem === ActerTypes.ACTIVITY ? (
        <AddActivity openDrawer={openDrawer} setDrawer={setOpenDrawer} />
      ) : (
        openDrawer && (
          <ManageContent
            openDrawer={openDrawer}
            setDrawer={setOpenDrawer}
            contentTab={contentTab}
          />
        )
      )}
    </Box>
  )
}

type HoverStyle = {
  onHover: boolean
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.colors.white,
      marginBottom: theme.spacing(1.5),
      borderRadius: 6,
      padding: theme.spacing(2.5),
      paddingTop: theme.spacing(2),
      boxShadow: ({ onHover }: HoverStyle) =>
        onHover && '2px 4px 7px rgba(146, 146, 146, 0.36)',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(0.5),
    },
    heading: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 14,
      color: theme.colors.blue.dark,
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
    },
    addIcon: {
      display: ({ onHover }: HoverStyle) => (onHover ? 'block' : 'none'),
      fontSize: 20,
      cursor: 'pointer',
      color: theme.colors.grey.main,
      '&:hover': {
        color: theme.colors.grey.dark,
      },
    },
    button: {
      padding: 0,
      marginLeft: theme.spacing(0.5),
      textTransform: 'none',
      textDecoration: 'underline',
      fontSize: 12,
      color: theme.colors.grey.main,
      '&:hover': {
        color: theme.colors.grey.dark,
        textDecoration: 'underline',
        backgroundColor: theme.colors.white,
      },
    },
  })
)
