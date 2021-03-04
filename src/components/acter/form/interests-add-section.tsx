import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Tabs, Tab, Grid, Box } from '@material-ui/core'
import { InterestTypes } from 'src/components/interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { FormikSetFieldType } from 'src/components/acter/form'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 450,
  },
  interests: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

//  TODO: Add typing
export const InterestsAddSection = ({ interestTypes, setFieldValue }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])

  useEffect(() => {
    setFieldValue('interestIds', selectedInterests)
  }, [selectedInterests])

  const topLevelTypes = getTopLevelTypes(interestTypes)

  const handleChange = (event: ChangeEvent<any>, newValue: number) => {
    setValue(newValue)
  }

  const handleSelectedInterest = (interest, type) => {
    const newSelectedTypes = [...selectedTypes]
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter(
          (selectedInterest) => selectedInterest !== interest
        )
      )
      const deleteIndex = newSelectedTypes.indexOf(
        newSelectedTypes.find((newtype) => newtype === type)
      )
      newSelectedTypes.splice(deleteIndex, 1)
      setSelectedTypes([...newSelectedTypes])
    } else {
      setSelectedInterests([...selectedInterests, interest])
      setSelectedTypes([...selectedTypes, type])
    }
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
        style={{ marginBottom: 15 }}
      >
        {topLevelTypes.map((type) => (
          <Tab label={type.name} key={type.id} />
        ))}
      </Tabs>

      <>
        {topLevelTypes.map((type, index) => (
          <Box role="tabpanel" hidden={value !== index} key={index}>
            {value === index && (
              <Grid container spacing={3} className={classes.interests}>
                <InterestTypes
                  type={type}
                  allTypes={interestTypes}
                  onSelectedInterestsChange={handleSelectedInterest}
                  selectedInterests={selectedInterests}
                  selectedTypes={selectedTypes}
                />
              </Grid>
            )}
          </Box>
        ))}
      </>
    </div>
  )
}

InterestsAddSection.label = 'Add Interests'
InterestsAddSection.initialValues = { interestIds: [] }
