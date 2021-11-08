import { InterestTypeOrderByWithRelationInput } from "../../../inputs/InterestTypeOrderByWithRelationInput";
import { InterestTypeWhereInput } from "../../../inputs/InterestTypeWhereInput";
import { InterestTypeWhereUniqueInput } from "../../../inputs/InterestTypeWhereUniqueInput";
export declare class AggregateInterestTypeArgs {
    where?: InterestTypeWhereInput | undefined;
    orderBy?: InterestTypeOrderByWithRelationInput[] | undefined;
    cursor?: InterestTypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
