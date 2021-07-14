import { InterestTypeCreateOrConnectWithoutInterestsInput } from "../inputs/InterestTypeCreateOrConnectWithoutInterestsInput";
import { InterestTypeCreateWithoutInterestsInput } from "../inputs/InterestTypeCreateWithoutInterestsInput";
import { InterestTypeWhereUniqueInput } from "../inputs/InterestTypeWhereUniqueInput";
export declare class InterestTypeCreateNestedOneWithoutInterestsInput {
    create?: InterestTypeCreateWithoutInterestsInput | undefined;
    connectOrCreate?: InterestTypeCreateOrConnectWithoutInterestsInput | undefined;
    connect?: InterestTypeWhereUniqueInput | undefined;
}
