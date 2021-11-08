import { ActerConnectionOrderByRelationAggregateInput } from "../inputs/ActerConnectionOrderByRelationAggregateInput";
import { ActerInterestOrderByRelationAggregateInput } from "../inputs/ActerInterestOrderByRelationAggregateInput";
import { ActerOrderByRelationAggregateInput } from "../inputs/ActerOrderByRelationAggregateInput";
import { ActerOrderByWithRelationInput } from "../inputs/ActerOrderByWithRelationInput";
import { ActivityOrderByRelationAggregateInput } from "../inputs/ActivityOrderByRelationAggregateInput";
import { InviteOrderByRelationAggregateInput } from "../inputs/InviteOrderByRelationAggregateInput";
import { LinkOrderByRelationAggregateInput } from "../inputs/LinkOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    auth0ProviderId?: "asc" | "desc" | undefined;
    intercomId?: "asc" | "desc" | undefined;
    Acter?: ActerOrderByWithRelationInput | undefined;
    acterId?: "asc" | "desc" | undefined;
    ActersCreated?: ActerOrderByRelationAggregateInput | undefined;
    ActerConnections?: ActerConnectionOrderByRelationAggregateInput | undefined;
    LinksCreated?: LinkOrderByRelationAggregateInput | undefined;
    ActerInterest?: ActerInterestOrderByRelationAggregateInput | undefined;
    ActivitiesCreated?: ActivityOrderByRelationAggregateInput | undefined;
    ActersDeleted?: ActerOrderByRelationAggregateInput | undefined;
    Invite?: InviteOrderByRelationAggregateInput | undefined;
}
