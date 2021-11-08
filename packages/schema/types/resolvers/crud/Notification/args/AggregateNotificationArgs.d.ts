import { NotificationOrderByWithRelationInput } from "../../../inputs/NotificationOrderByWithRelationInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
import { NotificationWhereUniqueInput } from "../../../inputs/NotificationWhereUniqueInput";
export declare class AggregateNotificationArgs {
    where?: NotificationWhereInput | undefined;
    orderBy?: NotificationOrderByWithRelationInput[] | undefined;
    cursor?: NotificationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
