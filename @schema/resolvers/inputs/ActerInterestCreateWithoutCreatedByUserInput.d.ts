import { ActerCreateNestedOneWithoutActerInterestsInput } from "../inputs/ActerCreateNestedOneWithoutActerInterestsInput";
import { InterestCreateNestedOneWithoutInterestActersInput } from "../inputs/InterestCreateNestedOneWithoutInterestActersInput";
export declare class ActerInterestCreateWithoutCreatedByUserInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Acter: ActerCreateNestedOneWithoutActerInterestsInput;
    Interest: InterestCreateNestedOneWithoutInterestActersInput;
}
