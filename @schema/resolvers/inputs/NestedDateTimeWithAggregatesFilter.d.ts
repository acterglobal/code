import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | undefined;
    in?: Date[] | undefined;
    notIn?: Date[] | undefined;
    lt?: Date | undefined;
    lte?: Date | undefined;
    gt?: Date | undefined;
    gte?: Date | undefined;
    not?: NestedDateTimeWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedDateTimeFilter | undefined;
    max?: NestedDateTimeFilter | undefined;
}
