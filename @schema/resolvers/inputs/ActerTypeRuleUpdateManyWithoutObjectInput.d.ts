import { ActerTypeRuleCreateOrConnectWithoutObjectInput } from "../inputs/ActerTypeRuleCreateOrConnectWithoutObjectInput";
import { ActerTypeRuleCreateWithoutObjectInput } from "../inputs/ActerTypeRuleCreateWithoutObjectInput";
import { ActerTypeRuleScalarWhereInput } from "../inputs/ActerTypeRuleScalarWhereInput";
import { ActerTypeRuleUpdateManyWithWhereWithoutObjectInput } from "../inputs/ActerTypeRuleUpdateManyWithWhereWithoutObjectInput";
import { ActerTypeRuleUpdateWithWhereUniqueWithoutObjectInput } from "../inputs/ActerTypeRuleUpdateWithWhereUniqueWithoutObjectInput";
import { ActerTypeRuleUpsertWithWhereUniqueWithoutObjectInput } from "../inputs/ActerTypeRuleUpsertWithWhereUniqueWithoutObjectInput";
import { ActerTypeRuleWhereUniqueInput } from "../inputs/ActerTypeRuleWhereUniqueInput";
export declare class ActerTypeRuleUpdateManyWithoutObjectInput {
    create?: ActerTypeRuleCreateWithoutObjectInput[] | undefined;
    connectOrCreate?: ActerTypeRuleCreateOrConnectWithoutObjectInput[] | undefined;
    upsert?: ActerTypeRuleUpsertWithWhereUniqueWithoutObjectInput[] | undefined;
    connect?: ActerTypeRuleWhereUniqueInput[] | undefined;
    set?: ActerTypeRuleWhereUniqueInput[] | undefined;
    disconnect?: ActerTypeRuleWhereUniqueInput[] | undefined;
    delete?: ActerTypeRuleWhereUniqueInput[] | undefined;
    update?: ActerTypeRuleUpdateWithWhereUniqueWithoutObjectInput[] | undefined;
    updateMany?: ActerTypeRuleUpdateManyWithWhereWithoutObjectInput[] | undefined;
    deleteMany?: ActerTypeRuleScalarWhereInput[] | undefined;
}
