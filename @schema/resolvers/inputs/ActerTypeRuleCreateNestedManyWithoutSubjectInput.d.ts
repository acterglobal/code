import { ActerTypeRuleCreateOrConnectWithoutSubjectInput } from "../inputs/ActerTypeRuleCreateOrConnectWithoutSubjectInput";
import { ActerTypeRuleCreateWithoutSubjectInput } from "../inputs/ActerTypeRuleCreateWithoutSubjectInput";
import { ActerTypeRuleWhereUniqueInput } from "../inputs/ActerTypeRuleWhereUniqueInput";
export declare class ActerTypeRuleCreateNestedManyWithoutSubjectInput {
    create?: ActerTypeRuleCreateWithoutSubjectInput[] | undefined;
    connectOrCreate?: ActerTypeRuleCreateOrConnectWithoutSubjectInput[] | undefined;
    connect?: ActerTypeRuleWhereUniqueInput[] | undefined;
}
