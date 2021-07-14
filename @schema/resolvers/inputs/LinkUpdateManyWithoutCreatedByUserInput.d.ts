import { LinkCreateManyCreatedByUserInputEnvelope } from "../inputs/LinkCreateManyCreatedByUserInputEnvelope";
import { LinkCreateOrConnectWithoutCreatedByUserInput } from "../inputs/LinkCreateOrConnectWithoutCreatedByUserInput";
import { LinkCreateWithoutCreatedByUserInput } from "../inputs/LinkCreateWithoutCreatedByUserInput";
import { LinkScalarWhereInput } from "../inputs/LinkScalarWhereInput";
import { LinkUpdateManyWithWhereWithoutCreatedByUserInput } from "../inputs/LinkUpdateManyWithWhereWithoutCreatedByUserInput";
import { LinkUpdateWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/LinkUpdateWithWhereUniqueWithoutCreatedByUserInput";
import { LinkUpsertWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/LinkUpsertWithWhereUniqueWithoutCreatedByUserInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";
export declare class LinkUpdateManyWithoutCreatedByUserInput {
    create?: LinkCreateWithoutCreatedByUserInput[] | undefined;
    connectOrCreate?: LinkCreateOrConnectWithoutCreatedByUserInput[] | undefined;
    upsert?: LinkUpsertWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    createMany?: LinkCreateManyCreatedByUserInputEnvelope | undefined;
    connect?: LinkWhereUniqueInput[] | undefined;
    set?: LinkWhereUniqueInput[] | undefined;
    disconnect?: LinkWhereUniqueInput[] | undefined;
    delete?: LinkWhereUniqueInput[] | undefined;
    update?: LinkUpdateWithWhereUniqueWithoutCreatedByUserInput[] | undefined;
    updateMany?: LinkUpdateManyWithWhereWithoutCreatedByUserInput[] | undefined;
    deleteMany?: LinkScalarWhereInput[] | undefined;
}
