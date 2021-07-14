import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedBoolWithAggregatesFilter {
    equals?: boolean | undefined;
    not?: NestedBoolWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedBoolFilter | undefined;
    max?: NestedBoolFilter | undefined;
}
