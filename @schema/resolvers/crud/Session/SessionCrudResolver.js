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
exports.SessionCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateSessionArgs_1 = require("./args/AggregateSessionArgs");
const CreateSessionArgs_1 = require("./args/CreateSessionArgs");
const DeleteManySessionArgs_1 = require("./args/DeleteManySessionArgs");
const DeleteSessionArgs_1 = require("./args/DeleteSessionArgs");
const FindFirstSessionArgs_1 = require("./args/FindFirstSessionArgs");
const FindManySessionArgs_1 = require("./args/FindManySessionArgs");
const FindUniqueSessionArgs_1 = require("./args/FindUniqueSessionArgs");
const UpdateManySessionArgs_1 = require("./args/UpdateManySessionArgs");
const UpdateSessionArgs_1 = require("./args/UpdateSessionArgs");
const UpsertSessionArgs_1 = require("./args/UpsertSessionArgs");
const helpers_1 = require("../../../helpers");
const Session_1 = require("../../../models/Session");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSession_1 = require("../../outputs/AggregateSession");
let SessionCrudResolver = class SessionCrudResolver {
    async session(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.findUnique(args);
    }
    async findFirstSession(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.findFirst(args);
    }
    async sessions(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.findMany(args);
    }
    async createSession(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.create(args);
    }
    async deleteSession(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.delete(args);
    }
    async updateSession(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.update(args);
    }
    async deleteManySession(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.deleteMany(args);
    }
    async updateManySession(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.updateMany(args);
    }
    async upsertSession(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).session.upsert(args);
    }
    async aggregateSession(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).session.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Session_1.Session, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueSessionArgs_1.FindUniqueSessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "session", null);
__decorate([
    TypeGraphQL.Query(_returns => Session_1.Session, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstSessionArgs_1.FindFirstSessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "findFirstSession", null);
__decorate([
    TypeGraphQL.Query(_returns => [Session_1.Session], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManySessionArgs_1.FindManySessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "sessions", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateSessionArgs_1.CreateSessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "createSession", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteSessionArgs_1.DeleteSessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "deleteSession", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateSessionArgs_1.UpdateSessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "updateSession", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManySessionArgs_1.DeleteManySessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "deleteManySession", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManySessionArgs_1.UpdateManySessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "updateManySession", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertSessionArgs_1.UpsertSessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "upsertSession", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSession_1.AggregateSession, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSessionArgs_1.AggregateSessionArgs]),
    __metadata("design:returntype", Promise)
], SessionCrudResolver.prototype, "aggregateSession", null);
SessionCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], SessionCrudResolver);
exports.SessionCrudResolver = SessionCrudResolver;
