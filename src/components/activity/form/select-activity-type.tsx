import React, { FC } from 'react'
import {
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import { ActivityType } from '@schema'
import { grey } from '@material-ui/core/colors'

export interface SelectActivityTypeProps {
  activityTypes: ActivityType[]
}

export const SelectActivityType: FC<SelectActivityTypeProps> = ({
  activityTypes,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <InputLabel className={classes.label}>Activity type:</InputLabel>
      <FormControl className={classes.field}>
        <Field
          className={classes.chooseType}
          component={Select}
          name="activityTypeId"
          required={true}
          displayEmpty
        >
          <MenuItem value="">
            <Typography className={classes.select}>Select</Typography>
          </MenuItem>
          {activityTypes.map((type) => (
            <MenuItem value={type.id} key={type.id}>
              <Typography className={classes.name} variant="body1">
                {type.name}
              </Typography>
            </MenuItem>
          ))}
        </Field>
      </FormControl>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      width: '100%',
    },
    label: {
      marginRight: theme.spacing(2),
    },
    field: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: theme.spacing(12),
    },
    chooseType: {
      textAlign: 'center',
    },
    select: {
      color: grey[600],
    },
    name: {
      textTransform: 'capitalize',
    },
  })
)
