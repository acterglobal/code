import { InterestCreateNestedManyWithoutInterestTypeInput } from "../inputs/InterestCreateNestedManyWithoutInterestTypeInput";
import { InterestTypeCreateNestedManyWithoutParentInput } from "../inputs/InterestTypeCreateNestedManyWithoutParentInput";
import { InterestTypeCreateNestedOneWithoutChildrenInput } from "../inputs/InterestTypeCreateNestedOneWithoutChildrenInput";
export declare class InterestTypeCreateInput {
    id?: string | undefined;
    name: string;
    sortOrder?: number | undefined;
    parent?: InterestTypeCreateNestedOneWithoutChildrenInput | undefined;
    children?: InterestTypeCreateNestedManyWithoutParentInput | undefined;
    Interests?: InterestCreateNestedManyWithoutInterestTypeInput | undefined;
}
