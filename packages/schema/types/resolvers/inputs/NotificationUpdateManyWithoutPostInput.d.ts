import { NotificationCreateManyPostInputEnvelope } from "../inputs/NotificationCreateManyPostInputEnvelope";
import { NotificationCreateOrConnectWithoutPostInput } from "../inputs/NotificationCreateOrConnectWithoutPostInput";
import { NotificationCreateWithoutPostInput } from "../inputs/NotificationCreateWithoutPostInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutPostInput } from "../inputs/NotificationUpdateManyWithWhereWithoutPostInput";
import { NotificationUpdateWithWhereUniqueWithoutPostInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutPostInput";
import { NotificationUpsertWithWhereUniqueWithoutPostInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutPostInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUpdateManyWithoutPostInput {
    create?: NotificationCreateWithoutPostInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutPostInput[] | undefined;
    upsert?: NotificationUpsertWithWhereUniqueWithoutPostInput[] | undefined;
    createMany?: NotificationCreateManyPostInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
    set?: NotificationWhereUniqueInput[] | undefined;
    disconnect?: NotificationWhereUniqueInput[] | undefined;
    delete?: NotificationWhereUniqueInput[] | undefined;
    update?: NotificationUpdateWithWhereUniqueWithoutPostInput[] | undefined;
    updateMany?: NotificationUpdateManyWithWhereWithoutPostInput[] | undefined;
    deleteMany?: NotificationScalarWhereInput[] | undefined;
}
