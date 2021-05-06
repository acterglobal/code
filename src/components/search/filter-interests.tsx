import React, { FC, useEffect, useState, MouseEvent } from 'react'
import { Box, Button, Popover } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Form, Formik, useFormikContext, withFormik } from 'formik'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { InterestType } from '@schema'
import { grey } from '@material-ui/core/colors'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { getInterests } from 'src/props'

type FilterInterestsProps = {
  interestTypes: InterestType[]
}

export const FilterInterests: FC<FilterInterestsProps> = ({
  interestTypes,
}) => {
  const classes = useStyles()
  const [filterInterests, setFilterInterests] = useState([])

  /* Material Ui Popover stuff */
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  /* Form stuff */
  const initialValues = {
    interestIds: filterInterests,
  }

  const getInterestNames = () => {
    const topLevels = getTopLevelTypes(interestTypes)
    const subTypes = topLevels.map((type) =>
      interestTypes.filter(
        (subtype) => type.id === subtype.parentInterestTypeId
      )
    )
    const names = subTypes.map((type) => {
      // return type.Interests.map((interest) => {
      //   return interest.name
      // })
      return type
    })
    console.log('SUB TYPES', names)
  }

  const handleSubmit = ({ interestIds }) => {
    getInterestNames()
    setFilterInterests(interestIds)
  }

  const handleClear = () => {
    setFilterInterests([])
  }

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClick}
      >
        Interests ({filterInterests.length})
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{ marginTop: 5 }}
      >
        <Box className={classes.popover}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ setFieldValue, values }) => (
              <Form>
                <InterestsPicker
                  interestTypes={interestTypes}
                  setFieldValue={setFieldValue}
                  setFilterInterests={setFilterInterests}
                />

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
                    style={{ color: 'white' }}
                    disabled={values.interestIds.length === 0}
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
    </>
  )
}

const InterestsPicker = ({
  interestTypes,
  setFieldValue,
  setFilterInterests,
}) => {
  const classes = useStyles()
  const { values } = useFormikContext()

  useEffect(() => {
    setFilterInterests(values.interestIds)
  }, [values])

  return (
    <Box className={classes.interests}>
      <InterestsAddSection
        interestTypes={interestTypes}
        setFieldValue={setFieldValue}
        showDivider={false}
      />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: theme.spacing(3.5),
      minWidth: theme.spacing(18),
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      color: 'black',
      backgroundColor: 'white',
      textTransform: 'capitalize',
      fontSize: '0.7rem',
      '&:hover': {
        backgroundColor: 'white',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: theme.spacing(10),
      },
    },
    popover: {
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
      borderTopColor: grey[500],
      padding: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
    },
    clear: {
      textTransform: 'capitalize',
      color: grey[800],
      fontWeight: theme.typography.fontWeightBold,
    },
    save: {
      textTransform: 'capitalize',
      borderRadius: theme.spacing(3),
      fontSize: '0.8rem',
    },
  })
)
