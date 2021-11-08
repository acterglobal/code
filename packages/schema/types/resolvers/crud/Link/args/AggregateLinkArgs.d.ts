import { LinkOrderByWithRelationInput } from "../../../inputs/LinkOrderByWithRelationInput";
import { LinkWhereInput } from "../../../inputs/LinkWhereInput";
import { LinkWhereUniqueInput } from "../../../inputs/LinkWhereUniqueInput";
export declare class AggregateLinkArgs {
    where?: LinkWhereInput | undefined;
    orderBy?: LinkOrderByWithRelationInput[] | undefined;
    cursor?: LinkWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
