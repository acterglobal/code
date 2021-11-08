import { NotificationCreateManyOnActerInputEnvelope } from "../inputs/NotificationCreateManyOnActerInputEnvelope";
import { NotificationCreateOrConnectWithoutOnActerInput } from "../inputs/NotificationCreateOrConnectWithoutOnActerInput";
import { NotificationCreateWithoutOnActerInput } from "../inputs/NotificationCreateWithoutOnActerInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutOnActerInput } from "../inputs/NotificationUpdateManyWithWhereWithoutOnActerInput";
import { NotificationUpdateWithWhereUniqueWithoutOnActerInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutOnActerInput";
import { NotificationUpsertWithWhereUniqueWithoutOnActerInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutOnActerInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUpdateManyWithoutOnActerInput {
    create?: NotificationCreateWithoutOnActerInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutOnActerInput[] | undefined;
    upsert?: NotificationUpsertWithWhereUniqueWithoutOnActerInput[] | undefined;
    createMany?: NotificationCreateManyOnActerInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
    set?: NotificationWhereUniqueInput[] | undefined;
    disconnect?: NotificationWhereUniqueInput[] | undefined;
    delete?: NotificationWhereUniqueInput[] | undefined;
    update?: NotificationUpdateWithWhereUniqueWithoutOnActerInput[] | undefined;
    updateMany?: NotificationUpdateManyWithWhereWithoutOnActerInput[] | undefined;
    deleteMany?: NotificationScalarWhereInput[] | undefined;
}
