import { LinkCreateInput } from "../../../inputs/LinkCreateInput";
import { LinkUpdateInput } from "../../../inputs/LinkUpdateInput";
import { LinkWhereUniqueInput } from "../../../inputs/LinkWhereUniqueInput";
export declare class UpsertLinkArgs {
    where: LinkWhereUniqueInput;
    create: LinkCreateInput;
    update: LinkUpdateInput;
}
