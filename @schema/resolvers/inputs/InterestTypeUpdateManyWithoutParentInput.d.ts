import { InterestTypeCreateOrConnectWithoutParentInput } from "../inputs/InterestTypeCreateOrConnectWithoutParentInput";
import { InterestTypeCreateWithoutParentInput } from "../inputs/InterestTypeCreateWithoutParentInput";
import { InterestTypeScalarWhereInput } from "../inputs/InterestTypeScalarWhereInput";
import { InterestTypeUpdateManyWithWhereWithoutParentInput } from "../inputs/InterestTypeUpdateManyWithWhereWithoutParentInput";
import { InterestTypeUpdateWithWhereUniqueWithoutParentInput } from "../inputs/InterestTypeUpdateWithWhereUniqueWithoutParentInput";
import { InterestTypeUpsertWithWhereUniqueWithoutParentInput } from "../inputs/InterestTypeUpsertWithWhereUniqueWithoutParentInput";
import { InterestTypeWhereUniqueInput } from "../inputs/InterestTypeWhereUniqueInput";
export declare class InterestTypeUpdateManyWithoutParentInput {
    create?: InterestTypeCreateWithoutParentInput[] | undefined;
    connectOrCreate?: InterestTypeCreateOrConnectWithoutParentInput[] | undefined;
    upsert?: InterestTypeUpsertWithWhereUniqueWithoutParentInput[] | undefined;
    connect?: InterestTypeWhereUniqueInput[] | undefined;
    set?: InterestTypeWhereUniqueInput[] | undefined;
    disconnect?: InterestTypeWhereUniqueInput[] | undefined;
    delete?: InterestTypeWhereUniqueInput[] | undefined;
    update?: InterestTypeUpdateWithWhereUniqueWithoutParentInput[] | undefined;
    updateMany?: InterestTypeUpdateManyWithWhereWithoutParentInput[] | undefined;
    deleteMany?: InterestTypeScalarWhereInput[] | undefined;
}
