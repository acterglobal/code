import { ActerCreateNestedOneWithoutAttachedLinksInput } from "../inputs/ActerCreateNestedOneWithoutAttachedLinksInput";
import { UserCreateNestedOneWithoutLinksCreatedInput } from "../inputs/UserCreateNestedOneWithoutLinksCreatedInput";
export declare class LinkCreateInput {
    id?: string | undefined;
    name: string;
    url: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Acter: ActerCreateNestedOneWithoutAttachedLinksInput;
    createdByUser: UserCreateNestedOneWithoutLinksCreatedInput;
}
