import { ActerTypeOrderByWithRelationInput } from "../../../inputs/ActerTypeOrderByWithRelationInput";
import { ActerTypeWhereInput } from "../../../inputs/ActerTypeWhereInput";
import { ActerTypeWhereUniqueInput } from "../../../inputs/ActerTypeWhereUniqueInput";
export declare class AggregateActerTypeArgs {
    where?: ActerTypeWhereInput | undefined;
    orderBy?: ActerTypeOrderByWithRelationInput[] | undefined;
    cursor?: ActerTypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}