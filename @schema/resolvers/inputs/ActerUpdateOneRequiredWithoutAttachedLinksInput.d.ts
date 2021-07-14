import { ActerCreateOrConnectWithoutAttachedLinksInput } from "../inputs/ActerCreateOrConnectWithoutAttachedLinksInput";
import { ActerCreateWithoutAttachedLinksInput } from "../inputs/ActerCreateWithoutAttachedLinksInput";
import { ActerUpdateWithoutAttachedLinksInput } from "../inputs/ActerUpdateWithoutAttachedLinksInput";
import { ActerUpsertWithoutAttachedLinksInput } from "../inputs/ActerUpsertWithoutAttachedLinksInput";
import { ActerWhereUniqueInput } from "../inputs/ActerWhereUniqueInput";
export declare class ActerUpdateOneRequiredWithoutAttachedLinksInput {
    create?: ActerCreateWithoutAttachedLinksInput | undefined;
    connectOrCreate?: ActerCreateOrConnectWithoutAttachedLinksInput | undefined;
    upsert?: ActerUpsertWithoutAttachedLinksInput | undefined;
    connect?: ActerWhereUniqueInput | undefined;
    update?: ActerUpdateWithoutAttachedLinksInput | undefined;
}
