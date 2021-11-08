import { NestedEnumActerJoinSettingsFilter } from "../inputs/NestedEnumActerJoinSettingsFilter";
export declare class EnumActerJoinSettingsFilter {
    equals?: "EVERYONE" | "RESTRICTED" | "INVITE_ONLY" | undefined;
    in?: Array<"EVERYONE" | "RESTRICTED" | "INVITE_ONLY"> | undefined;
    notIn?: Array<"EVERYONE" | "RESTRICTED" | "INVITE_ONLY"> | undefined;
    not?: NestedEnumActerJoinSettingsFilter | undefined;
}
