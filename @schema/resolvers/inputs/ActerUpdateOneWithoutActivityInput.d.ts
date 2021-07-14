import { ActerCreateOrConnectWithoutActivityInput } from "../inputs/ActerCreateOrConnectWithoutActivityInput";
import { ActerCreateWithoutActivityInput } from "../inputs/ActerCreateWithoutActivityInput";
import { ActerUpdateWithoutActivityInput } from "../inputs/ActerUpdateWithoutActivityInput";
import { ActerUpsertWithoutActivityInput } from "../inputs/ActerUpsertWithoutActivityInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneWithoutActivityInput {
    create?: ActerCreateWithoutActivityInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutActivityInput | undefined;
    upsert?: ActerUpsertWithoutActivityInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ActerUpdateWithoutActivityInput | undefined;
}
