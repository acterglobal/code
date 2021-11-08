import { NestedEnumActerNotificationSettingsFilter } from "../inputs/NestedEnumActerNotificationSettingsFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumActerNotificationSettingsWithAggregatesFilter {
    equals?: "ALL_ACTIVITY" | "NONE" | undefined;
    in?: Array<"ALL_ACTIVITY" | "NONE"> | undefined;
    notIn?: Array<"ALL_ACTIVITY" | "NONE"> | undefined;
    not?: NestedEnumActerNotificationSettingsWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumActerNotificationSettingsFilter | undefined;
    _max?: NestedEnumActerNotificationSettingsFilter | undefined;
}
