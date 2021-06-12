/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { prepareActivityValues } from 'src/lib/acter/prepare-activity-values'
import { Acter, ActerType, Activity } from '@schema'
import { ACTIVITY } from 'src/constants'
import { updateActerWithPictures } from 'src/lib/acter/update-acter-with-pictures'

type MutationFn = (data: any) => Promise<any>

interface GetCreateFunctionProps {
  /**
   * Type of the Acter to create
   */
  acterType: ActerType
  /**
   * Function to create an Activity
   */
  createActivity: MutationFn
  /**
   * Function to create an Acter
   */
  createActer: MutationFn
  /**
   * Function to update an Acter
   */
  updateActer: MutationFn
}

/**
 * Creates a function which will create the Acter/Activity and upload avatar and banner images
 * @acterType Type of acter to create
 * @createActivity Function to create an Activity
 * @createActer Function to create an Acter
 * @updateActer Function to update an Acter
 * @returns function which takes form data
 */
export const getCreateFunction = ({
  acterType,
  createActivity,
  createActer,
  updateActer,
}: GetCreateFunctionProps) => async (
  data: Partial<Activity> | Partial<Acter>
): Promise<Acter> => {
  const acterCreate = await _acterCreate({
    acterType,
    createActivity,
    createActer,
    data,
  })

  // Add form data so we can upload/save pictures
  const acter = {
    ...data,
    ...acterCreate,
  }

  // Now update it so we get the avatar and banner URLs
  return await updateActerWithPictures({ acter, updateActer })
}

type InternalCreateActerProps = Omit<GetCreateFunctionProps, 'updateActer'> & {
  data: Partial<Acter>
}

const _acterCreate = async ({
  acterType,
  createActivity,
  createActer,
  data,
}: InternalCreateActerProps): Promise<Acter> => {
  // Make sure ActerType ID is set
  const variables = {
    followerIds: [],
    ...data,
    acterTypeId: acterType.id,
  }
  switch (acterType.name) {
    case ACTIVITY: {
      const res = await createActivity({
        variables: prepareActivityValues(variables),
      })
      return res.data.createActivity.Acter
    }
    default: {
      const res = await createActer({ variables })
      return res.data.createActer
    }
  }
}
