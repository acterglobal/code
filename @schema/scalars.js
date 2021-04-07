"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalJSScalar = void 0;
const client_1 = require("@prisma/client");
const graphql_1 = require("graphql");
exports.DecimalJSScalar = new graphql_1.GraphQLScalarType({
    name: "Decimal",
    description: "GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library.",
    serialize: (value) => {
        if (!(value instanceof client_1.Prisma.Decimal)) {
            throw new Error(`[DecimalError] Invalid argument: ${typeof value}. Expected Prisma.Decimal instance.`);
        }
        return value.toString();
    },
    parseValue: (value) => {
        if (!(typeof value === "string")) {
            throw new Error(`[DecimalError] Invalid argument: ${typeof value}. Expected string.`);
        }
        return new client_1.Prisma.Decimal(value);
    },
});
