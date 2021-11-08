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
exports.ActivityTypeCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateActivityTypeArgs_1 = require("./args/AggregateActivityTypeArgs");
const CreateActivityTypeArgs_1 = require("./args/CreateActivityTypeArgs");
const CreateManyActivityTypeArgs_1 = require("./args/CreateManyActivityTypeArgs");
const DeleteActivityTypeArgs_1 = require("./args/DeleteActivityTypeArgs");
const DeleteManyActivityTypeArgs_1 = require("./args/DeleteManyActivityTypeArgs");
const FindFirstActivityTypeArgs_1 = require("./args/FindFirstActivityTypeArgs");
const FindManyActivityTypeArgs_1 = require("./args/FindManyActivityTypeArgs");
const FindUniqueActivityTypeArgs_1 = require("./args/FindUniqueActivityTypeArgs");
const GroupByActivityTypeArgs_1 = require("./args/GroupByActivityTypeArgs");
const UpdateActivityTypeArgs_1 = require("./args/UpdateActivityTypeArgs");
const UpdateManyActivityTypeArgs_1 = require("./args/UpdateManyActivityTypeArgs");
const UpsertActivityTypeArgs_1 = require("./args/UpsertActivityTypeArgs");
const helpers_1 = require("../../../helpers");
const ActivityType_1 = require("../../../models/ActivityType");
const ActivityTypeGroupBy_1 = require("../../outputs/ActivityTypeGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateActivityType_1 = require("../../outputs/AggregateActivityType");
let ActivityTypeCrudResolver = class ActivityTypeCrudResolver {
    async activityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstActivityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async activityTypes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createActivityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyActivityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteActivityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateActivityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyActivityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyActivityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertActivityType(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateActivityType(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByActivityType(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).activityType.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => ActivityType_1.ActivityType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueActivityTypeArgs_1.FindUniqueActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "activityType", null);
__decorate([
    TypeGraphQL.Query(_returns => ActivityType_1.ActivityType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstActivityTypeArgs_1.FindFirstActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "findFirstActivityType", null);
__decorate([
    TypeGraphQL.Query(_returns => [ActivityType_1.ActivityType], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyActivityTypeArgs_1.FindManyActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "activityTypes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActivityType_1.ActivityType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateActivityTypeArgs_1.CreateActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "createActivityType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyActivityTypeArgs_1.CreateManyActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "createManyActivityType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActivityType_1.ActivityType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteActivityTypeArgs_1.DeleteActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "deleteActivityType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActivityType_1.ActivityType, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateActivityTypeArgs_1.UpdateActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "updateActivityType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyActivityTypeArgs_1.DeleteManyActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "deleteManyActivityType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyActivityTypeArgs_1.UpdateManyActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "updateManyActivityType", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActivityType_1.ActivityType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertActivityTypeArgs_1.UpsertActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "upsertActivityType", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateActivityType_1.AggregateActivityType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateActivityTypeArgs_1.AggregateActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "aggregateActivityType", null);
__decorate([
    TypeGraphQL.Query(_returns => [ActivityTypeGroupBy_1.ActivityTypeGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByActivityTypeArgs_1.GroupByActivityTypeArgs]),
    __metadata("design:returntype", Promise)
], ActivityTypeCrudResolver.prototype, "groupByActivityType", null);
ActivityTypeCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => ActivityType_1.ActivityType)
], ActivityTypeCrudResolver);
exports.ActivityTypeCrudResolver = ActivityTypeCrudResolver;
