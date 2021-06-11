import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Tabs, Tab, Box } from '@material-ui/core'
import { InterestTypes } from 'src/components/interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { getSelectedTypes } from 'src/lib/interests/get-selected-types'
import { InterestType } from '@schema'

export interface InterestsPickerProps {
  interestTypes: InterestType[]
  setSelectedInterests: (interestIds: string[]) => void
  showDivider?: boolean
  selectedInterests?: string[]
}

export const InterestsPicker: FC<InterestsPickerProps> = (props) => {
  const {
    interestTypes,
    selectedInterests = [],
    setSelectedInterests,
    showDivider = true,
  } = props
  const classes = useStyles()
  const [currentTab, setCurrentTab] = useState(0)

  const topLevelTypes = getTopLevelTypes(interestTypes)

  const [selectedTypes, setSelectedTypes] = useState([])

  useEffect(() => {
    setSelectedTypes(getSelectedTypes(selectedInterests, interestTypes))
  }, [selectedInterests])

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleChange = (event: ChangeEvent<any>, tab: number) => {
    setCurrentTab(tab)
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
        value={currentTab}
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
            hidden={currentTab !== index}
            key={index}
          >
            {currentTab === index && (
              <Box>
                <InterestTypes
                  type={type}
                  allTypes={interestTypes}
                  onSelectedInterestsChange={handleSelectedInterest}
                  selectedInterests={selectedInterests}
                  selectedTypes={selectedTypes}
                  columns={true}
                  divider={showDivider}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
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
