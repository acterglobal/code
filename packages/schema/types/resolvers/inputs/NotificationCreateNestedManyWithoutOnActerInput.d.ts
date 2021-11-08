import { NotificationCreateManyOnActerInputEnvelope } from "../inputs/NotificationCreateManyOnActerInputEnvelope";
import { NotificationCreateOrConnectWithoutOnActerInput } from "../inputs/NotificationCreateOrConnectWithoutOnActerInput";
import { NotificationCreateWithoutOnActerInput } from "../inputs/NotificationCreateWithoutOnActerInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationCreateNestedManyWithoutOnActerInput {
    create?: NotificationCreateWithoutOnActerInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutOnActerInput[] | undefined;
    createMany?: NotificationCreateManyOnActerInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
}
