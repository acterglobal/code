import React, { FC } from 'react'
import { Box, MenuItem, InputLabel, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import { ActivityType } from '@schema'

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
      <Field
        className={classes.chooseType}
        component={Select}
        name="activityTypeId"
        label="Show activity in:"
        // displayEmpty
        required={true}
      >
        {activityTypes.map((type) => (
          <MenuItem value={type.id} key={type.id}>
            <Typography className={classes.name} variant="body1">
              {type.name}
            </Typography>
          </MenuItem>
        ))}
      </Field>
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    root: { display: 'flex' },
    label: {},
    chooseType: {},
    name: {},
  })
)
