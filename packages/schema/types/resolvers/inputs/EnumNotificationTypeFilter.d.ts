import { NestedEnumNotificationTypeFilter } from "../inputs/NestedEnumNotificationTypeFilter";
export declare class EnumNotificationTypeFilter {
    equals?: "NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER" | undefined;
    in?: Array<"NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER"> | undefined;
    notIn?: Array<"NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER"> | undefined;
    not?: NestedEnumNotificationTypeFilter | undefined;
}
