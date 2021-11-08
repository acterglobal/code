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
exports.InviteCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateInviteArgs_1 = require("./args/AggregateInviteArgs");
const CreateInviteArgs_1 = require("./args/CreateInviteArgs");
const CreateManyInviteArgs_1 = require("./args/CreateManyInviteArgs");
const DeleteInviteArgs_1 = require("./args/DeleteInviteArgs");
const DeleteManyInviteArgs_1 = require("./args/DeleteManyInviteArgs");
const FindFirstInviteArgs_1 = require("./args/FindFirstInviteArgs");
const FindManyInviteArgs_1 = require("./args/FindManyInviteArgs");
const FindUniqueInviteArgs_1 = require("./args/FindUniqueInviteArgs");
const GroupByInviteArgs_1 = require("./args/GroupByInviteArgs");
const UpdateInviteArgs_1 = require("./args/UpdateInviteArgs");
const UpdateManyInviteArgs_1 = require("./args/UpdateManyInviteArgs");
const UpsertInviteArgs_1 = require("./args/UpsertInviteArgs");
const helpers_1 = require("../../../helpers");
const Invite_1 = require("../../../models/Invite");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInvite_1 = require("../../outputs/AggregateInvite");
const InviteGroupBy_1 = require("../../outputs/InviteGroupBy");
let InviteCrudResolver = class InviteCrudResolver {
    async invite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInvite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async invites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createInvite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyInvite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteInvite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateInvite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInvite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyInvite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertInvite(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateInvite(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByInvite(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invite.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Invite_1.Invite, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueInviteArgs_1.FindUniqueInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "invite", null);
__decorate([
    TypeGraphQL.Query(_returns => Invite_1.Invite, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstInviteArgs_1.FindFirstInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "findFirstInvite", null);
__decorate([
    TypeGraphQL.Query(_returns => [Invite_1.Invite], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyInviteArgs_1.FindManyInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "invites", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Invite_1.Invite, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateInviteArgs_1.CreateInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "createInvite", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyInviteArgs_1.CreateManyInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "createManyInvite", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Invite_1.Invite, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteInviteArgs_1.DeleteInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "deleteInvite", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Invite_1.Invite, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateInviteArgs_1.UpdateInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "updateInvite", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyInviteArgs_1.DeleteManyInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "deleteManyInvite", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyInviteArgs_1.UpdateManyInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "updateManyInvite", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Invite_1.Invite, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertInviteArgs_1.UpsertInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "upsertInvite", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateInvite_1.AggregateInvite, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateInviteArgs_1.AggregateInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "aggregateInvite", null);
__decorate([
    TypeGraphQL.Query(_returns => [InviteGroupBy_1.InviteGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByInviteArgs_1.GroupByInviteArgs]),
    __metadata("design:returntype", Promise)
], InviteCrudResolver.prototype, "groupByInvite", null);
InviteCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Invite_1.Invite)
], InviteCrudResolver);
exports.InviteCrudResolver = InviteCrudResolver;
