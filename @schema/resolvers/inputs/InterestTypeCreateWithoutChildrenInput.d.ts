import { InterestCreateNestedManyWithoutInterestTypeInput } from "../inputs/InterestCreateNestedManyWithoutInterestTypeInput";
import { InterestTypeCreateNestedOneWithoutChildrenInput } from "../inputs/InterestTypeCreateNestedOneWithoutChildrenInput";
export declare class InterestTypeCreateWithoutChildrenInput {
    id?: string | undefined;
    name: string;
    sortOrder?: number | undefined;
    parent?: InterestTypeCreateNestedOneWithoutChildrenInput | undefined;
    Interests?: InterestCreateNestedManyWithoutInterestTypeInput | undefined;
}
