import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { useFormikContext } from 'formik'

import { InterestsAddSection } from '@acter/components/acter/form/interests-add-section'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ImageUpload } from '@acter/components/image-upload'
import { FormLabel } from '@acter/components/styled/form-label'
import { FormSection } from '@acter/components/styled/form-section'
import { TextEditor } from '@acter/components/util/text-editor'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useInterestTypes } from '@acter/lib/interests/use-interest-types'
import { capitalize } from '@acter/lib/string/capitalize'

export interface DetailsStepValues {
  bannerUrl?: string
  description: string
  interestIds: string[]
}

export const DetailsStep: FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'form' })
  const classes = useStyles()
  const { values, setFieldValue } = useFormikContext<DetailsStepValues>()

  const { interestTypes, fetching } = useInterestTypes()

  return (
    <Box className={classes.container}>
      <FormSection>
        <FormLabel>{capitalize(t('image'))}</FormLabel>
        <ImageUpload
          aspectRatio={72 / 25}
          imageType="banner"
          fileUrl={values.bannerUrl}
        />
      </FormSection>

      <FormSection>
        <FormLabel>{t('description')}</FormLabel>

        <TextEditor
          height={150}
          initialValue={values.description}
          // @ts-ignore
          handleInputChange={(value) => setFieldValue('description', value)}
        />
      </FormSection>
      {fetching && <LoadingSpinner />}
      {interestTypes ? (
        <FormSection>
          <FormLabel>{t('chooseInterests')}</FormLabel>
          <InterestsAddSection />
        </FormSection>
      ) : null}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      overflow: 'scroll',
      'ms-overflow-style': 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
        overflowY: 'hidden',
      },
    },
    textinput: {
      fontSize: '0.5rem',
      // marginBottom: 15,
      color: theme.palette.secondary.light,
      width: '100%',
    },
    textEditor: {
      border: '1px solid black',
      backgroundColor: 'red',
    },
  })
)
