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
    _count?: NestedIntNullableFilter | undefined;
    _avg?: NestedFloatNullableFilter | undefined;
    _sum?: NestedFloatNullableFilter | undefined;
    _min?: NestedFloatNullableFilter | undefined;
    _max?: NestedFloatNullableFilter | undefined;
}
