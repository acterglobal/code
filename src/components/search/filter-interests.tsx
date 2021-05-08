import React, { FC, useState, MouseEvent } from 'react'
import { Box, Button, Popover, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Form, Formik } from 'formik'
import { InterestsPicker } from 'src/components/interests/interests-picker'
import { InterestType } from '@schema'
import { grey } from '@material-ui/core/colors'
import { interestNameMap } from 'src/lib/interests/interest-mappings'

export type FilterInterestsProps = {
  interestTypes: InterestType[]
  applyFilters: (filterInterests: string[]) => void
  handleSearch: (filterInterests: string[]) => void
}

export const FilterInterests: FC<FilterInterestsProps> = ({
  interestTypes,
  applyFilters,
  handleSearch,
}) => {
  const classes = useStyles()
  const [selectedInterests, setSelectedInterests] = useState([])

  /* Material Ui Popover stuff */
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  /* Form stuff */
  const initialValues = {
    interestIds: selectedInterests,
  }

  const handleSubmit = () => {
    const interestNames = interestNameMap(interestTypes)
    const filters = selectedInterests.map((id) => interestNames[id])
    applyFilters(filters)
    handleClose()
    handleSearch(filters)
  }

  const handleClear = () => {
    applyFilters([])
    setSelectedInterests([])
  }

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClick}
      >
        <Typography variant="caption">
          Interests{' '}
          {selectedInterests.length > 0 && `(${selectedInterests.length})`}
        </Typography>
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
            {() => (
              <Form>
                <Box className={classes.interests}>
                  <InterestsPicker
                    interestTypes={interestTypes}
                    selectedInterests={selectedInterests}
                    setSelectedInterests={setSelectedInterests}
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
                    disabled={selectedInterests.length === 0}
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
      color: 'white',
    },
  })
)
