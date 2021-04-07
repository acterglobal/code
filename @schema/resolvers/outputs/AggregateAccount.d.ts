import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
export declare class AggregateAccount {
    count: AccountCountAggregate | null;
    min: AccountMinAggregate | null;
    max: AccountMaxAggregate | null;
}
