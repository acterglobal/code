import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Tabs, Tab, Box } from '@material-ui/core'
import { InterestTypes } from 'src/components/interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { interestTypeMap } from 'src/lib/interests/mapInterestTypes'
import { FormSetFieldValue, FormValues } from 'src/components/acter/form'
import { InterestType } from '@schema'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: 600,
    },
    tabs: {
      marginBottom: theme.spacing(1),
    },
    tab: {
      fontWeight: theme.typography.fontWeightBold,
    },
    interests: {
      overflowY: 'scroll',
    },
  })
)

export interface InterestsAddSectionProps {
  interestTypes: InterestType[]
  initialValues?: FormValues
  setFieldValue: FormSetFieldValue
}

export const InterestsAddSection: FC<InterestsAddSectionProps> = (props) => {
  const { interestTypes, initialValues = [], setFieldValue } = props
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState(initialValues)
  const [selectedTypes, setSelectedTypes] = useState([])

  const topLevelTypes = getTopLevelTypes(interestTypes)

  const getSelectedTypes = (): string[] => {
    const types = selectedInterests.map(
      (interestId) => interestTypeMap(interestTypes)[interestId]
    )
    return types
  }

  useEffect(() => {
    setSelectedTypes(getSelectedTypes())
  }, [])

  useEffect(() => {
    setFieldValue('interestIds', selectedInterests)
  }, [selectedInterests])

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
          <Tab className={classes.tab} label={type.name} key={type.id} />
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
                  divider={true}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </div>
  )
}
