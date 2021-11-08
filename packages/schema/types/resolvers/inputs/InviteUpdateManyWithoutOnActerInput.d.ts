import { InviteCreateManyOnActerInputEnvelope } from "../inputs/InviteCreateManyOnActerInputEnvelope";
import { InviteCreateOrConnectWithoutOnActerInput } from "../inputs/InviteCreateOrConnectWithoutOnActerInput";
import { InviteCreateWithoutOnActerInput } from "../inputs/InviteCreateWithoutOnActerInput";
import { InviteScalarWhereInput } from "../inputs/InviteScalarWhereInput";
import { InviteUpdateManyWithWhereWithoutOnActerInput } from "../inputs/InviteUpdateManyWithWhereWithoutOnActerInput";
import { InviteUpdateWithWhereUniqueWithoutOnActerInput } from "../inputs/InviteUpdateWithWhereUniqueWithoutOnActerInput";
import { InviteUpsertWithWhereUniqueWithoutOnActerInput } from "../inputs/InviteUpsertWithWhereUniqueWithoutOnActerInput";
import { InviteWhereUniqueInput } from "../inputs/InviteWhereUniqueInput";
export declare class InviteUpdateManyWithoutOnActerInput {
    create?: InviteCreateWithoutOnActerInput[] | undefined;
    connectOrCreate?: InviteCreateOrConnectWithoutOnActerInput[] | undefined;
    upsert?: InviteUpsertWithWhereUniqueWithoutOnActerInput[] | undefined;
    createMany?: InviteCreateManyOnActerInputEnvelope | undefined;
    connect?: InviteWhereUniqueInput[] | undefined;
    set?: InviteWhereUniqueInput[] | undefined;
    disconnect?: InviteWhereUniqueInput[] | undefined;
    delete?: InviteWhereUniqueInput[] | undefined;
    update?: InviteUpdateWithWhereUniqueWithoutOnActerInput[] | undefined;
    updateMany?: InviteUpdateManyWithWhereWithoutOnActerInput[] | undefined;
    deleteMany?: InviteScalarWhereInput[] | undefined;
}
