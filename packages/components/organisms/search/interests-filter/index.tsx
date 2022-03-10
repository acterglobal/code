import React, { FC, useState } from 'react'

import { Box, Button } from '@mui/material'
import { Theme } from '@mui/material/styles';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { Form, Formik } from 'formik'

import { InterestsPicker } from '@acter/components/interests/interests-picker'
import { Popover } from '@acter/components/util/popover'
import { interestNameMap } from '@acter/lib/interests/map-interest-name'
import { useInterestTypes } from '@acter/lib/interests/use-interest-types'

export type InterestsFilterProps = {
  applyFilters: (filterInterests?: string[]) => void
}

export const InterestsFilter: FC<InterestsFilterProps> = ({ applyFilters }) => {
  const classes = useStyles()
  const [closePopover, setClosePopover] = useState<boolean | null>(null)
  const [selectedInterestIds, setSelectedInterestIds] = useState([])

  const { interestTypes } = useInterestTypes()
  if (!interestTypes) return null

  const interestNames = interestNameMap(interestTypes)

  const initialValues = {
    interestIds: selectedInterestIds,
  }

  const handleSubmit = () => {
    const filterInterests = selectedInterestIds.map((id) => interestNames[id])
    applyFilters(filterInterests)
    setClosePopover(!closePopover)
  }

  const handleClear = () => {
    applyFilters([])
    setSelectedInterestIds([])
    setClosePopover(!closePopover)
  }

  return (
    <Popover
      tabLabel={`Interests ${
        selectedInterestIds.length > 0 ? `(${selectedInterestIds.length})` : ``
      }`}
      closePopover={closePopover}
    >
      <Box className={classes.content}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Box className={classes.interests}>
                <InterestsPicker
                  interestTypes={interestTypes}
                  selectedInterests={selectedInterestIds}
                  setSelectedInterests={setSelectedInterestIds}
                  showDivider={false}
                />
              </Box>

              <Box className={classes.btnsContainer}>
                <Button
                  className={classes.clear}
                  variant="text"
                  color="primary"
                  onClick={handleClear}
                >
                  Clear
                </Button>
                <Button
                  className={classes.save}
                  variant="contained"
                  color="primary"
                  disabled={selectedInterestIds.length === 0}
                  type="submit"
                >
                  Apply
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Popover>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      maxWidth: theme.spacing(80),
      minHeight: theme.spacing(65),
      padding: theme.spacing(2),
    },
    interests: {
      height: 480,
    },
    btnsContainer: {
      marginTop: theme.spacing(1),
      borderTop: '1px solid',
      borderTopColor: theme.colors.grey.main,
      padding: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
    },
    clear: {
      textTransform: 'capitalize',
      color: theme.colors.grey.dark,
      fontWeight: theme.typography.fontWeightBold,
    },
    save: {
      textTransform: 'capitalize',
      borderRadius: theme.spacing(3),
      fontSize: '0.8rem',
      color: 'white',
    },
  })
)
