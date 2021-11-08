import { InterestTypeCreateManyParentInputEnvelope } from "../inputs/InterestTypeCreateManyParentInputEnvelope";
import { InterestTypeCreateOrConnectWithoutParentInput } from "../inputs/InterestTypeCreateOrConnectWithoutParentInput";
import { InterestTypeCreateWithoutParentInput } from "../inputs/InterestTypeCreateWithoutParentInput";
import { InterestTypeWhereUniqueInput } from "../inputs/InterestTypeWhereUniqueInput";
export declare class InterestTypeCreateNestedManyWithoutParentInput {
    create?: InterestTypeCreateWithoutParentInput[] | undefined;
    connectOrCreate?: InterestTypeCreateOrConnectWithoutParentInput[] | undefined;
    createMany?: InterestTypeCreateManyParentInputEnvelope | undefined;
    connect?: InterestTypeWhereUniqueInput[] | undefined;
}
