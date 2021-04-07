import { ActerCreateOrConnectWithoutChildrenInput } from "../inputs/ActerCreateOrConnectWithoutChildrenInput";
import { ActerCreateWithoutChildrenInput } from "../inputs/ActerCreateWithoutChildrenInput";
import { ActerUpdateWithoutChildrenInput } from "../inputs/ActerUpdateWithoutChildrenInput";
import { ActerUpsertWithoutChildrenInput } from "../inputs/ActerUpsertWithoutChildrenInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneWithoutChildrenInput {
    create?: ActerCreateWithoutChildrenInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutChildrenInput | undefined;
    upsert?: ActerUpsertWithoutChildrenInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ActerUpdateWithoutChildrenInput | undefined;
}
