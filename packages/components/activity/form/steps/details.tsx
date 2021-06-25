import React, { FC, useState } from 'react'
import { useFormikContext } from 'formik'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ImageUpload } from '@acter/components/image-upload'
import { TextEditor } from '@acter/components/util/text-editor'
import { InterestsAddSection } from '@acter/components/acter/form/interests-add-section'
import { FormLabel } from '@acter/components/styled/form-label'
import { FormSection } from '@acter/components/styled/form-section'
import { InterestType } from '@acter/schema/types'

export interface DetailsStepProps {
  interestTypes: InterestType[]
}

export interface DetailsStepValues {
  bannerUrl?: string
  description: string
  interestIds: string[]
}

export const DetailsStep: FC<DetailsStepProps> = ({ interestTypes }) => {
  const classes = useStyles()
  const [editor, setEditor] = useState(null)
  const { values, setFieldValue } = useFormikContext<DetailsStepValues>()

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
          width={450}
          height={150}
          initialValue={values.description}
          // @ts-ignore
          handleInputChange={(value) => setFieldValue('description', value)}
          editorRef={(editorRef) => setEditor(editorRef)}
        />
      </FormSection>
      <FormSection>
        <FormLabel>Choose interests</FormLabel>
        <InterestsAddSection interestTypes={interestTypes} />
      </FormSection>
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
