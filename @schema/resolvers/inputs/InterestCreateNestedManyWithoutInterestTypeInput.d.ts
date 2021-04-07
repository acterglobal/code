import { InterestCreateOrConnectWithoutInterestTypeInput } from "../inputs/InterestCreateOrConnectWithoutInterestTypeInput";
import { InterestCreateWithoutInterestTypeInput } from "../inputs/InterestCreateWithoutInterestTypeInput";
import { InterestWhereUniqueInput } from "../inputs/InterestWhereUniqueInput";
export declare class InterestCreateNestedManyWithoutInterestTypeInput {
    create?: InterestCreateWithoutInterestTypeInput[] | undefined;
    connectOrCreate?: InterestCreateOrConnectWithoutInterestTypeInput[] | undefined;
    connect?: InterestWhereUniqueInput[] | undefined;
}
