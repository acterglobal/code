import { NestedEnumActerConnectionRoleFilter } from "../inputs/NestedEnumActerConnectionRoleFilter";
export declare class EnumActerConnectionRoleFilter {
    equals?: "PENDING" | "MEMBER" | "ADMIN" | undefined;
    in?: Array<"PENDING" | "MEMBER" | "ADMIN"> | undefined;
    notIn?: Array<"PENDING" | "MEMBER" | "ADMIN"> | undefined;
    not?: NestedEnumActerConnectionRoleFilter | undefined;
}
