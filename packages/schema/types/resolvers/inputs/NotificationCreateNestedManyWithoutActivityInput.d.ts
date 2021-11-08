import { NotificationCreateManyActivityInputEnvelope } from "../inputs/NotificationCreateManyActivityInputEnvelope";
import { NotificationCreateOrConnectWithoutActivityInput } from "../inputs/NotificationCreateOrConnectWithoutActivityInput";
import { NotificationCreateWithoutActivityInput } from "../inputs/NotificationCreateWithoutActivityInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationCreateNestedManyWithoutActivityInput {
    create?: NotificationCreateWithoutActivityInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutActivityInput[] | undefined;
    createMany?: NotificationCreateManyActivityInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
}
