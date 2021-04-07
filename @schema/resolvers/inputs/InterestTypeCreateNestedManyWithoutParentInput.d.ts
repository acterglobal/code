import { InterestTypeCreateOrConnectWithoutParentInput } from "../inputs/InterestTypeCreateOrConnectWithoutParentInput";
import { InterestTypeCreateWithoutParentInput } from "../inputs/InterestTypeCreateWithoutParentInput";
import { InterestTypeWhereUniqueInput } from "../inputs/InterestTypeWhereUniqueInput";
export declare class InterestTypeCreateNestedManyWithoutParentInput {
    create?: InterestTypeCreateWithoutParentInput[] | undefined;
    connectOrCreate?: InterestTypeCreateOrConnectWithoutParentInput[] | undefined;
    connect?: InterestTypeWhereUniqueInput[] | undefined;
}
