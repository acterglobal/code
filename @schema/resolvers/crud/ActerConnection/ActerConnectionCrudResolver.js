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
exports.ActerConnectionCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateActerConnectionArgs_1 = require("./args/AggregateActerConnectionArgs");
const CreateActerConnectionArgs_1 = require("./args/CreateActerConnectionArgs");
const DeleteActerConnectionArgs_1 = require("./args/DeleteActerConnectionArgs");
const DeleteManyActerConnectionArgs_1 = require("./args/DeleteManyActerConnectionArgs");
const FindFirstActerConnectionArgs_1 = require("./args/FindFirstActerConnectionArgs");
const FindManyActerConnectionArgs_1 = require("./args/FindManyActerConnectionArgs");
const FindUniqueActerConnectionArgs_1 = require("./args/FindUniqueActerConnectionArgs");
const UpdateActerConnectionArgs_1 = require("./args/UpdateActerConnectionArgs");
const UpdateManyActerConnectionArgs_1 = require("./args/UpdateManyActerConnectionArgs");
const UpsertActerConnectionArgs_1 = require("./args/UpsertActerConnectionArgs");
const helpers_1 = require("../../../helpers");
const ActerConnection_1 = require("../../../models/ActerConnection");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateActerConnection_1 = require("../../outputs/AggregateActerConnection");
let ActerConnectionCrudResolver = class ActerConnectionCrudResolver {
    async acterConnection(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.findUnique(args);
    }
    async findFirstActerConnection(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.findFirst(args);
    }
    async acterConnections(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.findMany(args);
    }
    async createActerConnection(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.create(args);
    }
    async deleteActerConnection(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.delete(args);
    }
    async updateActerConnection(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.update(args);
    }
    async deleteManyActerConnection(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.deleteMany(args);
    }
    async updateManyActerConnection(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.updateMany(args);
    }
    async upsertActerConnection(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.upsert(args);
    }
    async aggregateActerConnection(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).acterConnection.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => ActerConnection_1.ActerConnection, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueActerConnectionArgs_1.FindUniqueActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "acterConnection", null);
__decorate([
    TypeGraphQL.Query(_returns => ActerConnection_1.ActerConnection, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstActerConnectionArgs_1.FindFirstActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "findFirstActerConnection", null);
__decorate([
    TypeGraphQL.Query(_returns => [ActerConnection_1.ActerConnection], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyActerConnectionArgs_1.FindManyActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "acterConnections", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerConnection_1.ActerConnection, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateActerConnectionArgs_1.CreateActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "createActerConnection", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerConnection_1.ActerConnection, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteActerConnectionArgs_1.DeleteActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "deleteActerConnection", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerConnection_1.ActerConnection, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateActerConnectionArgs_1.UpdateActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "updateActerConnection", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyActerConnectionArgs_1.DeleteManyActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "deleteManyActerConnection", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyActerConnectionArgs_1.UpdateManyActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "updateManyActerConnection", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ActerConnection_1.ActerConnection, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertActerConnectionArgs_1.UpsertActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "upsertActerConnection", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateActerConnection_1.AggregateActerConnection, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateActerConnectionArgs_1.AggregateActerConnectionArgs]),
    __metadata("design:returntype", Promise)
], ActerConnectionCrudResolver.prototype, "aggregateActerConnection", null);
ActerConnectionCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => ActerConnection_1.ActerConnection)
], ActerConnectionCrudResolver);
exports.ActerConnectionCrudResolver = ActerConnectionCrudResolver;
