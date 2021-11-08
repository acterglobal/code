import { NestedEnumActerJoinSettingsFilter } from "../inputs/NestedEnumActerJoinSettingsFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumActerJoinSettingsWithAggregatesFilter {
    equals?: "EVERYONE" | "RESTRICTED" | "INVITE_ONLY" | undefined;
    in?: Array<"EVERYONE" | "RESTRICTED" | "INVITE_ONLY"> | undefined;
    notIn?: Array<"EVERYONE" | "RESTRICTED" | "INVITE_ONLY"> | undefined;
    not?: NestedEnumActerJoinSettingsWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumActerJoinSettingsFilter | undefined;
    _max?: NestedEnumActerJoinSettingsFilter | undefined;
}
