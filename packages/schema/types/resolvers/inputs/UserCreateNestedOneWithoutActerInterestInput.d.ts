import { UserCreateOrConnectWithoutActerInterestInput } from "../inputs/UserCreateOrConnectWithoutActerInterestInput";
import { UserCreateWithoutActerInterestInput } from "../inputs/UserCreateWithoutActerInterestInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutActerInterestInput {
    create?: UserCreateWithoutActerInterestInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActerInterestInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
