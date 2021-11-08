"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestTypeCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateInterestTypeArgs_1 = require("./args/AggregateInterestTypeArgs");
const CreateInterestTypeArgs_1 = require("./args/CreateInterestTypeArgs");
const CreateManyInterestTypeArgs_1 = require("./args/CreateManyInterestTypeArgs");
const DeleteInterestTypeArgs_1 = require("./args/DeleteInterestTypeArgs");
const DeleteManyInterestTypeArgs_1 = require("./args/DeleteManyInterestTypeArgs");
const FindFirstInterestTypeArgs_1 = require("./args/FindFirstInterestTypeArgs");
const FindManyInterestTypeArgs_1 = require("./args/FindManyInterestTypeArgs");
const FindUniqueInterestTypeArgs_1 = require("./args/FindUniqueInterestTypeArgs");
const GroupByInterestTypeArgs_1 = require("./args/GroupByInterestTypeArgs");
const UpdateInterestTypeArgs_1 = require("./args/UpdateInterestTypeArgs");
const UpdateManyInterestTypeArgs_1 = require("./args/UpdateManyInterestTypeArgs");
const UpsertInterestTypeArgs_1 = require("./args/UpsertInterestTypeArgs");
const helpers_1 = require("../../../helpers");
const InterestType_1 = require("../../../models/InterestType");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInterestType_1 = require("../../outputs/AggregateInterestType");
const InterestTypeGroupBy_1 = require("../../outputs/InterestTypeGroupBy");
let InterestTypeCrudResolver = class InterestTypeCrudResolver {
    async interestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInterestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async interestTypes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createInterestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyInterestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteInterestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateInterestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInterestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyInterestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertInterestType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateInterestType(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByInterestType(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).interestType.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => InterestType_1.InterestType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueInterestTypeArgs_1.FindUniqueInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "interestType", null);
__decorate([
    TypeGraphQL.Query(_returns => InterestType_1.InterestType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstInterestTypeArgs_1.FindFirstInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "findFirstInterestType", null);
__decorate([
    TypeGraphQL.Query(_returns => [InterestType_1.InterestType], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyInterestTypeArgs_1.FindManyInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "interestTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => InterestType_1.InterestType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateInterestTypeArgs_1.CreateInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "createInterestType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyInterestTypeArgs_1.CreateManyInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "createManyInterestType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => InterestType_1.InterestType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteInterestTypeArgs_1.DeleteInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "deleteInterestType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => InterestType_1.InterestType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateInterestTypeArgs_1.UpdateInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "updateInterestType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyInterestTypeArgs_1.DeleteManyInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "deleteManyInterestType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyInterestTypeArgs_1.UpdateManyInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "updateManyInterestType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => InterestType_1.InterestType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertInterestTypeArgs_1.UpsertInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "upsertInterestType", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateInterestType_1.AggregateInterestType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateInterestTypeArgs_1.AggregateInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "aggregateInterestType", null);
__decorate([
    TypeGraphQL.Query(_returns => [InterestTypeGroupBy_1.InterestTypeGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByInterestTypeArgs_1.GroupByInterestTypeArgs]),
    __metadata("design:returntype", Promise)
], InterestTypeCrudResolver.prototype, "groupByInterestType", null);
InterestTypeCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => InterestType_1.InterestType)
], InterestTypeCrudResolver);
exports.InterestTypeCrudResolver = InterestTypeCrudResolver;
