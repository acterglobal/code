import { InterestCreateManyInterestTypeInputEnvelope } from "../inputs/InterestCreateManyInterestTypeInputEnvelope";
import { InterestCreateOrConnectWithoutInterestTypeInput } from "../inputs/InterestCreateOrConnectWithoutInterestTypeInput";
import { InterestCreateWithoutInterestTypeInput } from "../inputs/InterestCreateWithoutInterestTypeInput";
import { InterestScalarWhereInput } from "../inputs/InterestScalarWhereInput";
import { InterestUpdateManyWithWhereWithoutInterestTypeInput } from "../inputs/InterestUpdateManyWithWhereWithoutInterestTypeInput";
import { InterestUpdateWithWhereUniqueWithoutInterestTypeInput } from "../inputs/InterestUpdateWithWhereUniqueWithoutInterestTypeInput";
import { InterestUpsertWithWhereUniqueWithoutInterestTypeInput } from "../inputs/InterestUpsertWithWhereUniqueWithoutInterestTypeInput";
import { InterestWhereUniqueInput } from "../inputs/InterestWhereUniqueInput";
export declare class InterestUpdateManyWithoutInterestTypeInput {
    create?: InterestCreateWithoutInterestTypeInput[] | undefined;
    connectOrCreate?: InterestCreateOrConnectWithoutInterestTypeInput[] | undefined;
    upsert?: InterestUpsertWithWhereUniqueWithoutInterestTypeInput[] | undefined;
    createMany?: InterestCreateManyInterestTypeInputEnvelope | undefined;
    connect?: InterestWhereUniqueInput[] | undefined;
    set?: InterestWhereUniqueInput[] | undefined;
    disconnect?: InterestWhereUniqueInput[] | undefined;
    delete?: InterestWhereUniqueInput[] | undefined;
    update?: InterestUpdateWithWhereUniqueWithoutInterestTypeInput[] | undefined;
    updateMany?: InterestUpdateManyWithWhereWithoutInterestTypeInput[] | undefined;
    deleteMany?: InterestScalarWhereInput[] | undefined;
}
