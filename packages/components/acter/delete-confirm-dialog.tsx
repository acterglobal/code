import React, { FC } from 'react'

import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

import { Button, ButtonsContainer } from '@acter/components/styled'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { Acter } from '@acter/schema'

export interface ActerDeleteConfirmDialogProps {
  /**
   * The acter to delete
   */
  acter: Acter
  /**
   * Callback for Cancel button click
   */
  onCancel: (any?) => void
  /**
   * Callback for Delete button click
   */
  onSubmit: (any?) => void
}

export const ActerDeleteConfirmDialog: FC<ActerDeleteConfirmDialogProps> = ({
  acter,
  onCancel,
  onSubmit,
}) => {
  const { t } = useTranslation('common')

  return (
    <ContentContainer>
      {t('deleteMessage', { acterName: acter.name })}
      <ButtonsContainer>
        <Button variant="outlined" color="primary" onClick={onCancel}>
          {t('cancel')}
        </Button>
        <DeleteButton variant="contained" color="secondary" onClick={onSubmit}>
          {t('delete')}
        </DeleteButton>
      </ButtonsContainer>
    </ContentContainer>
  )
}

const ContentContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
  })
)(Box)

const DeleteButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      '&.hover': {
        backgroundColor: theme.palette.error.light,
      },
    },
  })
)(Button)
