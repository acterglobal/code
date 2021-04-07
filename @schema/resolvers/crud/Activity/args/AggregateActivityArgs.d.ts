import { ActivityOrderByInput } from "../../../inputs/ActivityOrderByInput";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";
export declare class AggregateActivityArgs {
    where?: ActivityWhereInput | undefined;
    orderBy?: ActivityOrderByInput[] | undefined;
    cursor?: ActivityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
