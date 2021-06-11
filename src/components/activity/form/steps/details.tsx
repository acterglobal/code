import React, { FC, useState } from 'react'
import { useFormikContext } from 'formik'
import { Box, InputLabel } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { ImageUpload } from 'src/components/image-upload'
import { TextEditor } from 'src/components/util/text-editor'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
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
      <Box className={classes.section}>
        <InputLabel className={classes.label}>Image</InputLabel>
        <ImageUpload
          aspectRatio={72 / 25}
          imageType="banner"
          setImageToFormField={setFieldValue}
          fileUrl={values.bannerUrl}
        />
      </Box>

      <Box className={classes.section} onClick={() => editor.focus()}>
        <InputLabel className={classes.label}>Description</InputLabel>

        <TextEditor
          width={450}
          height={150}
          initialValue={values.description}
          // @ts-ignore
          handleInputChange={(value) => setFieldValue('description', value)}
          handleFocus={(editorRef) => setEditor(editorRef)}
        />
      </Box>
      <Box className={classes.section}>
        <InputLabel className={classes.label}>Choose interests</InputLabel>
        <InterestsAddSection interestTypes={interestTypes} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      overflow: 'scroll',
    },
    section: {
      marginBottom: theme.spacing(2),
    },
    label: {
      color: grey[700],
      marginBottom: 10,
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
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
