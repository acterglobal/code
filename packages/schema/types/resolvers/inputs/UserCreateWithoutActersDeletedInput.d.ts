import { ActerConnectionCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerConnectionCreateNestedManyWithoutCreatedByUserInput";
import { ActerCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerCreateNestedManyWithoutCreatedByUserInput";
import { ActerCreateNestedOneWithoutUserInput } from "../inputs/ActerCreateNestedOneWithoutUserInput";
import { ActerInterestCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActerInterestCreateNestedManyWithoutCreatedByUserInput";
import { ActivityCreateNestedManyWithoutCreatedByUserInput } from "../inputs/ActivityCreateNestedManyWithoutCreatedByUserInput";
import { InviteCreateNestedManyWithoutCreatedByUserInput } from "../inputs/InviteCreateNestedManyWithoutCreatedByUserInput";
import { LinkCreateNestedManyWithoutCreatedByUserInput } from "../inputs/LinkCreateNestedManyWithoutCreatedByUserInput";
export declare class UserCreateWithoutActersDeletedInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    auth0ProviderId?: string | undefined;
    intercomId?: string | undefined;
    Acter?: ActerCreateNestedOneWithoutUserInput | undefined;
    ActersCreated?: ActerCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActerConnections?: ActerConnectionCreateNestedManyWithoutCreatedByUserInput | undefined;
    LinksCreated?: LinkCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActerInterest?: ActerInterestCreateNestedManyWithoutCreatedByUserInput | undefined;
    ActivitiesCreated?: ActivityCreateNestedManyWithoutCreatedByUserInput | undefined;
    Invite?: InviteCreateNestedManyWithoutCreatedByUserInput | undefined;
}
