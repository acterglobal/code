import React, { FC, useState } from 'react'
import { Popover } from 'src/components/util/popover'
import { Field } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export type SortByProps = {
  applySortBy: (sortBy: string[]) => void
  handleSearch: (sortBy: string[]) => void
}

export const SortBy: FC<SortByProps> = ({ applySortBy, handleSearch }) => {
  const classes = useStyles()
  const [sortBy, setSortBy] = useState([])

  const initialValues = {
    values: sortBy,
  }
  const handleApply = () => {
    applySortBy(['date'])
    console.log()
  }

  const handleClear = () => {
    console.log('handle clear')
  }

  return (
    <Popover
      tabLabel="Sort by"
      numberOfSelection={2}
      handleApply={handleApply}
      handleClear={handleClear}
      initialValues={initialValues}
    >
      <Box className={classes.container}>
        <Field
          component={CheckboxWithLabel}
          type="checkbox"
          name="dates"
          Label={{ label: 'Dates' }}
          onChangel={() => console.log('dates checked')}
        />
        <Field
          component={CheckboxWithLabel}
          type="checkbox"
          name="names"
          Label={{ label: 'Names' }}
        />
      </Box>
    </Popover>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
)
