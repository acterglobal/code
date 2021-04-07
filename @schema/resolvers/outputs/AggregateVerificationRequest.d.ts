import { VerificationRequestCountAggregate } from "../outputs/VerificationRequestCountAggregate";
import { VerificationRequestMaxAggregate } from "../outputs/VerificationRequestMaxAggregate";
import { VerificationRequestMinAggregate } from "../outputs/VerificationRequestMinAggregate";
export declare class AggregateVerificationRequest {
    count: VerificationRequestCountAggregate | null;
    min: VerificationRequestMinAggregate | null;
    max: VerificationRequestMaxAggregate | null;
}
