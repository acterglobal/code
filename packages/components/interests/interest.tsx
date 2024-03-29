import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles'

import clsx from 'clsx'

import { Image } from '@acter/components/util/image'
import { Tooltip } from '@acter/components/util/tool-tip'
import { Size, InterestTypes as InterestTypeName } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Interest as InterestType } from '@acter/schema'

const { TAGS } = InterestTypeName
export interface InterestProps {
  interest: InterestType
  type: InterestTypeName
  selected?: boolean
  disabled?: boolean
  chipSize?: Size
  onSelectedInterestsChange?: (interest: string, type: string) => void
}

export const Interest: FC<InterestProps> = ({
  interest,
  type,
  selected = true,
  disabled = false,
  chipSize,
  onSelectedInterestsChange,
}) => {
  const classes = useStyles({ type, size: chipSize })

  if (!interest) {
    return null
  }

  const handleClick = () => {
    if (disabled && !selected) return null
    else onSelectedInterestsChange(interest.id, type)
  }

  return (
    <Box
      className={clsx(
        classes.chip,
        selected
          ? classes.selected
          : disabled
          ? classes.disable
          : classes.outline
      )}
      onClick={handleClick}
      role="listitem"
    >
      <InterestName interest={interest} type={type} chipSize={chipSize} />

      {interest.sdgNumber && (
        <Box className={clsx(classes.rightSideBox)}>
          <Image
            src={getImageUrl(undefined, 'SDG')}
            alt="SDG"
            width={10}
            height={10}
          />
          <Typography className={classes.number} variant="caption">
            {interest.sdgNumber}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

const InterestName: FC<InterestProps> = ({ interest, type, chipSize }) => {
  const classes = useStyles({ type, size: chipSize })
  const theme = useTheme()
  const { t } = useTranslation('interests')
  const interestName = t(interest.name)

  return (
    <>
      {chipSize === Size.SMALL && interestName.length > 12 ? (
        <Tooltip
          title={interestName}
          backgroundColor={theme.palette.secondary.main}
          color={theme.colors.white}
        >
          <Typography className={classes.name} variant="caption" noWrap>
            {type === TAGS ? `# ${interestName}` : interestName}
          </Typography>
        </Tooltip>
      ) : (
        <Typography className={classes.name} variant="caption">
          {type === TAGS ? `# ${interestName}` : interestName}
        </Typography>
      )}
    </>
  )
}

type StyleProps = {
  type: InterestTypeName
  size: Size
}
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    chip: ({ size, type }: StyleProps) => ({
      margin: theme.spacing(0.2),
      width: theme.spacing(size === Size.SMALL ? 14 : 23),
      height: theme.spacing(size === Size.SMALL ? 2.3 : 3),
      border: type === TAGS ? 'none' : '1px solid',
      borderRadius: theme.spacing(3),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    }),
    // TODO: refactor to use InterestType-specific classes
    outline: ({ type }: StyleProps) => ({
      borderColor: theme.colors.interestTypes[type],
      color: theme.colors.interestTypes[type],
    }),
    selected: ({ type }: StyleProps) => ({
      border: type === TAGS ? '1px solid' : 'none',
      borderColor: type === TAGS && theme.colors.interestTypes[type],
      backgroundColor: type !== TAGS ? theme.colors.interestTypes[type] : '',
      color: type === TAGS ? theme.colors.interestTypes[type] : 'white',
    }),
    disable: {
      color: theme.colors.grey.main,
      borderColor: theme.colors.grey.main,
      cursor: 'default',
    },
    name: ({ size }: StyleProps) => ({
      marginLeft: theme.spacing(1),
      fontSize: size === Size.SMALL ? '0.7' : '1',
    }),
    rightSideBox: {
      display: 'flex',
      alignItems: 'center',
    },
    number: ({ size }: StyleProps) => ({
      marginLeft: theme.spacing(size === Size.SMALL ? 0.5 : 1),
      marginRight: theme.spacing(size === Size.SMALL ? 0.7 : 1),
      fontSize: size === Size.SMALL ? '0.55rem' : '0.7rem',
    }),
  })
})
