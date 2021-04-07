"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaFromContext = exports.transformFields = void 0;
function transformFields(fields) {
    return Object.fromEntries(Object.entries(fields)
        // remove __typename and others
        .filter(([key, value]) => !key.startsWith("__"))
        .map(([key, value]) => {
        if (Object.keys(value).length === 0) {
            return [key, true];
        }
        return [key, transformFields(value)];
    }));
}
exports.transformFields = transformFields;
function getPrismaFromContext(context) {
    const prismaClient = context.prisma;
    if (!prismaClient) {
        throw new Error("Unable to find Prisma Client in GraphQL context. Please provide it under the `context.prisma` key.");
    }
    return prismaClient;
}
exports.getPrismaFromContext = getPrismaFromContext;
