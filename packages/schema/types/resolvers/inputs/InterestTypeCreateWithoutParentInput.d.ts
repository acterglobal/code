import { InterestCreateNestedManyWithoutInterestTypeInput } from "../inputs/InterestCreateNestedManyWithoutInterestTypeInput";
import { InterestTypeCreateNestedManyWithoutParentInput } from "../inputs/InterestTypeCreateNestedManyWithoutParentInput";
export declare class InterestTypeCreateWithoutParentInput {
    id?: string | undefined;
    name: string;
    sortOrder?: number | undefined;
    children?: InterestTypeCreateNestedManyWithoutParentInput | undefined;
    Interests?: InterestCreateNestedManyWithoutInterestTypeInput | undefined;
}
