import { InterestOrderByInput } from "../../../inputs/InterestOrderByInput";
import { InterestWhereInput } from "../../../inputs/InterestWhereInput";
import { InterestWhereUniqueInput } from "../../../inputs/InterestWhereUniqueInput";
export declare class AggregateInterestArgs {
    where?: InterestWhereInput | undefined;
    orderBy?: InterestOrderByInput[] | undefined;
    cursor?: InterestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
