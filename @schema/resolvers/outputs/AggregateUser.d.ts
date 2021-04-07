import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class AggregateUser {
    count: UserCountAggregate | null;
    min: UserMinAggregate | null;
    max: UserMaxAggregate | null;
}
