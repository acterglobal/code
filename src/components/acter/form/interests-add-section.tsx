import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Tabs, Tab, Grid, Box } from '@material-ui/core'
import { InterestTypes } from 'src/components/interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { FormikSetFieldType } from 'src/components/acter/form'

import { Interest, InterestType } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // width: 600,
  },
  tabs: {
    marginBottom: theme.spacing(1),
  },
  interests: {
    overflowY: 'scroll',
  },
}))

//  TODO: Add typing
export const InterestsAddSection = ({
  interestTypes,
  initialValues = [],
  setFieldValue,
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState(initialValues)
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
        className={classes.tabs}
      >
        {topLevelTypes.map((type) => (
          <Tab style={{ fontWeight: 'bold' }} label={type.name} key={type.id} />
        ))}
      </Tabs>

      <Box>
        {topLevelTypes.map((type, index) => (
          <Box
            className={classes.interests}
            role="tabpanel"
            hidden={value !== index}
            key={index}
          >
            {value === index && (
              <Box>
                <InterestTypes
                  type={type}
                  allTypes={interestTypes}
                  onSelectedInterestsChange={handleSelectedInterest}
                  selectedInterests={selectedInterests}
                  selectedTypes={selectedTypes}
                  columns={true}
                  devider={true}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </div>
  )
}

InterestsAddSection.label = 'Add Interests'
InterestsAddSection.initialValues = { interestIds: [] }
