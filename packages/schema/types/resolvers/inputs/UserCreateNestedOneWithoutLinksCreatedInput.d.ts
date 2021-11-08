import { UserCreateOrConnectWithoutLinksCreatedInput } from "../inputs/UserCreateOrConnectWithoutLinksCreatedInput";
import { UserCreateWithoutLinksCreatedInput } from "../inputs/UserCreateWithoutLinksCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutLinksCreatedInput {
    create?: UserCreateWithoutLinksCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLinksCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
