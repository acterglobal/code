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
exports.InterestCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateInterestArgs_1 = require("./args/AggregateInterestArgs");
const CreateInterestArgs_1 = require("./args/CreateInterestArgs");
const CreateManyInterestArgs_1 = require("./args/CreateManyInterestArgs");
const DeleteInterestArgs_1 = require("./args/DeleteInterestArgs");
const DeleteManyInterestArgs_1 = require("./args/DeleteManyInterestArgs");
const FindFirstInterestArgs_1 = require("./args/FindFirstInterestArgs");
const FindManyInterestArgs_1 = require("./args/FindManyInterestArgs");
const FindUniqueInterestArgs_1 = require("./args/FindUniqueInterestArgs");
const GroupByInterestArgs_1 = require("./args/GroupByInterestArgs");
const UpdateInterestArgs_1 = require("./args/UpdateInterestArgs");
const UpdateManyInterestArgs_1 = require("./args/UpdateManyInterestArgs");
const UpsertInterestArgs_1 = require("./args/UpsertInterestArgs");
const helpers_1 = require("../../../helpers");
const Interest_1 = require("../../../models/Interest");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInterest_1 = require("../../outputs/AggregateInterest");
const InterestGroupBy_1 = require("../../outputs/InterestGroupBy");
let InterestCrudResolver = class InterestCrudResolver {
    async interest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstInterest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async interests(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createInterest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyInterest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteInterest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateInterest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyInterest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyInterest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertInterest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateInterest(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).interest.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByInterest(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).interest.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Interest_1.Interest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueInterestArgs_1.FindUniqueInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "interest", null);
__decorate([
    TypeGraphQL.Query(_returns => Interest_1.Interest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstInterestArgs_1.FindFirstInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "findFirstInterest", null);
__decorate([
    TypeGraphQL.Query(_returns => [Interest_1.Interest], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyInterestArgs_1.FindManyInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "interests", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Interest_1.Interest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateInterestArgs_1.CreateInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "createInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyInterestArgs_1.CreateManyInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "createManyInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Interest_1.Interest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteInterestArgs_1.DeleteInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "deleteInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Interest_1.Interest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateInterestArgs_1.UpdateInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "updateInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyInterestArgs_1.DeleteManyInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "deleteManyInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyInterestArgs_1.UpdateManyInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "updateManyInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Interest_1.Interest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertInterestArgs_1.UpsertInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "upsertInterest", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateInterest_1.AggregateInterest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateInterestArgs_1.AggregateInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "aggregateInterest", null);
__decorate([
    TypeGraphQL.Query(_returns => [InterestGroupBy_1.InterestGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByInterestArgs_1.GroupByInterestArgs]),
    __metadata("design:returntype", Promise)
], InterestCrudResolver.prototype, "groupByInterest", null);
InterestCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Interest_1.Interest)
], InterestCrudResolver);
exports.InterestCrudResolver = InterestCrudResolver;
