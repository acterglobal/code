import { NestedEnumActerConnectionRoleFilter } from "../inputs/NestedEnumActerConnectionRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumActerConnectionRoleWithAggregatesFilter {
    equals?: "PENDING" | "MEMBER" | "ADMIN" | undefined;
    in?: Array<"PENDING" | "MEMBER" | "ADMIN"> | undefined;
    notIn?: Array<"PENDING" | "MEMBER" | "ADMIN"> | undefined;
    not?: NestedEnumActerConnectionRoleWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumActerConnectionRoleFilter | undefined;
    _max?: NestedEnumActerConnectionRoleFilter | undefined;
}
