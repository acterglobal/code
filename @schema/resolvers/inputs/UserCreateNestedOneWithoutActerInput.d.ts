import { UserCreateOrConnectWithoutActerInput } from "../inputs/UserCreateOrConnectWithoutActerInput";
import { UserCreateWithoutActerInput } from "../inputs/UserCreateWithoutActerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutActerInput {
    create?: UserCreateWithoutActerInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActerInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
