import { ActerInterestOrderByInput } from "../../../inputs/ActerInterestOrderByInput";
import { ActerInterestWhereInput } from "../../../inputs/ActerInterestWhereInput";
import { ActerInterestWhereUniqueInput } from "../../../inputs/ActerInterestWhereUniqueInput";
export declare class FindManyActerInterestArgs {
    where?: ActerInterestWhereInput | undefined;
    orderBy?: ActerInterestOrderByInput[] | undefined;
    cursor?: ActerInterestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "createdByUserId" | "acterId" | "interestId"> | undefined;
}
