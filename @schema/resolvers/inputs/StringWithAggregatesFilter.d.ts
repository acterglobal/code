import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
import { NestedStringWithAggregatesFilter } from "../inputs/NestedStringWithAggregatesFilter";
export declare class StringWithAggregatesFilter {
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
    mode?: "default" | "insensitive" | undefined;
    not?: NestedStringWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedStringFilter | undefined;
    max?: NestedStringFilter | undefined;
}
