import { ActerCreateNestedOneWithoutFollowersInput } from "../inputs/ActerCreateNestedOneWithoutFollowersInput";
import { ActerCreateNestedOneWithoutFollowingInput } from "../inputs/ActerCreateNestedOneWithoutFollowingInput";
import { UserCreateNestedOneWithoutActerConnectionsInput } from "../inputs/UserCreateNestedOneWithoutActerConnectionsInput";
export declare class ActerConnectionCreateInput {
    id?: string | undefined;
    isApproved?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    CreatedByUser: UserCreateNestedOneWithoutActerConnectionsInput;
    Follower: ActerCreateNestedOneWithoutFollowingInput;
    Following: ActerCreateNestedOneWithoutFollowersInput;
}
