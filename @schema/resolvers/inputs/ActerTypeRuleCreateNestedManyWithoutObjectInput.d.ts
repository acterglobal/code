import { ActerTypeRuleCreateManyObjectInputEnvelope } from "../inputs/ActerTypeRuleCreateManyObjectInputEnvelope";
import { ActerTypeRuleCreateOrConnectWithoutObjectInput } from "../inputs/ActerTypeRuleCreateOrConnectWithoutObjectInput";
import { ActerTypeRuleCreateWithoutObjectInput } from "../inputs/ActerTypeRuleCreateWithoutObjectInput";
import { ActerTypeRuleWhereUniqueInput } from "../inputs/ActerTypeRuleWhereUniqueInput";
export declare class ActerTypeRuleCreateNestedManyWithoutObjectInput {
    create?: ActerTypeRuleCreateWithoutObjectInput[] | undefined;
    connectOrCreate?: ActerTypeRuleCreateOrConnectWithoutObjectInput[] | undefined;
    createMany?: ActerTypeRuleCreateManyObjectInputEnvelope | undefined;
    connect?: ActerTypeRuleWhereUniqueInput[] | undefined;
}
