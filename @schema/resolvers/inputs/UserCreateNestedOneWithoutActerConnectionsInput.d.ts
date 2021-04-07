import { UserCreateOrConnectWithoutActerConnectionsInput } from "../inputs/UserCreateOrConnectWithoutActerConnectionsInput";
import { UserCreateWithoutActerConnectionsInput } from "../inputs/UserCreateWithoutActerConnectionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutActerConnectionsInput {
    create?: UserCreateWithoutActerConnectionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActerConnectionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
