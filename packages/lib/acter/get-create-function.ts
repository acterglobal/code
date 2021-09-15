/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { prepareActivityValues } from '@acter/lib/acter/prepare-activity-values'
import { ActerTypes } from '@acter/lib/constants'
import { Acter, ActerType, Activity } from '@acter/schema'

const { ACTIVITY } = ActerTypes

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
  return await updateActer(acter)
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
      return res.data.createActivityCustom.Acter
    }
    default: {
      const res = await createActer({ variables })
      return res.data.createActerCustom
    }
  }
}
