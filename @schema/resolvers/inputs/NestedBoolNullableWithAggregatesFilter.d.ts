import { NestedBoolNullableFilter } from "../inputs/NestedBoolNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedBoolNullableWithAggregatesFilter {
    equals?: boolean | undefined;
    not?: NestedBoolNullableWithAggregatesFilter | undefined;
    count?: NestedIntNullableFilter | undefined;
    min?: NestedBoolNullableFilter | undefined;
    max?: NestedBoolNullableFilter | undefined;
}
