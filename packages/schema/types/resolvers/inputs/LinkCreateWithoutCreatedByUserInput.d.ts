import { ActerCreateNestedOneWithoutAttachedLinksInput } from "../inputs/ActerCreateNestedOneWithoutAttachedLinksInput";
export declare class LinkCreateWithoutCreatedByUserInput {
    id?: string | undefined;
    name: string;
    url: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Acter: ActerCreateNestedOneWithoutAttachedLinksInput;
}
