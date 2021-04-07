import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUserResolver {
    deleteManyUser(ctx: any, args: DeleteManyUserArgs): Promise<AffectedRowsOutput>;
}
