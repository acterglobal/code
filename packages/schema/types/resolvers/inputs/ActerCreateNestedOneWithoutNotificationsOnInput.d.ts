import { ActerCreateOrConnectWithoutNotificationsOnInput } from "../inputs/ActerCreateOrConnectWithoutNotificationsOnInput";
import { ActerCreateWithoutNotificationsOnInput } from "../inputs/ActerCreateWithoutNotificationsOnInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutNotificationsOnInput {
    create?: ActerCreateWithoutNotificationsOnInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutNotificationsOnInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
