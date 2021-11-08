import { ActerInterestOrderByWithRelationInput } from "../../../inputs/ActerInterestOrderByWithRelationInput";
import { ActerInterestWhereInput } from "../../../inputs/ActerInterestWhereInput";
import { ActerInterestWhereUniqueInput } from "../../../inputs/ActerInterestWhereUniqueInput";
export declare class AggregateActerInterestArgs {
    where?: ActerInterestWhereInput | undefined;
    orderBy?: ActerInterestOrderByWithRelationInput[] | undefined;
    cursor?: ActerInterestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
