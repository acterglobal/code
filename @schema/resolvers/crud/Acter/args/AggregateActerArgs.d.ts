import { ActerOrderByInput } from "../../../inputs/ActerOrderByInput";
import { ActerWhereInput } from "../../../inputs/ActerWhereInput";
import { ActerWhereUniqueInput } from "../../../inputs/ActerWhereUniqueInput";
export declare class AggregateActerArgs {
    where?: ActerWhereInput | undefined;
    orderBy?: ActerOrderByInput[] | undefined;
    cursor?: ActerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
