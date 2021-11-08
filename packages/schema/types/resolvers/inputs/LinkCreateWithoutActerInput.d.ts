import { UserCreateNestedOneWithoutLinksCreatedInput } from "../inputs/UserCreateNestedOneWithoutLinksCreatedInput";
export declare class LinkCreateWithoutActerInput {
    id?: string | undefined;
    name: string;
    url: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    createdByUser: UserCreateNestedOneWithoutLinksCreatedInput;
}
