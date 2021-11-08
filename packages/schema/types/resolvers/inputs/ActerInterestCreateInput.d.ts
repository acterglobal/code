import { ActerCreateNestedOneWithoutActerInterestsInput } from "../inputs/ActerCreateNestedOneWithoutActerInterestsInput";
import { InterestCreateNestedOneWithoutInterestActersInput } from "../inputs/InterestCreateNestedOneWithoutInterestActersInput";
import { UserCreateNestedOneWithoutActerInterestInput } from "../inputs/UserCreateNestedOneWithoutActerInterestInput";
export declare class ActerInterestCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    CreatedByUser: UserCreateNestedOneWithoutActerInterestInput;
    Acter: ActerCreateNestedOneWithoutActerInterestsInput;
    Interest: InterestCreateNestedOneWithoutInterestActersInput;
}
