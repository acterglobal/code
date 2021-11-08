import { UserCreateOrConnectWithoutActerInput } from "../inputs/UserCreateOrConnectWithoutActerInput";
import { UserCreateWithoutActerInput } from "../inputs/UserCreateWithoutActerInput";
import { UserUpdateWithoutActerInput } from "../inputs/UserUpdateWithoutActerInput";
import { UserUpsertWithoutActerInput } from "../inputs/UserUpsertWithoutActerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutActerInput {
    create?: UserCreateWithoutActerInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActerInput | undefined;
    upsert?: UserUpsertWithoutActerInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: UserUpdateWithoutActerInput | undefined;
}
