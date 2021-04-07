import { InterestOrderByInput } from "../../../inputs/InterestOrderByInput";
import { InterestWhereInput } from "../../../inputs/InterestWhereInput";
import { InterestWhereUniqueInput } from "../../../inputs/InterestWhereUniqueInput";
export declare class InterestTypeInterestsArgs {
    where?: InterestWhereInput | undefined;
    orderBy?: InterestOrderByInput[] | undefined;
    cursor?: InterestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "sdgNumber" | "interestTypeId"> | undefined;
}
