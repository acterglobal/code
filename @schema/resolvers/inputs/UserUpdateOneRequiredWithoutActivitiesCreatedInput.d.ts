import { UserCreateOrConnectWithoutActivitiesCreatedInput } from "../inputs/UserCreateOrConnectWithoutActivitiesCreatedInput";
import { UserCreateWithoutActivitiesCreatedInput } from "../inputs/UserCreateWithoutActivitiesCreatedInput";
import { UserUpdateWithoutActivitiesCreatedInput } from "../inputs/UserUpdateWithoutActivitiesCreatedInput";
import { UserUpsertWithoutActivitiesCreatedInput } from "../inputs/UserUpsertWithoutActivitiesCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutActivitiesCreatedInput {
    create?: UserCreateWithoutActivitiesCreatedInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesCreatedInput | undefined;
    upsert?: UserUpsertWithoutActivitiesCreatedInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutActivitiesCreatedInput | undefined;
}
