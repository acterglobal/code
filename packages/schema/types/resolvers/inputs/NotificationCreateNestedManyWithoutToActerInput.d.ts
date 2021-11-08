import { NotificationCreateManyToActerInputEnvelope } from "../inputs/NotificationCreateManyToActerInputEnvelope";
import { NotificationCreateOrConnectWithoutToActerInput } from "../inputs/NotificationCreateOrConnectWithoutToActerInput";
import { NotificationCreateWithoutToActerInput } from "../inputs/NotificationCreateWithoutToActerInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationCreateNestedManyWithoutToActerInput {
    create?: NotificationCreateWithoutToActerInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutToActerInput[] | undefined;
    createMany?: NotificationCreateManyToActerInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
}
