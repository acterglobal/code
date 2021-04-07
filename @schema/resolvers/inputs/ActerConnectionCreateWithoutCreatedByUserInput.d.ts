import { ActerCreateNestedOneWithoutFollowersInput } from "../inputs/ActerCreateNestedOneWithoutFollowersInput";
import { ActerCreateNestedOneWithoutFollowingInput } from "../inputs/ActerCreateNestedOneWithoutFollowingInput";
export declare class ActerConnectionCreateWithoutCreatedByUserInput {
    id?: string | undefined;
    isApproved?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Follower: ActerCreateNestedOneWithoutFollowingInput;
    Following: ActerCreateNestedOneWithoutFollowersInput;
}
