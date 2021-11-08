import { NotificationCreateManyToActerInputEnvelope } from "../inputs/NotificationCreateManyToActerInputEnvelope";
import { NotificationCreateOrConnectWithoutToActerInput } from "../inputs/NotificationCreateOrConnectWithoutToActerInput";
import { NotificationCreateWithoutToActerInput } from "../inputs/NotificationCreateWithoutToActerInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutToActerInput } from "../inputs/NotificationUpdateManyWithWhereWithoutToActerInput";
import { NotificationUpdateWithWhereUniqueWithoutToActerInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutToActerInput";
import { NotificationUpsertWithWhereUniqueWithoutToActerInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutToActerInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";
export declare class NotificationUpdateManyWithoutToActerInput {
    create?: NotificationCreateWithoutToActerInput[] | undefined;
    connectOrCreate?: NotificationCreateOrConnectWithoutToActerInput[] | undefined;
    upsert?: NotificationUpsertWithWhereUniqueWithoutToActerInput[] | undefined;
    createMany?: NotificationCreateManyToActerInputEnvelope | undefined;
    connect?: NotificationWhereUniqueInput[] | undefined;
    set?: NotificationWhereUniqueInput[] | undefined;
    disconnect?: NotificationWhereUniqueInput[] | undefined;
    delete?: NotificationWhereUniqueInput[] | undefined;
    update?: NotificationUpdateWithWhereUniqueWithoutToActerInput[] | undefined;
    updateMany?: NotificationUpdateManyWithWhereWithoutToActerInput[] | undefined;
    deleteMany?: NotificationScalarWhereInput[] | undefined;
}
