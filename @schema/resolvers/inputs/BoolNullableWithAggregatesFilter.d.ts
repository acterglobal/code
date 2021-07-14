import { NestedBoolNullableFilter } from "../inputs/NestedBoolNullableFilter";
import { NestedBoolNullableWithAggregatesFilter } from "../inputs/NestedBoolNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class BoolNullableWithAggregatesFilter {
    equals?: boolean | undefined;
    not?: NestedBoolNullableWithAggregatesFilter | undefined;
    count?: NestedIntNullableFilter | undefined;
    min?: NestedBoolNullableFilter | undefined;
    max?: NestedBoolNullableFilter | undefined;
}
