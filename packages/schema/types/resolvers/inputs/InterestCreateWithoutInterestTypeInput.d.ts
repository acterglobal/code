import { ActerInterestCreateNestedManyWithoutInterestInput } from "../inputs/ActerInterestCreateNestedManyWithoutInterestInput";
export declare class InterestCreateWithoutInterestTypeInput {
    id?: string | undefined;
    name: string;
    description?: string | undefined;
    sdgNumber?: string | undefined;
    InterestActers?: ActerInterestCreateNestedManyWithoutInterestInput | undefined;
}
