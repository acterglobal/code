import { UserCreateOrConnectWithoutActersDeletedInput } from "../inputs/UserCreateOrConnectWithoutActersDeletedInput";
import { UserCreateWithoutActersDeletedInput } from "../inputs/UserCreateWithoutActersDeletedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutActersDeletedInput {
    create?: UserCreateWithoutActersDeletedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActersDeletedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
