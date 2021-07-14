import { ActerCreateOrConnectWithoutUserInput } from "../inputs/ActerCreateOrConnectWithoutUserInput";
import { ActerCreateWithoutUserInput } from "../inputs/ActerCreateWithoutUserInput";
import { ActerUpdateWithoutUserInput } from "../inputs/ActerUpdateWithoutUserInput";
import { ActerUpsertWithoutUserInput } from "../inputs/ActerUpsertWithoutUserInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneWithoutUserInput {
    create?: ActerCreateWithoutUserInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutUserInput | undefined;
    upsert?: ActerUpsertWithoutUserInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ActerUpdateWithoutUserInput | undefined;
}
