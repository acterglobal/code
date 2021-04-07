import { UserCreateOrConnectWithoutActerInterestInput } from "../inputs/UserCreateOrConnectWithoutActerInterestInput";
import { UserCreateWithoutActerInterestInput } from "../inputs/UserCreateWithoutActerInterestInput";
import { UserUpdateWithoutActerInterestInput } from "../inputs/UserUpdateWithoutActerInterestInput";
import { UserUpsertWithoutActerInterestInput } from "../inputs/UserUpsertWithoutActerInterestInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutActerInterestInput {
    create?: UserCreateWithoutActerInterestInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActerInterestInput | undefined;
    upsert?: UserUpsertWithoutActerInterestInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutActerInterestInput | undefined;
}
