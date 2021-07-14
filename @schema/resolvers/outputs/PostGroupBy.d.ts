import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
export declare class PostGroupBy {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    parentId: string | null;
    acterId: string;
    authorId: string;
    count: PostCountAggregate | null;
    min: PostMinAggregate | null;
    max: PostMaxAggregate | null;
}
