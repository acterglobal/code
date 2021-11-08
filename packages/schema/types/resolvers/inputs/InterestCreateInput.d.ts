import { ActerInterestCreateNestedManyWithoutInterestInput } from "../inputs/ActerInterestCreateNestedManyWithoutInterestInput";
import { InterestTypeCreateNestedOneWithoutInterestsInput } from "../inputs/InterestTypeCreateNestedOneWithoutInterestsInput";
export declare class InterestCreateInput {
    id?: string | undefined;
    name: string;
    description?: string | undefined;
    sdgNumber?: string | undefined;
    InterestType: InterestTypeCreateNestedOneWithoutInterestsInput;
    InterestActers?: ActerInterestCreateNestedManyWithoutInterestInput | undefined;
}
