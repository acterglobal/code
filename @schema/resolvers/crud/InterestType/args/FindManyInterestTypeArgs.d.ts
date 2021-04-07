import { InterestTypeOrderByInput } from "../../../inputs/InterestTypeOrderByInput";
import { InterestTypeWhereInput } from "../../../inputs/InterestTypeWhereInput";
import { InterestTypeWhereUniqueInput } from "../../../inputs/InterestTypeWhereUniqueInput";
export declare class FindManyInterestTypeArgs {
    where?: InterestTypeWhereInput | undefined;
    orderBy?: InterestTypeOrderByInput[] | undefined;
    cursor?: InterestTypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "sortOrder" | "parentInterestTypeId"> | undefined;
}
