import { InterestTypeOrderByInput } from "../../../inputs/InterestTypeOrderByInput";
import { InterestTypeWhereInput } from "../../../inputs/InterestTypeWhereInput";
import { InterestTypeWhereUniqueInput } from "../../../inputs/InterestTypeWhereUniqueInput";
export declare class AggregateInterestTypeArgs {
    where?: InterestTypeWhereInput | undefined;
    orderBy?: InterestTypeOrderByInput[] | undefined;
    cursor?: InterestTypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
