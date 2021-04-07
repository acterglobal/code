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
exports.ActerInterestCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateActerInterestArgs_1 = require("./args/AggregateActerInterestArgs");
const CreateActerInterestArgs_1 = require("./args/CreateActerInterestArgs");
const DeleteActerInterestArgs_1 = require("./args/DeleteActerInterestArgs");
const DeleteManyActerInterestArgs_1 = require("./args/DeleteManyActerInterestArgs");
const FindFirstActerInterestArgs_1 = require("./args/FindFirstActerInterestArgs");
const FindManyActerInterestArgs_1 = require("./args/FindManyActerInterestArgs");
const FindUniqueActerInterestArgs_1 = require("./args/FindUniqueActerInterestArgs");
const UpdateActerInterestArgs_1 = require("./args/UpdateActerInterestArgs");
const UpdateManyActerInterestArgs_1 = require("./args/UpdateManyActerInterestArgs");
const UpsertActerInterestArgs_1 = require("./args/UpsertActerInterestArgs");
const helpers_1 = require("../../../helpers");
const ActerInterest_1 = require("../../../models/ActerInterest");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateActerInterest_1 = require("../../outputs/AggregateActerInterest");
let ActerInterestCrudResolver = class ActerInterestCrudResolver {
    async acterInterest(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.findUnique(args);
    }
    async findFirstActerInterest(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.findFirst(args);
    }
    async acterInterests(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.findMany(args);
    }
    async createActerInterest(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.create(args);
    }
    async deleteActerInterest(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.delete(args);
    }
    async updateActerInterest(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.update(args);
    }
    async deleteManyActerInterest(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.deleteMany(args);
    }
    async updateManyActerInterest(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.updateMany(args);
    }
    async upsertActerInterest(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.upsert(args);
    }
    async aggregateActerInterest(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).acterInterest.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => ActerInterest_1.ActerInterest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueActerInterestArgs_1.FindUniqueActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "acterInterest", null);
__decorate([
    TypeGraphQL.Query(_returns => ActerInterest_1.ActerInterest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstActerInterestArgs_1.FindFirstActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "findFirstActerInterest", null);
__decorate([
    TypeGraphQL.Query(_returns => [ActerInterest_1.ActerInterest], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyActerInterestArgs_1.FindManyActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "acterInterests", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerInterest_1.ActerInterest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateActerInterestArgs_1.CreateActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "createActerInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerInterest_1.ActerInterest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteActerInterestArgs_1.DeleteActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "deleteActerInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerInterest_1.ActerInterest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateActerInterestArgs_1.UpdateActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "updateActerInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyActerInterestArgs_1.DeleteManyActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "deleteManyActerInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyActerInterestArgs_1.UpdateManyActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "updateManyActerInterest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerInterest_1.ActerInterest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertActerInterestArgs_1.UpsertActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "upsertActerInterest", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateActerInterest_1.AggregateActerInterest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateActerInterestArgs_1.AggregateActerInterestArgs]),
    __metadata("design:returntype", Promise)
], ActerInterestCrudResolver.prototype, "aggregateActerInterest", null);
ActerInterestCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => ActerInterest_1.ActerInterest)
], ActerInterestCrudResolver);
exports.ActerInterestCrudResolver = ActerInterestCrudResolver;
