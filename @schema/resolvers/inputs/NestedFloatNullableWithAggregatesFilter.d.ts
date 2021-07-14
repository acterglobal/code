import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedFloatNullableWithAggregatesFilter {
    equals?: number | undefined;
    in?: number[] | undefined;
    notIn?: number[] | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    not?: NestedFloatNullableWithAggregatesFilter | undefined;
    count?: NestedIntNullableFilter | undefined;
    avg?: NestedFloatNullableFilter | undefined;
    sum?: NestedFloatNullableFilter | undefined;
    min?: NestedFloatNullableFilter | undefined;
    max?: NestedFloatNullableFilter | undefined;
}
