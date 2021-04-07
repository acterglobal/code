import { ActerCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerCreateNestedManyWithoutCreatedByUserInput";
import { ActerCreateNestedManyWithoutDeletedByUserInput } from "../inputs/ActerCreateNestedManyWithoutDeletedByUserInput";
import { ActerCreateNestedOneWithoutUserInput } from "../inputs/ActerCreateNestedOneWithoutUserInput";
import { ActerInterestCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerInterestCreateNestedManyWithoutCreatedByUserInput";
import { ActivityCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActivityCreateNestedManyWithoutCreatedByUserInput";
export declare class UserCreateWithoutActerConnectionsInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Acter?: ActerCreateNestedOneWithoutUserInput | undefined;
    ActersCreated?: ActerCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActerInterest?: ActerInterestCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActivitiesCreated?: ActivityCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActersDeleted?: ActerCreateNestedManyWithoutDeletedByUserInput | undefined;
}
