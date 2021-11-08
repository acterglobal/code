import { ActerType } from "../models/ActerType";
export declare class ActerTypeRule {
    id: string;
    canCreate: boolean;
    canJoin: boolean;
    canBecome: boolean;
    Subject?: ActerType;
    subjectActerTypeId: string;
    Object?: ActerType;
    objectActerTypeId: string;
}
