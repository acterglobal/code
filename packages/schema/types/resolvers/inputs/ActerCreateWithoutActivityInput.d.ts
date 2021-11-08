import { ActerConnectionCreateNestedManyWithoutFollowerInput } from "../inputs/ActerConnectionCreateNestedManyWithoutFollowerInput";
import { ActerConnectionCreateNestedManyWithoutFollowingInput } from "../inputs/ActerConnectionCreateNestedManyWithoutFollowingInput";
import { ActerCreateNestedManyWithoutParentInput } from "../inputs/ActerCreateNestedManyWithoutParentInput";
import { ActerCreateNestedOneWithoutChildrenInput } from "../inputs/ActerCreateNestedOneWithoutChildrenInput";
import { ActerInterestCreateNestedManyWithoutActerInput } from "../inputs/ActerInterestCreateNestedManyWithoutActerInput";
import { ActerTypeCreateNestedOneWithoutActerInput } from "../inputs/ActerTypeCreateNestedOneWithoutActerInput";
import { ActivityCreateNestedManyWithoutOrganiserInput } from "../inputs/ActivityCreateNestedManyWithoutOrganiserInput";
import { InviteCreateNestedManyWithoutOnActerInput } from "../inputs/InviteCreateNestedManyWithoutOnActerInput";
import { LinkCreateNestedManyWithoutActerInput } from "../inputs/LinkCreateNestedManyWithoutActerInput";
import { NotificationCreateNestedManyWithoutOnActerInput } from "../inputs/NotificationCreateNestedManyWithoutOnActerInput";
import { NotificationCreateNestedManyWithoutToActerInput } from "../inputs/NotificationCreateNestedManyWithoutToActerInput";
import { PostCreateNestedManyWithoutActerInput } from "../inputs/PostCreateNestedManyWithoutActerInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { UserCreateNestedOneWithoutActerInput } from "../inputs/UserCreateNestedOneWithoutActerInput";
import { UserCreateNestedOneWithoutActersCreatedInput } from "../inputs/UserCreateNestedOneWithoutActersCreatedInput";
import { UserCreateNestedOneWithoutActersDeletedInput } from "../inputs/UserCreateNestedOneWithoutActersDeletedInput";
export declare class ActerCreateWithoutActivityInput {
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
    useAdmins?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    acterJoinSetting?: "EVERYONE" | "RESTRICTED" | "INVITE_ONLY" | undefined;
    acterNotifySetting?: "ALL_ACTIVITY" | "NONE" | undefined;
    acterNotifyEmailFrequency?: "NEVER" | "DAILY" | "INSTANT" | undefined;
    acterPrivacySetting?: "PUBLIC" | "PRIVATE" | undefined;
    deletedAt?: Date | undefined;
    ActerInterests?: ActerInterestCreateNestedManyWithoutActerInput | undefined;
    createdByUser: UserCreateNestedOneWithoutActersCreatedInput;
    DeletedByUser?: UserCreateNestedOneWithoutActersDeletedInput | undefined;
    ActerType: ActerTypeCreateNestedOneWithoutActerInput;
    Parent?: ActerCreateNestedOneWithoutChildrenInput | undefined;
    Children?: ActerCreateNestedManyWithoutParentInput | undefined;
    Following?: ActerConnectionCreateNestedManyWithoutFollowerInput | undefined;
    Followers?: ActerConnectionCreateNestedManyWithoutFollowingInput | undefined;
    User?: UserCreateNestedOneWithoutActerInput | undefined;
    ActivitiesOrganized?: ActivityCreateNestedManyWithoutOrganiserInput | undefined;
    AttachedPosts?: PostCreateNestedManyWithoutActerInput | undefined;
    AuthoredPosts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    AttachedLinks?: LinkCreateNestedManyWithoutActerInput | undefined;
    NotificationsTo?: NotificationCreateNestedManyWithoutOnActerInput | undefined;
    NotificationsOn?: NotificationCreateNestedManyWithoutToActerInput | undefined;
    Invite?: InviteCreateNestedManyWithoutOnActerInput | undefined;
}
