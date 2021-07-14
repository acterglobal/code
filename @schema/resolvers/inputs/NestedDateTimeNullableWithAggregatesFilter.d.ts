import { NestedDateTimeNullableFilter } from "../inputs/NestedDateTimeNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedDateTimeNullableWithAggregatesFilter {
    equals?: Date | undefined;
    in?: Date[] | undefined;
    notIn?: Date[] | undefined;
    lt?: Date | undefined;
    lte?: Date | undefined;
    gt?: Date | undefined;
    gte?: Date | undefined;
    not?: NestedDateTimeNullableWithAggregatesFilter | undefined;
    count?: NestedIntNullableFilter | undefined;
    min?: NestedDateTimeNullableFilter | undefined;
    max?: NestedDateTimeNullableFilter | undefined;
}
