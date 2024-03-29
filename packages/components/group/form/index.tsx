import React, { FC, useState } from 'react'

import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  FormGroup,
  FormLabel,
  FormHelperText,
} from '@material-ui/core'

import { Form, Formik, Field } from 'formik'
import { TextField } from 'formik-material-ui'

import { Switch } from '@acter/components/atoms/fields/switch'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { getActerTypeByName } from '@acter/lib/acter-types/get-acter-type-by-name'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { ActerTypes } from '@acter/lib/constants/acter-types'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'
import { Acter, ActerConnectionRole, ActerJoinSettings } from '@acter/schema'

export interface GroupFormProps {
  acter?: Acter
  parentActer: Acter
  onSubmit: (data: Acter) => void
  saving: boolean
}

export const GroupForm: FC<GroupFormProps> = ({
  acter,
  parentActer,
  onSubmit,
  saving,
}) => {
  const { t } = useTranslation('common', { keyPrefix: 'form' })
  const classes = useStyles()
  const { user } = useUser()
  const { acterTypes, fetching } = useActerTypes()

  const joinSetting = acter
    ? acter.acterJoinSetting
    : parentActer.acterJoinSetting
  const setting = joinSetting === ActerJoinSettings.RESTRICTED
  const [isActerJoinRestricted, setIsActerJoinRestricted] = useState(setting)

  if (!user) return null

  const acterType = getActerTypeByName(acterTypes || [], ActerTypes.GROUP)

  const parentActerAdmins = parentActer.Followers.filter(
    (follower) =>
      follower.role === ActerConnectionRole.ADMIN &&
      follower.Follower?.createdByUser?.id !== user?.id
  )

  const initialValues = {
    name: '',
    description: '',
    parentActerId: parentActer.id,
    acterTypeId: acterType?.id,
    parentAdminActerIds:
      parentActerAdmins?.map(({ Follower: { id } }) => id) || [],
    parentAdminUserIds:
      parentActerAdmins?.map(
        ({
          Follower: {
            createdByUser: { id },
          },
        }) => id
      ) || [],
    ...acter,
  }

  const handleSubmit = (data) => {
    data.acterJoinSetting = isActerJoinRestricted
      ? ActerJoinSettings.RESTRICTED
      : ActerJoinSettings.EVERYONE
    return onSubmit(data)
  }
  const handleSwitch = () => setIsActerJoinRestricted(!isActerJoinRestricted)

  if (fetching) return <LoadingSpinner />
  if (!acterTypes) return

  return (
    <Box className={classes.content}>
      <Typography className={classes.headerMessage} variant="body2">
        {t('groupFormHeading')}
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              className={classes.field}
              component={TextField}
              label={t('name')}
              name="name"
              required={true}
              variant="outlined"
            />
            <Field
              className={classes.field}
              component={TextField}
              label={t('description')}
              name="description"
              variant="outlined"
              multiline={true}
              rows={5}
            />

            {!acter?.id && (
              <FormGroup>
                <FormLabel className={classes.label}>
                  {t('makePrivate')}
                </FormLabel>
                <Box className={classes.makePrivate}>
                  <FormHelperText className={classes.helperText}>
                    {t('makePrivateMessage')}
                  </FormHelperText>
                  <Switch
                    name="makePrivate"
                    checked={isActerJoinRestricted}
                    onChange={handleSwitch}
                  />
                </Box>
              </FormGroup>
            )}

            <Box className={classes.buttonContainer}>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                type="submit"
                disabled={isSubmitting || saving}
              >
                {acter?.id ? t('save') : t('create')}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      width: 500,
      padding: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    },
    headerMessage: {
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(7),
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
    },
    field: {
      width: '100%',
      marginBottom: theme.spacing(4.5),
    },
    label: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    helperText: {
      width: '70%',
    },
    buttonContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      marginTop: theme.spacing(7),
      width: 200,
      color: 'white',
      textTransform: 'capitalize',
    },
    makePrivate: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
)
