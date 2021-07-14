import { ActerConnectionCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateNestedManyWithoutCreatedByUserInput";
import { ActerCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerCreateNestedManyWithoutCreatedByUserInput";
import { ActerCreateNestedManyWithoutDeletedByUserInput } from "../inputs/ActerCreateNestedManyWithoutDeletedByUserInput";
import { ActerCreateNestedOneWithoutUserInput } from "../inputs/ActerCreateNestedOneWithoutUserInput";
import { ActerInterestCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerInterestCreateNestedManyWithoutCreatedByUserInput";
import { ActivityCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActivityCreateNestedManyWithoutCreatedByUserInput";
import { LinkCreateNestedManyWithoutCreatedByUserInput } from "../inputs/LinkCreateNestedManyWithoutCreatedByUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Acter?: ActerCreateNestedOneWithoutUserInput | undefined;
    ActersCreated?: ActerCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActerConnections?: ActerConnectionCreateNestedManyWithoutCreatedByUserInput | undefined;
    LinksCreated?: LinkCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActerInterest?: ActerInterestCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActivitiesCreated?: ActivityCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActersDeleted?: ActerCreateNestedManyWithoutDeletedByUserInput | undefined;
}
