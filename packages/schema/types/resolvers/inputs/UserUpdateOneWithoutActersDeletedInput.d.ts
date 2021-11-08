import { UserCreateOrConnectWithoutActersDeletedInput } from "../inputs/UserCreateOrConnectWithoutActersDeletedInput";
import { UserCreateWithoutActersDeletedInput } from "../inputs/UserCreateWithoutActersDeletedInput";
import { UserUpdateWithoutActersDeletedInput } from "../inputs/UserUpdateWithoutActersDeletedInput";
import { UserUpsertWithoutActersDeletedInput } from "../inputs/UserUpsertWithoutActersDeletedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutActersDeletedInput {
    create?: UserCreateWithoutActersDeletedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActersDeletedInput | undefined;
    upsert?: UserUpsertWithoutActersDeletedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: UserUpdateWithoutActersDeletedInput | undefined;
}
