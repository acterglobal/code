import { ActerOrderByWithRelationInput } from "../../../inputs/ActerOrderByWithRelationInput";
import { ActerWhereInput } from "../../../inputs/ActerWhereInput";
import { ActerWhereUniqueInput } from "../../../inputs/ActerWhereUniqueInput";
export declare class AggregateActerArgs {
    where?: ActerWhereInput | undefined;
    orderBy?: ActerOrderByWithRelationInput[] | undefined;
    cursor?: ActerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
