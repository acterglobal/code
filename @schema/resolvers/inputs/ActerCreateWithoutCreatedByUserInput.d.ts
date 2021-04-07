import { ActerConnectionCreateNestedManyWithoutFollowerInput } from "../inputs/ActerConnectionCreateNestedManyWithoutFollowerInput";
import { ActerConnectionCreateNestedManyWithoutFollowingInput } from "../inputs/ActerConnectionCreateNestedManyWithoutFollowingInput";
import { ActerCreateNestedManyWithoutParentInput } from "../inputs/ActerCreateNestedManyWithoutParentInput";
import { ActerCreateNestedOneWithoutChildrenInput } from "../inputs/ActerCreateNestedOneWithoutChildrenInput";
import { ActerInterestCreateNestedManyWithoutActerInput } from "../inputs/ActerInterestCreateNestedManyWithoutActerInput";
import { ActerTypeCreateNestedOneWithoutActerInput } from "../inputs/ActerTypeCreateNestedOneWithoutActerInput";
import { ActivityCreateNestedManyWithoutOrganiserInput } from "../inputs/ActivityCreateNestedManyWithoutOrganiserInput";
import { ActivityCreateNestedOneWithoutActerInput } from "../inputs/ActivityCreateNestedOneWithoutActerInput";
import { UserCreateNestedOneWithoutActerInput } from "../inputs/UserCreateNestedOneWithoutActerInput";
import { UserCreateNestedOneWithoutActersDeletedInput } from "../inputs/UserCreateNestedOneWithoutActersDeletedInput";
export declare class ActerCreateWithoutCreatedByUserInput {
    id?: string | undefined;
    name?: string | undefined;
    slug?: string | undefined;
    description?: string | undefined;
    location?: string | undefined;
    locationLat?: number | undefined;
    locationLng?: number | undefined;
    url?: string | undefined;
    avatarUrl?: string | undefined;
    bannerUrl?: string | undefined;
    autoApproveFollowers?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    deletedAt?: Date | undefined;
    DeletedByUser?: UserCreateNestedOneWithoutActersDeletedInput | undefined;
    ActerType: ActerTypeCreateNestedOneWithoutActerInput;
    Parent?: ActerCreateNestedOneWithoutChildrenInput | undefined;
    Children?: ActerCreateNestedManyWithoutParentInput | undefined;
    Following?: ActerConnectionCreateNestedManyWithoutFollowerInput | undefined;
    Followers?: ActerConnectionCreateNestedManyWithoutFollowingInput | undefined;
    User?: UserCreateNestedOneWithoutActerInput | undefined;
    ActerInterests?: ActerInterestCreateNestedManyWithoutActerInput | undefined;
    Activity?: ActivityCreateNestedOneWithoutActerInput | undefined;
    ActivitiesOrganized?: ActivityCreateNestedManyWithoutOrganiserInput | undefined;
}
