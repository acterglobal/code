import { ActerCreateNestedOneWithoutActerInterestsInput } from "../inputs/ActerCreateNestedOneWithoutActerInterestsInput";
import { UserCreateNestedOneWithoutActerInterestInput } from "../inputs/UserCreateNestedOneWithoutActerInterestInput";
export declare class ActerInterestCreateWithoutInterestInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    CreatedByUser: UserCreateNestedOneWithoutActerInterestInput;
    Acter: ActerCreateNestedOneWithoutActerInterestsInput;
}
