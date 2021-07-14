import { ActerRelationFilter } from "../inputs/ActerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { InterestRelationFilter } from "../inputs/InterestRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ActerInterestWhereInput {
    AND?: ActerInterestWhereInput[] | undefined;
    OR?: ActerInterestWhereInput[] | undefined;
    NOT?: ActerInterestWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    CreatedByUser?: UserRelationFilter | undefined;
    createdByUserId?: StringFilter | undefined;
    Acter?: ActerRelationFilter | undefined;
    acterId?: StringFilter | undefined;
    Interest?: InterestRelationFilter | undefined;
    interestId?: StringFilter | undefined;
}
