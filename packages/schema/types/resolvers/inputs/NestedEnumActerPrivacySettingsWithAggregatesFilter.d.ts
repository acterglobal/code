import { NestedEnumActerPrivacySettingsFilter } from "../inputs/NestedEnumActerPrivacySettingsFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumActerPrivacySettingsWithAggregatesFilter {
    equals?: "PUBLIC" | "PRIVATE" | undefined;
    in?: Array<"PUBLIC" | "PRIVATE"> | undefined;
    notIn?: Array<"PUBLIC" | "PRIVATE"> | undefined;
    not?: NestedEnumActerPrivacySettingsWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumActerPrivacySettingsFilter | undefined;
    _max?: NestedEnumActerPrivacySettingsFilter | undefined;
}
