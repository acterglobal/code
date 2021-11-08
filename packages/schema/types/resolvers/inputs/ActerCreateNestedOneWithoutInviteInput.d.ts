import { ActerCreateOrConnectWithoutInviteInput } from "../inputs/ActerCreateOrConnectWithoutInviteInput";
import { ActerCreateWithoutInviteInput } from "../inputs/ActerCreateWithoutInviteInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutInviteInput {
    create?: ActerCreateWithoutInviteInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutInviteInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
