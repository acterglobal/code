import React, { FC, useState } from 'react'
import { useFormikContext } from 'formik'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ImageUpload } from 'src/components/image-upload'
import { TextEditor } from 'src/components/util/text-editor'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { FormLabel } from 'src/components/styled/form-label'
import { FormSection } from 'src/components/styled/form-section'
import { InterestType } from '@schema'

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
