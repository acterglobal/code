import { ActerCreateNestedOneWithoutFollowingInput } from "../inputs/ActerCreateNestedOneWithoutFollowingInput";
import { UserCreateNestedOneWithoutActerConnectionsInput } from "../inputs/UserCreateNestedOneWithoutActerConnectionsInput";
export declare class ActerConnectionCreateWithoutFollowingInput {
    id?: string | undefined;
    isApproved?: boolean | undefined;
    role?: "PENDING" | "MEMBER" | "ADMIN" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    CreatedByUser: UserCreateNestedOneWithoutActerConnectionsInput;
    Follower: ActerCreateNestedOneWithoutFollowingInput;
}
