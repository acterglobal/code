import { InterestTypeCreateNestedManyWithoutParentInput } from "../inputs/InterestTypeCreateNestedManyWithoutParentInput";
import { InterestTypeCreateNestedOneWithoutChildrenInput } from "../inputs/InterestTypeCreateNestedOneWithoutChildrenInput";
export declare class InterestTypeCreateWithoutInterestsInput {
    id?: string | undefined;
    name: string;
    sortOrder?: number | undefined;
    parent?: InterestTypeCreateNestedOneWithoutChildrenInput | undefined;
    children?: InterestTypeCreateNestedManyWithoutParentInput | undefined;
}
