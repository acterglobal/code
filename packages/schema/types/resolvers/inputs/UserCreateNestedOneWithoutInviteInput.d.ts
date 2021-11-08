import { UserCreateOrConnectWithoutInviteInput } from "../inputs/UserCreateOrConnectWithoutInviteInput";
import { UserCreateWithoutInviteInput } from "../inputs/UserCreateWithoutInviteInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutInviteInput {
    create?: UserCreateWithoutInviteInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutInviteInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
