import { InterestTypeCreateOrConnectWithoutChildrenInput } from "../inputs/InterestTypeCreateOrConnectWithoutChildrenInput";
import { InterestTypeCreateWithoutChildrenInput } from "../inputs/InterestTypeCreateWithoutChildrenInput";
import { InterestTypeWhereUniqueInput } from "../inputs/InterestTypeWhereUniqueInput";
export declare class InterestTypeCreateNestedOneWithoutChildrenInput {
    create?: InterestTypeCreateWithoutChildrenInput | undefined;
    connectOrCreate?: InterestTypeCreateOrConnectWithoutChildrenInput | undefined;
    connect?: InterestTypeWhereUniqueInput | undefined;
}
