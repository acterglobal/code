import { NestedEnumActerPrivacySettingsFilter } from "../inputs/NestedEnumActerPrivacySettingsFilter";
export declare class EnumActerPrivacySettingsFilter {
    equals?: "PUBLIC" | "PRIVATE" | undefined;
    in?: Array<"PUBLIC" | "PRIVATE"> | undefined;
    notIn?: Array<"PUBLIC" | "PRIVATE"> | undefined;
    not?: NestedEnumActerPrivacySettingsFilter | undefined;
}
