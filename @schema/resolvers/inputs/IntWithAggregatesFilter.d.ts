import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedIntWithAggregatesFilter } from "../inputs/NestedIntWithAggregatesFilter";
export declare class IntWithAggregatesFilter {
    equals?: number | undefined;
    in?: number[] | undefined;
    notIn?: number[] | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    not?: NestedIntWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    avg?: NestedFloatFilter | undefined;
    sum?: NestedIntFilter | undefined;
    min?: NestedIntFilter | undefined;
    max?: NestedIntFilter | undefined;
}
