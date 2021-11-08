import { ActerCreateOrConnectWithoutInviteInput } from "../inputs/ActerCreateOrConnectWithoutInviteInput";
import { ActerCreateWithoutInviteInput } from "../inputs/ActerCreateWithoutInviteInput";
import { ActerUpdateWithoutInviteInput } from "../inputs/ActerUpdateWithoutInviteInput";
import { ActerUpsertWithoutInviteInput } from "../inputs/ActerUpsertWithoutInviteInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutInviteInput {
    create?: ActerCreateWithoutInviteInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutInviteInput | undefined;
    upsert?: ActerUpsertWithoutInviteInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutInviteInput | undefined;
}
