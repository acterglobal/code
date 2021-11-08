import { InviteCountAggregate } from "../outputs/InviteCountAggregate";
import { InviteMaxAggregate } from "../outputs/InviteMaxAggregate";
import { InviteMinAggregate } from "../outputs/InviteMinAggregate";
export declare class InviteGroupBy {
    id: string;
    email: string;
    message: string;
    error: string;
    createdAt: Date;
    updatedAt: Date;
    sentAt: Date;
    acceptedAt: Date;
    onActerId: string;
    createdByUserId: string;
    _count: InviteCountAggregate | null;
    _min: InviteMinAggregate | null;
    _max: InviteMaxAggregate | null;
}
