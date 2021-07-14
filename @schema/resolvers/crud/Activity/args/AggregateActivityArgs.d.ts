import { ActivityOrderByWithRelationInput } from "../../../inputs/ActivityOrderByWithRelationInput";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";
export declare class AggregateActivityArgs {
    where?: ActivityWhereInput | undefined;
    orderBy?: ActivityOrderByWithRelationInput[] | undefined;
    cursor?: ActivityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
