import { UserCreateOrConnectWithoutActersCreatedInput } from "../inputs/UserCreateOrConnectWithoutActersCreatedInput";
import { UserCreateWithoutActersCreatedInput } from "../inputs/UserCreateWithoutActersCreatedInput";
import { UserUpdateWithoutActersCreatedInput } from "../inputs/UserUpdateWithoutActersCreatedInput";
import { UserUpsertWithoutActersCreatedInput } from "../inputs/UserUpsertWithoutActersCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutActersCreatedInput {
    create?: UserCreateWithoutActersCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActersCreatedInput | undefined;
    upsert?: UserUpsertWithoutActersCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutActersCreatedInput | undefined;
}
