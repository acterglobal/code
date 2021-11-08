import { InviteOrderByWithRelationInput } from "../../../inputs/InviteOrderByWithRelationInput";
import { InviteWhereInput } from "../../../inputs/InviteWhereInput";
import { InviteWhereUniqueInput } from "../../../inputs/InviteWhereUniqueInput";
export declare class AggregateInviteArgs {
    where?: InviteWhereInput | undefined;
    orderBy?: InviteOrderByWithRelationInput[] | undefined;
    cursor?: InviteWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
