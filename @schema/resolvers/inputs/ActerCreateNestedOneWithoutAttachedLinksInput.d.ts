import { ActerCreateOrConnectWithoutAttachedLinksInput } from "../inputs/ActerCreateOrConnectWithoutAttachedLinksInput";
import { ActerCreateWithoutAttachedLinksInput } from "../inputs/ActerCreateWithoutAttachedLinksInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerCreateNestedOneWithoutAttachedLinksInput {
    create?: ActerCreateWithoutAttachedLinksInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutAttachedLinksInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
}
