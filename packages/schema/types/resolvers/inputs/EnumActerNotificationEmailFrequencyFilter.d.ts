import { NestedEnumActerNotificationEmailFrequencyFilter } from "../inputs/NestedEnumActerNotificationEmailFrequencyFilter";
export declare class EnumActerNotificationEmailFrequencyFilter {
    equals?: "NEVER" | "DAILY" | "INSTANT" | undefined;
    in?: Array<"NEVER" | "DAILY" | "INSTANT"> | undefined;
    notIn?: Array<"NEVER" | "DAILY" | "INSTANT"> | undefined;
    not?: NestedEnumActerNotificationEmailFrequencyFilter | undefined;
}
