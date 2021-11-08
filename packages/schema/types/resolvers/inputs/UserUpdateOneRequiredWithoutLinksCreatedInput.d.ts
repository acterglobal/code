import { UserCreateOrConnectWithoutLinksCreatedInput } from "../inputs/UserCreateOrConnectWithoutLinksCreatedInput";
import { UserCreateWithoutLinksCreatedInput } from "../inputs/UserCreateWithoutLinksCreatedInput";
import { UserUpdateWithoutLinksCreatedInput } from "../inputs/UserUpdateWithoutLinksCreatedInput";
import { UserUpsertWithoutLinksCreatedInput } from "../inputs/UserUpsertWithoutLinksCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutLinksCreatedInput {
    create?: UserCreateWithoutLinksCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLinksCreatedInput | undefined;
    upsert?: UserUpsertWithoutLinksCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutLinksCreatedInput | undefined;
}
