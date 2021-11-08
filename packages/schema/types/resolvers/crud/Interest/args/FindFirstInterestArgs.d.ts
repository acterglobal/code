import { InterestOrderByWithRelationInput } from "../../../inputs/InterestOrderByWithRelationInput";
import { InterestWhereInput } from "../../../inputs/InterestWhereInput";
import { InterestWhereUniqueInput } from "../../../inputs/InterestWhereUniqueInput";
export declare class FindFirstInterestArgs {
    where?: InterestWhereInput | undefined;
    orderBy?: InterestOrderByWithRelationInput[] | undefined;
    cursor?: InterestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "sdgNumber" | "interestTypeId"> | undefined;
}
