import { NotificationCreateInput } from "../../../inputs/NotificationCreateInput";
import { NotificationUpdateInput } from "../../../inputs/NotificationUpdateInput";
import { NotificationWhereUniqueInput } from "../../../inputs/NotificationWhereUniqueInput";
export declare class UpsertNotificationArgs {
    where: NotificationWhereUniqueInput;
    create: NotificationCreateInput;
    update: NotificationUpdateInput;
}
