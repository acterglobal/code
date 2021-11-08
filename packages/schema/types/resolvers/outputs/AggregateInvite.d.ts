import { InviteCountAggregate } from "../outputs/InviteCountAggregate";
import { InviteMaxAggregate } from "../outputs/InviteMaxAggregate";
import { InviteMinAggregate } from "../outputs/InviteMinAggregate";
export declare class AggregateInvite {
    _count: InviteCountAggregate | null;
    _min: InviteMinAggregate | null;
    _max: InviteMaxAggregate | null;
}
