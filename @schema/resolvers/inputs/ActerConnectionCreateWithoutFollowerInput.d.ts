import { ActerCreateNestedOneWithoutFollowersInput } from "../inputs/ActerCreateNestedOneWithoutFollowersInput";
import { UserCreateNestedOneWithoutActerConnectionsInput } from "../inputs/UserCreateNestedOneWithoutActerConnectionsInput";
export declare class ActerConnectionCreateWithoutFollowerInput {
    id?: string | undefined;
    isApproved?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    CreatedByUser: UserCreateNestedOneWithoutActerConnectionsInput;
    Following: ActerCreateNestedOneWithoutFollowersInput;
}
