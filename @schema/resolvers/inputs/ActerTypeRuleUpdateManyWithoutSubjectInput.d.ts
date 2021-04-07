import { ActerTypeRuleCreateOrConnectWithoutSubjectInput } from "../inputs/ActerTypeRuleCreateOrConnectWithoutSubjectInput";
import { ActerTypeRuleCreateWithoutSubjectInput } from "../inputs/ActerTypeRuleCreateWithoutSubjectInput";
import { ActerTypeRuleScalarWhereInput } from "../inputs/ActerTypeRuleScalarWhereInput";
import { ActerTypeRuleUpdateManyWithWhereWithoutSubjectInput } from "../inputs/ActerTypeRuleUpdateManyWithWhereWithoutSubjectInput";
import { ActerTypeRuleUpdateWithWhereUniqueWithoutSubjectInput } from "../inputs/ActerTypeRuleUpdateWithWhereUniqueWithoutSubjectInput";
import { ActerTypeRuleUpsertWithWhereUniqueWithoutSubjectInput } from "../inputs/ActerTypeRuleUpsertWithWhereUniqueWithoutSubjectInput";
import { ActerTypeRuleWhereUniqueInput } from "../inputs/ActerTypeRuleWhereUniqueInput";
export declare class ActerTypeRuleUpdateManyWithoutSubjectInput {
    create?: ActerTypeRuleCreateWithoutSubjectInput[] | undefined;
    connectOrCreate?: ActerTypeRuleCreateOrConnectWithoutSubjectInput[] | undefined;
    upsert?: ActerTypeRuleUpsertWithWhereUniqueWithoutSubjectInput[] | undefined;
    connect?: ActerTypeRuleWhereUniqueInput[] | undefined;
    set?: ActerTypeRuleWhereUniqueInput[] | undefined;
    disconnect?: ActerTypeRuleWhereUniqueInput[] | undefined;
    delete?: ActerTypeRuleWhereUniqueInput[] | undefined;
    update?: ActerTypeRuleUpdateWithWhereUniqueWithoutSubjectInput[] | undefined;
    updateMany?: ActerTypeRuleUpdateManyWithWhereWithoutSubjectInput[] | undefined;
    deleteMany?: ActerTypeRuleScalarWhereInput[] | undefined;
}
