import React, { FC, useEffect } from 'react'

import { Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import { differenceInMinutes, set } from 'date-fns'
import isValid from 'date-fns/isValid'
import { Field, FormikTouched, useFormikContext } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'

import { DateTimePicker } from '@acter/components/molecules/fields/datetime-picker'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'

export interface StartEndDateTimePickerProps {
  hideIsAllDayCheckBox?: boolean
}

export interface StartEndDateTimePickerValues {
  startAt: Date
  endAt: Date
  isAllDay: boolean
}

export const StartEndDateTimePicker: FC<StartEndDateTimePickerProps> = ({
  hideIsAllDayCheckBox,
}) => {
  const { t } = useTranslation('common')
  const {
    values: { endAt, isAllDay, startAt },
    touched: { endAt: endAtTouched, startAt: startAtTouched },
    setFieldValue,
  } = useFormikContext<StartEndDateTimePickerValues>()

  useEffect(() => {
    if (isAllDay === true) {
      if (isValid(startAt))
        setFieldValue(
          'endAt',
          set(endAt, { hours: 23, minutes: 59, seconds: 59 })
        )
      if (isValid(endAt))
        setFieldValue(
          'startAt',
          set(startAt, { hours: 0, minutes: 0, seconds: 0 })
        )
    }
  }, [isAllDay])

  const validateDateTime = (touched: FormikTouched<Date>) => (val: Date) => {
    if (!touched) return
    if (!val) return t('dateTimePickerValidateMessages.required')
    if (!isValid(val)) return t('dateTimePickerValidateMessages.invalidDate')
  }
  const validateEndTime = (val: Date) => {
    const basicValidation = validateDateTime(endAtTouched)(val)
    if (basicValidation) return basicValidation
    if (startAt && isValid(startAt) && differenceInMinutes(val, startAt) < 0) {
      return t('dateTimePickerValidateMessages.cantBeBeforeStart')
    }
  }

  const gridSize = isAllDay ? 6 : 12

  return (
    <Grid container spacing={2}>
      <Grid item xs={gridSize}>
        <DateTimePicker
          placeholder={capitalize(t('start'))}
          name="startAt"
          isAllDay={isAllDay}
          required={true}
          validate={validateDateTime(startAtTouched)}
        />
      </Grid>
      <Grid item xs={gridSize}>
        <DateTimePicker
          placeholder={capitalize(t('end'))}
          name="endAt"
          isAllDay={isAllDay}
          required={true}
          minDate={startAt && isValid(startAt) ? startAt : undefined}
          validate={validateEndTime}
        />
      </Grid>

      {!hideIsAllDayCheckBox && (
        <Grid item xs={12}>
          <Field
            component={CheckboxWithLabel}
            type="checkbox"
            name="isAllDay"
            Label={{ label: t('form.isAllDay'), style: { color: grey[700] } }}
            inputProps={{ 'aria-label': 'all day activity' }}
          />
        </Grid>
      )}
    </Grid>
  )
}
