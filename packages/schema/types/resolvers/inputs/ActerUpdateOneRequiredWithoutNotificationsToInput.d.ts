import { ActerCreateOrConnectWithoutNotificationsToInput } from "../inputs/ActerCreateOrConnectWithoutNotificationsToInput";
import { ActerCreateWithoutNotificationsToInput } from "../inputs/ActerCreateWithoutNotificationsToInput";
import { ActerUpdateWithoutNotificationsToInput } from "../inputs/ActerUpdateWithoutNotificationsToInput";
import { ActerUpsertWithoutNotificationsToInput } from "../inputs/ActerUpsertWithoutNotificationsToInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutNotificationsToInput {
    create?: ActerCreateWithoutNotificationsToInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutNotificationsToInput | undefined;
    upsert?: ActerUpsertWithoutNotificationsToInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutNotificationsToInput | undefined;
}
