import React, { FC, useState, MouseEvent, ReactNode } from 'react'
import {
  Box,
  Button,
  Popover as MUIPopover,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Form, Formik } from 'formik'
import { grey } from '@material-ui/core/colors'

export type PopoverProps = {
  tabLabel: string
  numberOfSelection: number
  children: ReactNode
  handleApply: () => void
  handleClear: () => void
  initialValues: { values: string[] }
}

export const Popover: FC<PopoverProps> = ({
  tabLabel,
  numberOfSelection,
  children,
  handleApply,
  handleClear,
  initialValues,
}) => {
  const classes = useStyles()

  /* Material Ui Popover stuff */
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)
  //   const id = open ? 'simple-popover' : undefined

  /* Form stuff */

  const handleSubmit = (values) => {
    console.log(values)
    handleClose()
    handleApply()
  }

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClick}
      >
        <Typography variant="caption">
          {tabLabel}
          {numberOfSelection > 0 && numberOfSelection}
        </Typography>
      </Button>

      <MUIPopover
        // id={id}
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
                <Box className={classes.content}></Box>
                {children}
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
                    // disabled={selectedInterestIds.length === 0}
                    type="submit"
                  >
                    Apply
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </MUIPopover>
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
      //   minHeight: theme.spacing(65),
      padding: theme.spacing(2),
    },
    content: {
      //   height: 480,
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
