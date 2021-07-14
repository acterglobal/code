import { ActivityCreateManyOrganiserInputEnvelope } from "../inputs/ActivityCreateManyOrganiserInputEnvelope";
import { ActivityCreateOrConnectWithoutOrganiserInput } from "../inputs/ActivityCreateOrConnectWithoutOrganiserInput";
import { ActivityCreateWithoutOrganiserInput } from "../inputs/ActivityCreateWithoutOrganiserInput";
import { ActivityScalarWhereInput } from "../inputs/ActivityScalarWhereInput";
import { ActivityUpdateManyWithWhereWithoutOrganiserInput } from "../inputs/ActivityUpdateManyWithWhereWithoutOrganiserInput";
import { ActivityUpdateWithWhereUniqueWithoutOrganiserInput } from "../inputs/ActivityUpdateWithWhereUniqueWithoutOrganiserInput";
import { ActivityUpsertWithWhereUniqueWithoutOrganiserInput } from "../inputs/ActivityUpsertWithWhereUniqueWithoutOrganiserInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";
export declare class ActivityUpdateManyWithoutOrganiserInput {
    create?: ActivityCreateWithoutOrganiserInput[] | undefined;
    connectOrCreate?: ActivityCreateOrConnectWithoutOrganiserInput[] | undefined;
    upsert?: ActivityUpsertWithWhereUniqueWithoutOrganiserInput[] | undefined;
    createMany?: ActivityCreateManyOrganiserInputEnvelope | undefined;
    connect?: ActivityWhereUniqueInput[] | undefined;
    set?: ActivityWhereUniqueInput[] | undefined;
    disconnect?: ActivityWhereUniqueInput[] | undefined;
    delete?: ActivityWhereUniqueInput[] | undefined;
    update?: ActivityUpdateWithWhereUniqueWithoutOrganiserInput[] | undefined;
    updateMany?: ActivityUpdateManyWithWhereWithoutOrganiserInput[] | undefined;
    deleteMany?: ActivityScalarWhereInput[] | undefined;
}
