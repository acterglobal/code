import { ActerCreateOrConnectWithoutNotificationsToInput } from "../inputs/ActerCreateOrConnectWithoutNotificationsToInput";
import { ActerCreateWithoutNotificationsToInput } from "../inputs/ActerCreateWithoutNotificationsToInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutNotificationsToInput {
    create?: ActerCreateWithoutNotificationsToInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutNotificationsToInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
