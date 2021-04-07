import { ActerTypeRuleCreateOrConnectWithoutObjectInput } from "../inputs/ActerTypeRuleCreateOrConnectWithoutObjectInput";
import { ActerTypeRuleCreateWithoutObjectInput } from "../inputs/ActerTypeRuleCreateWithoutObjectInput";
import { ActerTypeRuleWhereUniqueInput } from "../inputs/ActerTypeRuleWhereUniqueInput";
export declare class ActerTypeRuleCreateNestedManyWithoutObjectInput {
    create?: ActerTypeRuleCreateWithoutObjectInput[] | undefined;
    connectOrCreate?: ActerTypeRuleCreateOrConnectWithoutObjectInput[] | undefined;
    connect?: ActerTypeRuleWhereUniqueInput[] | undefined;
}
