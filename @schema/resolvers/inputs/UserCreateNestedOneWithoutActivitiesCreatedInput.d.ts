import { UserCreateOrConnectWithoutActivitiesCreatedInput } from "../inputs/UserCreateOrConnectWithoutActivitiesCreatedInput";
import { UserCreateWithoutActivitiesCreatedInput } from "../inputs/UserCreateWithoutActivitiesCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutActivitiesCreatedInput {
    create?: UserCreateWithoutActivitiesCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
