import React, { useState, ChangeEvent } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Tabs, Tab, Grid, Box } from '@material-ui/core'
import { Interests } from 'src/__fixtures__/interest/interests'
import { InterestTypes } from 'src/components/interests/interest-types'
// import { InterestTypes } from ' ../interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: 'gray',
    width: 500,
  },
}))

export const InterestsAddSection = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState([])

  const topLevelTypes = getTopLevelTypes()

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
    // console.log('VALUE :', newValue)
  }

  const handleSelectedInterest = (interest) => {
    if (
      selectedInterests.some(
        (selectedInterest) => selectedInterest.id === interest.id
      )
    ) {
      setSelectedInterests(
        selectedInterests.filter(
          (selectedInterest) => selectedInterest.id !== interest.id
        )
      )
    } else {
      setSelectedInterests([...selectedInterests, interest])
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
              <Grid container spacing={3} style={{ margin: 'auto' }}>
                <InterestTypes
                  type={type}
                  allTypes={Interests.data.interestTypes}
                  onSelectedInterestsChange={handleSelectedInterest}
                  selectedInterests={selectedInterests}
                />
              </Grid>
            )}
          </Box>
        ))}
      </>
    </div>
  )
}
