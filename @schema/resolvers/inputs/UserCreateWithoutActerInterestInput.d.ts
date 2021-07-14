import { ActerConnectionCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateNestedManyWithoutCreatedByUserInput";
import { ActerCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerCreateNestedManyWithoutCreatedByUserInput";
import { ActerCreateNestedManyWithoutDeletedByUserInput } from "../inputs/ActerCreateNestedManyWithoutDeletedByUserInput";
import { ActerCreateNestedOneWithoutUserInput } from "../inputs/ActerCreateNestedOneWithoutUserInput";
import { ActivityCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActivityCreateNestedManyWithoutCreatedByUserInput";
import { LinkCreateNestedManyWithoutCreatedByUserInput } from "../inputs/LinkCreateNestedManyWithoutCreatedByUserInput";
export declare class UserCreateWithoutActerInterestInput {
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
    ActivitiesCreated?: ActivityCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActersDeleted?: ActerCreateNestedManyWithoutDeletedByUserInput | undefined;
}
