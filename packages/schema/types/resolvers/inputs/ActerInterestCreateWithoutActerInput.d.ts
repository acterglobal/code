import { InterestCreateNestedOneWithoutInterestActersInput } from "../inputs/InterestCreateNestedOneWithoutInterestActersInput";
import { UserCreateNestedOneWithoutActerInterestInput } from "../inputs/UserCreateNestedOneWithoutActerInterestInput";
export declare class ActerInterestCreateWithoutActerInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    CreatedByUser: UserCreateNestedOneWithoutActerInterestInput;
    Interest: InterestCreateNestedOneWithoutInterestActersInput;
}
