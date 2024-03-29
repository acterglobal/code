import React, { FC, useState } from 'react'

import { Box, Button, Divider, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { AddCircleOutlineOutlined } from '@material-ui/icons'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { LinkForm } from '@acter/components/links/form'
import { useActer } from '@acter/lib/acter/use-acter'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useLinks } from '@acter/lib/links/use-links'

export const Links: FC = () => {
  const { t } = useTranslation('settings')
  const classes = useStyles()
  const [toggleForm, setToggleForm] = useState(false)
  const { acter } = useActer()
  const { links, fetching: linksLoading } = useLinks({ acterId: acter?.id })

  if (linksLoading) return <LoadingSpinner />
  if (!links) return null

  const handleClick = () => setToggleForm(!toggleForm)

  return (
    <Box className={classes.root}>
      <Typography variant="body2" className={classes.heading}>
        {t('linksHeading')}
      </Typography>

      {toggleForm ? (
        <LinkForm handleCancel={handleClick} />
      ) : (
        <Box className={classes.addLinkSection}>
          <Button className={classes.button} onClick={handleClick}>
            <AddCircleOutlineOutlined
              fontSize="small"
              className={classes.icon}
            />
            {t('addNewLink')}
          </Button>
        </Box>
      )}

      {links.length !== 0 && (
        <>
          <Divider classes={{ root: classes.divider }} />

          <Box className={classes.content}>
            {links.map((link) => (
              <LinkForm link={link} />
            ))}
          </Box>
        </>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      marginTop: theme.spacing(2),
      textAlign: 'center',
      fontWeight: theme.typography.fontWeightLight,
    },
    addLinkSection: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      color: theme.palette.secondary.main,
      fontSize: '0.88rem',
    },
    icon: {
      marginRight: theme.spacing(1.5),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    content: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
    },
  })
)
