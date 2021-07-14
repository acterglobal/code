import { Acter } from "../../../models/Acter";
import { ActerType } from "../../../models/ActerType";
import { ActerTypeRule } from "../../../models/ActerTypeRule";
import { ActerTypeActerArgs } from "./args/ActerTypeActerArgs";
import { ActerTypeActerTypeRulesArgs } from "./args/ActerTypeActerTypeRulesArgs";
import { ActerTypeRulesOnActerTypeArgs } from "./args/ActerTypeRulesOnActerTypeArgs";
export declare class ActerTypeRelationsResolver {
    Acter(acterType: ActerType, ctx: any, args: ActerTypeActerArgs): Promise<Acter[]>;
    ActerTypeRules(acterType: ActerType, ctx: any, args: ActerTypeActerTypeRulesArgs): Promise<ActerTypeRule[]>;
    RulesOnActerType(acterType: ActerType, ctx: any, args: ActerTypeRulesOnActerTypeArgs): Promise<ActerTypeRule[]>;
}
