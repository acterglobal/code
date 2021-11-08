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
    _count: ActerConnectionCountAggregate | null;
    _min: ActerConnectionMinAggregate | null;
    _max: ActerConnectionMaxAggregate | null;
}
