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
exports.ActerCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateActerArgs_1 = require("./args/AggregateActerArgs");
const CreateActerArgs_1 = require("./args/CreateActerArgs");
const DeleteActerArgs_1 = require("./args/DeleteActerArgs");
const DeleteManyActerArgs_1 = require("./args/DeleteManyActerArgs");
const FindFirstActerArgs_1 = require("./args/FindFirstActerArgs");
const FindManyActerArgs_1 = require("./args/FindManyActerArgs");
const FindUniqueActerArgs_1 = require("./args/FindUniqueActerArgs");
const UpdateActerArgs_1 = require("./args/UpdateActerArgs");
const UpdateManyActerArgs_1 = require("./args/UpdateManyActerArgs");
const UpsertActerArgs_1 = require("./args/UpsertActerArgs");
const helpers_1 = require("../../../helpers");
const Acter_1 = require("../../../models/Acter");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateActer_1 = require("../../outputs/AggregateActer");
let ActerCrudResolver = class ActerCrudResolver {
    async acter(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.findUnique(args);
    }
    async findFirstActer(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.findFirst(args);
    }
    async acters(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.findMany(args);
    }
    async createActer(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.create(args);
    }
    async deleteActer(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.delete(args);
    }
    async updateActer(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.update(args);
    }
    async deleteManyActer(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.deleteMany(args);
    }
    async updateManyActer(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.updateMany(args);
    }
    async upsertActer(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.upsert(args);
    }
    async aggregateActer(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).acter.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Acter_1.Acter, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueActerArgs_1.FindUniqueActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "acter", null);
__decorate([
    TypeGraphQL.Query(_returns => Acter_1.Acter, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstActerArgs_1.FindFirstActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "findFirstActer", null);
__decorate([
    TypeGraphQL.Query(_returns => [Acter_1.Acter], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyActerArgs_1.FindManyActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "acters", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Acter_1.Acter, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateActerArgs_1.CreateActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "createActer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Acter_1.Acter, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteActerArgs_1.DeleteActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "deleteActer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Acter_1.Acter, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateActerArgs_1.UpdateActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "updateActer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyActerArgs_1.DeleteManyActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "deleteManyActer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyActerArgs_1.UpdateManyActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "updateManyActer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Acter_1.Acter, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertActerArgs_1.UpsertActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "upsertActer", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateActer_1.AggregateActer, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateActerArgs_1.AggregateActerArgs]),
    __metadata("design:returntype", Promise)
], ActerCrudResolver.prototype, "aggregateActer", null);
ActerCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Acter_1.Acter)
], ActerCrudResolver);
exports.ActerCrudResolver = ActerCrudResolver;
