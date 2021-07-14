import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
export declare class NestedStringWithAggregatesFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    contains?: string | undefined;
    startsWith?: string | undefined;
    endsWith?: string | undefined;
    not?: NestedStringWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedStringFilter | undefined;
    max?: NestedStringFilter | undefined;
}
