import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Button } from '@acter/components/styled'
import { Post as PostType } from '@acter/schema/types'

export interface PostButtonGroupProps {
  parentId?: string
  post?: PostType
  cancelEdit?: () => void
  onCancel?: () => void
}

export const PostButtonGroup: FC<PostButtonGroupProps> = ({
  parentId,
  post,
  cancelEdit,
  onCancel,
}) => {
  const classes = useStyles()

  if (post) {
    return (
      <Box className={classes.buttonContainer}>
        <Box className={classes.button}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={cancelEdit}
          >
            Cancel
          </Button>
        </Box>

        <Box className={classes.button}>
          <Button
            size="small"
            variant={parentId ? 'outlined' : 'contained'}
            color="primary"
            type="submit"
            style={{ color: parentId ? null : '#FFFFFF' }}
          >
            Save
          </Button>
        </Box>
      </Box>
    )
  }

  return (
    <Box className={classes.buttonContainer}>
      <Box className={classes.button}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Box>
      <Box className={classes.button}>
        <Button
          size="small"
          variant={parentId ? 'outlined' : 'contained'}
          color="primary"
          type="submit"
          style={{ color: parentId ? null : '#FFFFFF' }}
        >
          {parentId ? 'Comment' : 'Post'}
        </Button>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white',
  },
}))
