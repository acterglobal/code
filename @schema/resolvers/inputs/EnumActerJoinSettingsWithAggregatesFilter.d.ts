import { NestedEnumActerJoinSettingsFilter } from "../inputs/NestedEnumActerJoinSettingsFilter";
import { NestedEnumActerJoinSettingsWithAggregatesFilter } from "../inputs/NestedEnumActerJoinSettingsWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumActerJoinSettingsWithAggregatesFilter {
    equals?: "EVERYONE" | "RESTRICTED" | "INVITE_ONLY" | undefined;
    in?: Array<"EVERYONE" | "RESTRICTED" | "INVITE_ONLY"> | undefined;
    notIn?: Array<"EVERYONE" | "RESTRICTED" | "INVITE_ONLY"> | undefined;
    not?: NestedEnumActerJoinSettingsWithAggregatesFilter | undefined;
    count?: NestedIntFilter | undefined;
    min?: NestedEnumActerJoinSettingsFilter | undefined;
    max?: NestedEnumActerJoinSettingsFilter | undefined;
}
