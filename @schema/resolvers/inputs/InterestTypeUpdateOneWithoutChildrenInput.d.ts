import { InterestTypeCreateOrConnectWithoutChildrenInput } from "../inputs/InterestTypeCreateOrConnectWithoutChildrenInput";
import { InterestTypeCreateWithoutChildrenInput } from "../inputs/InterestTypeCreateWithoutChildrenInput";
import { InterestTypeUpdateWithoutChildrenInput } from "../inputs/InterestTypeUpdateWithoutChildrenInput";
import { InterestTypeUpsertWithoutChildrenInput } from "../inputs/InterestTypeUpsertWithoutChildrenInput";
import { InterestTypeWhereUniqueInput } from "../inputs/InterestTypeWhereUniqueInput";
export declare class InterestTypeUpdateOneWithoutChildrenInput {
    create?: InterestTypeCreateWithoutChildrenInput | undefined;
    connectOrCreate?: InterestTypeCreateOrConnectWithoutChildrenInput | undefined;
    upsert?: InterestTypeUpsertWithoutChildrenInput | undefined;
    connect?: InterestTypeWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: InterestTypeUpdateWithoutChildrenInput | undefined;
}
