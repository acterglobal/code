import { NestedEnumActerNotificationEmailFrequencyFilter } from "../inputs/NestedEnumActerNotificationEmailFrequencyFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumActerNotificationEmailFrequencyWithAggregatesFilter {
    equals?: "NEVER" | "DAILY" | "INSTANT" | undefined;
    in?: Array<"NEVER" | "DAILY" | "INSTANT"> | undefined;
    notIn?: Array<"NEVER" | "DAILY" | "INSTANT"> | undefined;
    not?: NestedEnumActerNotificationEmailFrequencyWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumActerNotificationEmailFrequencyFilter | undefined;
    _max?: NestedEnumActerNotificationEmailFrequencyFilter | undefined;
}
