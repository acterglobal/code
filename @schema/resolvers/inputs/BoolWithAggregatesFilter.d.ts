import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedBoolWithAggregatesFilter } from "../inputs/NestedBoolWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class BoolWithAggregatesFilter {
    equals?: boolean | undefined;
    not?: NestedBoolWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedBoolFilter | undefined;
    max?: NestedBoolFilter | undefined;
}
