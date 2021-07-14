import { LinkCreateManyActerInputEnvelope } from "../inputs/LinkCreateManyActerInputEnvelope";
import { LinkCreateOrConnectWithoutActerInput } from "../inputs/LinkCreateOrConnectWithoutActerInput";
import { LinkCreateWithoutActerInput } from "../inputs/LinkCreateWithoutActerInput";
import { LinkScalarWhereInput } from "../inputs/LinkScalarWhereInput";
import { LinkUpdateManyWithWhereWithoutActerInput } from "../inputs/LinkUpdateManyWithWhereWithoutActerInput";
import { LinkUpdateWithWhereUniqueWithoutActerInput } from "../inputs/LinkUpdateWithWhereUniqueWithoutActerInput";
import { LinkUpsertWithWhereUniqueWithoutActerInput } from "../inputs/LinkUpsertWithWhereUniqueWithoutActerInput";
import { LinkWhereUniqueInput } from "../inputs/LinkWhereUniqueInput";
export declare class LinkUpdateManyWithoutActerInput {
    create?: LinkCreateWithoutActerInput[] | undefined;
    connectOrCreate?: LinkCreateOrConnectWithoutActerInput[] | undefined;
    upsert?: LinkUpsertWithWhereUniqueWithoutActerInput[] | undefined;
    createMany?: LinkCreateManyActerInputEnvelope | undefined;
    connect?: LinkWhereUniqueInput[] | undefined;
    set?: LinkWhereUniqueInput[] | undefined;
    disconnect?: LinkWhereUniqueInput[] | undefined;
    delete?: LinkWhereUniqueInput[] | undefined;
    update?: LinkUpdateWithWhereUniqueWithoutActerInput[] | undefined;
    updateMany?: LinkUpdateManyWithWhereWithoutActerInput[] | undefined;
    deleteMany?: LinkScalarWhereInput[] | undefined;
}
