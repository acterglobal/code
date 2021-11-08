import { NotificationCreateManyActivityInputEnvelope } from "../inputs/NotificationCreateManyActivityInputEnvelope";
import { NotificationCreateOrConnectWithoutActivityInput } from "../inputs/NotificationCreateOrConnectWithoutActivityInput";
import { NotificationCreateWithoutActivityInput } from "../inputs/NotificationCreateWithoutActivityInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutActivityInput } from "../inputs/NotificationUpdateManyWithWhereWithoutActivityInput";
import { NotificationUpdateWithWhereUniqueWithoutActivityInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutActivityInput";
import { NotificationUpsertWithWhereUniqueWithoutActivityInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutActivityInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUpdateManyWithoutActivityInput {
    create?: NotificationCreateWithoutActivityInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutActivityInput[] | undefined;
    upsert?: NotificationUpsertWithWhereUniqueWithoutActivityInput[] | undefined;
    createMany?: NotificationCreateManyActivityInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
    set?: NotificationWhereUniqueInput[] | undefined;
    disconnect?: NotificationWhereUniqueInput[] | undefined;
    delete?: NotificationWhereUniqueInput[] | undefined;
    update?: NotificationUpdateWithWhereUniqueWithoutActivityInput[] | undefined;
    updateMany?: NotificationUpdateManyWithWhereWithoutActivityInput[] | undefined;
    deleteMany?: NotificationScalarWhereInput[] | undefined;
}
