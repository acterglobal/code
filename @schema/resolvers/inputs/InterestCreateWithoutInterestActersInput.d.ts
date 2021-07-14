import { InterestTypeCreateNestedOneWithoutInterestsInput } from "../inputs/InterestTypeCreateNestedOneWithoutInterestsInput";
export declare class InterestCreateWithoutInterestActersInput {
    id?: string | undefined;
    name: string;
    description?: string | undefined;
    sdgNumber?: string | undefined;
    InterestType: InterestTypeCreateNestedOneWithoutInterestsInput;
}
