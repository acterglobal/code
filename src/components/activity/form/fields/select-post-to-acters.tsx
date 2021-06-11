import React, { FC } from 'react'
import { Field, useFormikContext } from 'formik'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { CheckboxWithLabel } from 'formik-material-ui'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Acter } from '@schema'

export interface SelectPostToActersProps {
  acters: Acter[]
}

export interface SelectPostToActersValues {
  organiserActerId: string
  postToActerIds: string[]
}

export const SelectPostToActers: FC<SelectPostToActersProps> = ({ acters }) => {
  const classes = useStyles()
  const {
    values: { postToActerIds = [], organiserActerId = '' },
    setFieldValue,
  } = useFormikContext<SelectPostToActersValues>()

  const handleCheck = (acterId) => ({
    currentTarget: { checked },
  }: React.SyntheticEvent<HTMLInputElement>) => {
    return setFieldValue(
      'postToActerIds',
      getNewActerIds(postToActerIds, acterId, checked)
    )
  }

  return (
    <>
      {acters.map((acter) => {
        const isOrganiser = acter.id === organiserActerId
        const isInPostToList = postToActerIds.includes(acter.id)
        return (
          <Box className={classes.container}>
            <Field
              fullWidth
              component={CheckboxWithLabel}
              type="checkbox"
              name="postToActerIds"
              checked={isInPostToList || isOrganiser}
              disabled={isOrganiser}
              onChange={handleCheck(acter.id)}
            />
            <ActerAvatar acter={acter} />

            {acter.name}
          </Box>
        )
      })}
    </>
  )
}

const getNewActerIds = (
  acterIdList: string[],
  acterId: string,
  checked: boolean
): string[] => {
  if (checked && !acterIdList.includes(acterId)) {
    return [...acterIdList, acterId]
  }

  return acterIdList.filter((id) => id !== acterId)
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: theme.spacing(1),
      borderColor: theme.palette.grey[300],
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      '& > .MuiFormControlLabel-root': {
        marginRight: 0,
      },
      '& > .MuiAvatar-root': {
        marginRight: theme.spacing(1),
      },
    },
  })
)
