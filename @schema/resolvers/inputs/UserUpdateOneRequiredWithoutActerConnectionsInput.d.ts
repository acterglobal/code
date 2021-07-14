import { UserCreateOrConnectWithoutActerConnectionsInput } from "../inputs/UserCreateOrConnectWithoutActerConnectionsInput";
import { UserCreateWithoutActerConnectionsInput } from "../inputs/UserCreateWithoutActerConnectionsInput";
import { UserUpdateWithoutActerConnectionsInput } from "../inputs/UserUpdateWithoutActerConnectionsInput";
import { UserUpsertWithoutActerConnectionsInput } from "../inputs/UserUpsertWithoutActerConnectionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutActerConnectionsInput {
    create?: UserCreateWithoutActerConnectionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActerConnectionsInput | undefined;
    upsert?: UserUpsertWithoutActerConnectionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutActerConnectionsInput | undefined;
}
