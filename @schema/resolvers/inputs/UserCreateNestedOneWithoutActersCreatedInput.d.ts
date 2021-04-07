import { UserCreateOrConnectWithoutActersCreatedInput } from "../inputs/UserCreateOrConnectWithoutActersCreatedInput";
import { UserCreateWithoutActersCreatedInput } from "../inputs/UserCreateWithoutActersCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutActersCreatedInput {
    create?: UserCreateWithoutActersCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActersCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
