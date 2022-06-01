import React, { FC } from 'react'

import { MenuItem, makeStyles, createStyles } from '@material-ui/core'
import { MoreVert as ThreeDotsIcon } from '@material-ui/icons'

import { theme } from '@acter/components/themes/acter-theme'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'

export interface PostOptionsProps {
  onEdit: () => void
  onDelete: () => void
  isAuthor: boolean
}

export const PostOptions: FC<PostOptionsProps> = ({
  onEdit,
  onDelete,
  isAuthor,
}) => {
  const classes = useStyles()
  const { t } = useTranslation('common')
  return (
    <DropdownMenu
      anchorNode={<ThreeDotsIcon className={classes.threeDotsIcon} />}
      closeOnClick
    >
      {isAuthor && (
        <MenuItem className={classes.menuItem} onClick={onEdit}>
          {capitalize(t('edit'))}
        </MenuItem>
      )}

      <MenuItem className={classes.menuItem} onClick={onDelete}>
        {capitalize(t('delete'))}
      </MenuItem>
    </DropdownMenu>
  )
}

const useStyles = makeStyles(
  createStyles({
    threeDotsIcon: {
      color: theme.colors.grey.main,
      cursor: 'pointer',
    },
    menuItem: {
      fontSize: '0.8rem',
    },
  })
)
