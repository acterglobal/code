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
exports.ActerTypeCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateActerTypeArgs_1 = require("./args/AggregateActerTypeArgs");
const CreateActerTypeArgs_1 = require("./args/CreateActerTypeArgs");
const CreateManyActerTypeArgs_1 = require("./args/CreateManyActerTypeArgs");
const DeleteActerTypeArgs_1 = require("./args/DeleteActerTypeArgs");
const DeleteManyActerTypeArgs_1 = require("./args/DeleteManyActerTypeArgs");
const FindFirstActerTypeArgs_1 = require("./args/FindFirstActerTypeArgs");
const FindManyActerTypeArgs_1 = require("./args/FindManyActerTypeArgs");
const FindUniqueActerTypeArgs_1 = require("./args/FindUniqueActerTypeArgs");
const GroupByActerTypeArgs_1 = require("./args/GroupByActerTypeArgs");
const UpdateActerTypeArgs_1 = require("./args/UpdateActerTypeArgs");
const UpdateManyActerTypeArgs_1 = require("./args/UpdateManyActerTypeArgs");
const UpsertActerTypeArgs_1 = require("./args/UpsertActerTypeArgs");
const helpers_1 = require("../../../helpers");
const ActerType_1 = require("../../../models/ActerType");
const ActerTypeGroupBy_1 = require("../../outputs/ActerTypeGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateActerType_1 = require("../../outputs/AggregateActerType");
let ActerTypeCrudResolver = class ActerTypeCrudResolver {
    async acterType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstActerType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async acterTypes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createActerType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyActerType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteActerType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateActerType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyActerType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyActerType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertActerType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateActerType(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByActerType(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => ActerType_1.ActerType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueActerTypeArgs_1.FindUniqueActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "acterType", null);
__decorate([
    TypeGraphQL.Query(_returns => ActerType_1.ActerType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstActerTypeArgs_1.FindFirstActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "findFirstActerType", null);
__decorate([
    TypeGraphQL.Query(_returns => [ActerType_1.ActerType], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyActerTypeArgs_1.FindManyActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "acterTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerType_1.ActerType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateActerTypeArgs_1.CreateActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "createActerType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyActerTypeArgs_1.CreateManyActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "createManyActerType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerType_1.ActerType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteActerTypeArgs_1.DeleteActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "deleteActerType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerType_1.ActerType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateActerTypeArgs_1.UpdateActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "updateActerType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyActerTypeArgs_1.DeleteManyActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "deleteManyActerType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyActerTypeArgs_1.UpdateManyActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "updateManyActerType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerType_1.ActerType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertActerTypeArgs_1.UpsertActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "upsertActerType", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateActerType_1.AggregateActerType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateActerTypeArgs_1.AggregateActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "aggregateActerType", null);
__decorate([
    TypeGraphQL.Query(_returns => [ActerTypeGroupBy_1.ActerTypeGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByActerTypeArgs_1.GroupByActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeCrudResolver.prototype, "groupByActerType", null);
ActerTypeCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => ActerType_1.ActerType)
], ActerTypeCrudResolver);
exports.ActerTypeCrudResolver = ActerTypeCrudResolver;
