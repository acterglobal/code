import { NestedEnumActerNotificationSettingsFilter } from "../inputs/NestedEnumActerNotificationSettingsFilter";
export declare class EnumActerNotificationSettingsFilter {
    equals?: "ALL_ACTIVITY" | "NONE" | undefined;
    in?: Array<"ALL_ACTIVITY" | "NONE"> | undefined;
    notIn?: Array<"ALL_ACTIVITY" | "NONE"> | undefined;
    not?: NestedEnumActerNotificationSettingsFilter | undefined;
}
