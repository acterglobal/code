import { UserCreateOrConnectWithoutInviteInput } from "../inputs/UserCreateOrConnectWithoutInviteInput";
import { UserCreateWithoutInviteInput } from "../inputs/UserCreateWithoutInviteInput";
import { UserUpdateWithoutInviteInput } from "../inputs/UserUpdateWithoutInviteInput";
import { UserUpsertWithoutInviteInput } from "../inputs/UserUpsertWithoutInviteInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutInviteInput {
    create?: UserCreateWithoutInviteInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutInviteInput | undefined;
    upsert?: UserUpsertWithoutInviteInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutInviteInput | undefined;
}
