import { NestedEnumNotificationTypeFilter } from "../inputs/NestedEnumNotificationTypeFilter";
import { NestedEnumNotificationTypeWithAggregatesFilter } from "../inputs/NestedEnumNotificationTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumNotificationTypeWithAggregatesFilter {
    equals?: "NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER" | undefined;
    in?: Array<"NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER"> | undefined;
    notIn?: Array<"NEW_POST" | "NEW_ACTIVITY" | "NEW_MEMBER"> | undefined;
    not?: NestedEnumNotificationTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumNotificationTypeFilter | undefined;
    _max?: NestedEnumNotificationTypeFilter | undefined;
}
