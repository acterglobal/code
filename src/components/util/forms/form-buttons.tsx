import React, { FC } from 'react'
import {
  Button,
  ButtonsContainer,
  ButtonsContainerRight,
} from 'src/components/styled'

type SubmitButtonAlignment = 'left' | 'right'

export interface FormButtonsProps {
  saveText?: string
  cancelText?: string
  align: SubmitButtonAlignment
  loading: boolean
  isSubmitting: boolean
  resetForm: () => void
}

export const FormButtons: FC<FormButtonsProps> = ({
  saveText = 'Save',
  cancelText = 'Cancel',
  align = 'left',
  loading,
  isSubmitting,
  resetForm,
}) => {
  const Container = align === 'left' ? ButtonsContainer : ButtonsContainerRight
  return (
    <Container>
      <Button
        variant="outlined"
        color="primary"
        disabled={loading || isSubmitting}
        onClick={() => resetForm()}
      >
        {cancelText}
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ color: 'white' }}
        disabled={loading || isSubmitting}
        type="submit"
      >
        {saveText}
      </Button>
    </Container>
  )
}
