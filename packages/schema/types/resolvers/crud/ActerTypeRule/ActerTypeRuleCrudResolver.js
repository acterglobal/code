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
exports.ActerTypeRuleCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateActerTypeRuleArgs_1 = require("./args/AggregateActerTypeRuleArgs");
const CreateActerTypeRuleArgs_1 = require("./args/CreateActerTypeRuleArgs");
const CreateManyActerTypeRuleArgs_1 = require("./args/CreateManyActerTypeRuleArgs");
const DeleteActerTypeRuleArgs_1 = require("./args/DeleteActerTypeRuleArgs");
const DeleteManyActerTypeRuleArgs_1 = require("./args/DeleteManyActerTypeRuleArgs");
const FindFirstActerTypeRuleArgs_1 = require("./args/FindFirstActerTypeRuleArgs");
const FindManyActerTypeRuleArgs_1 = require("./args/FindManyActerTypeRuleArgs");
const FindUniqueActerTypeRuleArgs_1 = require("./args/FindUniqueActerTypeRuleArgs");
const GroupByActerTypeRuleArgs_1 = require("./args/GroupByActerTypeRuleArgs");
const UpdateActerTypeRuleArgs_1 = require("./args/UpdateActerTypeRuleArgs");
const UpdateManyActerTypeRuleArgs_1 = require("./args/UpdateManyActerTypeRuleArgs");
const UpsertActerTypeRuleArgs_1 = require("./args/UpsertActerTypeRuleArgs");
const helpers_1 = require("../../../helpers");
const ActerTypeRule_1 = require("../../../models/ActerTypeRule");
const ActerTypeRuleGroupBy_1 = require("../../outputs/ActerTypeRuleGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateActerTypeRule_1 = require("../../outputs/AggregateActerTypeRule");
let ActerTypeRuleCrudResolver = class ActerTypeRuleCrudResolver {
    async acterTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstActerTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async acterTypeRules(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createActerTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyActerTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteActerTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateActerTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyActerTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyActerTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertActerTypeRule(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateActerTypeRule(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByActerTypeRule(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).acterTypeRule.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => ActerTypeRule_1.ActerTypeRule, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueActerTypeRuleArgs_1.FindUniqueActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "acterTypeRule", null);
__decorate([
    TypeGraphQL.Query(_returns => ActerTypeRule_1.ActerTypeRule, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstActerTypeRuleArgs_1.FindFirstActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "findFirstActerTypeRule", null);
__decorate([
    TypeGraphQL.Query(_returns => [ActerTypeRule_1.ActerTypeRule], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyActerTypeRuleArgs_1.FindManyActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "acterTypeRules", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerTypeRule_1.ActerTypeRule, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateActerTypeRuleArgs_1.CreateActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "createActerTypeRule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyActerTypeRuleArgs_1.CreateManyActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "createManyActerTypeRule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerTypeRule_1.ActerTypeRule, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteActerTypeRuleArgs_1.DeleteActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "deleteActerTypeRule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerTypeRule_1.ActerTypeRule, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateActerTypeRuleArgs_1.UpdateActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "updateActerTypeRule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyActerTypeRuleArgs_1.DeleteManyActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "deleteManyActerTypeRule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyActerTypeRuleArgs_1.UpdateManyActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "updateManyActerTypeRule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerTypeRule_1.ActerTypeRule, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertActerTypeRuleArgs_1.UpsertActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "upsertActerTypeRule", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateActerTypeRule_1.AggregateActerTypeRule, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateActerTypeRuleArgs_1.AggregateActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "aggregateActerTypeRule", null);
__decorate([
    TypeGraphQL.Query(_returns => [ActerTypeRuleGroupBy_1.ActerTypeRuleGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByActerTypeRuleArgs_1.GroupByActerTypeRuleArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRuleCrudResolver.prototype, "groupByActerTypeRule", null);
ActerTypeRuleCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => ActerTypeRule_1.ActerTypeRule)
], ActerTypeRuleCrudResolver);
exports.ActerTypeRuleCrudResolver = ActerTypeRuleCrudResolver;
