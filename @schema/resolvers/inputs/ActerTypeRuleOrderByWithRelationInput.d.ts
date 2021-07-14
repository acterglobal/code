import { ActerTypeOrderByWithRelationInput } from "../inputs/ActerTypeOrderByWithRelationInput";
export declare class ActerTypeRuleOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    canCreate?: "asc" | "desc" | undefined;
    canJoin?: "asc" | "desc" | undefined;
    canBecome?: "asc" | "desc" | undefined;
    Subject?: ActerTypeOrderByWithRelationInput | undefined;
    subjectActerTypeId?: "asc" | "desc" | undefined;
    Object?: ActerTypeOrderByWithRelationInput | undefined;
    objectActerTypeId?: "asc" | "desc" | undefined;
}
