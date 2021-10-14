import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { useFormikContext } from 'formik'

import { InterestsAddSection } from '@acter/components/acter/form/interests-add-section'
import { ImageUpload } from '@acter/components/image-upload'
import { FormLabel } from '@acter/components/styled/form-label'
import { FormSection } from '@acter/components/styled/form-section'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { TextEditor } from '@acter/components/util/text-editor'
import { useInterestTypes } from '@acter/lib/interests/use-interest-types'

export interface DetailsStepValues {
  bannerUrl?: string
  description: string
  interestIds: string[]
}

export const DetailsStep: FC = () => {
  const classes = useStyles()
  const [editor, setEditor] = useState(null)
  const { values, setFieldValue } = useFormikContext<DetailsStepValues>()

  const { interestTypes, fetching } = useInterestTypes()

  return (
    <Box className={classes.container}>
      <FormSection>
        <FormLabel>Image</FormLabel>
        <ImageUpload
          aspectRatio={72 / 25}
          imageType="banner"
          fileUrl={values.bannerUrl}
        />
      </FormSection>

      <FormSection onClick={() => editor.focus()}>
        <FormLabel>Description</FormLabel>

        <TextEditor
          height={150}
          initialValue={values.description}
          // @ts-ignore
          handleInputChange={(value) => setFieldValue('description', value)}
          editorRef={(editorRef) => setEditor(editorRef)}
        />
      </FormSection>
      {fetching && <LoadingSpinner />}
      {interestTypes ? (
        <FormSection>
          <FormLabel>Choose interests</FormLabel>
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
