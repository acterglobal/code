import { ActerConnectionCountAggregate } from "../outputs/ActerConnectionCountAggregate";
import { ActerConnectionMaxAggregate } from "../outputs/ActerConnectionMaxAggregate";
import { ActerConnectionMinAggregate } from "../outputs/ActerConnectionMinAggregate";
export declare class ActerConnectionGroupBy {
    id: string;
    isApproved: boolean | null;
    role: "PENDING" | "MEMBER" | "ADMIN";
    createdAt: Date;
    updatedAt: Date;
    createdByUserId: string;
    followerActerId: string;
    followingActerId: string;
    count: ActerConnectionCountAggregate | null;
    min: ActerConnectionMinAggregate | null;
    max: ActerConnectionMaxAggregate | null;
}
