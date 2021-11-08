import { NotificationCreateManyPostInputEnvelope } from "../inputs/NotificationCreateManyPostInputEnvelope";
import { NotificationCreateOrConnectWithoutPostInput } from "../inputs/NotificationCreateOrConnectWithoutPostInput";
import { NotificationCreateWithoutPostInput } from "../inputs/NotificationCreateWithoutPostInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationCreateNestedManyWithoutPostInput {
    create?: NotificationCreateWithoutPostInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutPostInput[] | undefined;
    createMany?: NotificationCreateManyPostInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
}
