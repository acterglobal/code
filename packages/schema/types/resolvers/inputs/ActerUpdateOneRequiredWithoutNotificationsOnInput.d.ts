import { ActerCreateOrConnectWithoutNotificationsOnInput } from "../inputs/ActerCreateOrConnectWithoutNotificationsOnInput";
import { ActerCreateWithoutNotificationsOnInput } from "../inputs/ActerCreateWithoutNotificationsOnInput";
import { ActerUpdateWithoutNotificationsOnInput } from "../inputs/ActerUpdateWithoutNotificationsOnInput";
import { ActerUpsertWithoutNotificationsOnInput } from "../inputs/ActerUpsertWithoutNotificationsOnInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutNotificationsOnInput {
    create?: ActerCreateWithoutNotificationsOnInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutNotificationsOnInput | undefined;
    upsert?: ActerUpsertWithoutNotificationsOnInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutNotificationsOnInput | undefined;
}
