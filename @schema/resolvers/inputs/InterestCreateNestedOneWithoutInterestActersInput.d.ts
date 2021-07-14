import { InterestCreateOrConnectWithoutInterestActersInput } from "../inputs/InterestCreateOrConnectWithoutInterestActersInput";
import { InterestCreateWithoutInterestActersInput } from "../inputs/InterestCreateWithoutInterestActersInput";
import { InterestWhereUniqueInput } from "../inputs/InterestWhereUniqueInput";
export declare class InterestCreateNestedOneWithoutInterestActersInput {
    create?: InterestCreateWithoutInterestActersInput | undefined;
    connectOrCreate?: InterestCreateOrConnectWithoutInterestActersInput | undefined;
    connect?: InterestWhereUniqueInput | undefined;
}
