import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ActerInterestScalarWhereInput {
    AND?: ActerInterestScalarWhereInput[] | undefined;
    OR?: ActerInterestScalarWhereInput[] | undefined;
    NOT?: ActerInterestScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    createdByUserId?: StringFilter | undefined;
    acterId?: StringFilter | undefined;
    interestId?: StringFilter | undefined;
}
