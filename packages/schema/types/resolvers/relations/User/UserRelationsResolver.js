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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Acter_1 = require("../../../models/Acter");
const ActerConnection_1 = require("../../../models/ActerConnection");
const ActerInterest_1 = require("../../../models/ActerInterest");
const Activity_1 = require("../../../models/Activity");
const Invite_1 = require("../../../models/Invite");
const Link_1 = require("../../../models/Link");
const User_1 = require("../../../models/User");
const UserActerConnectionsArgs_1 = require("./args/UserActerConnectionsArgs");
const UserActerInterestArgs_1 = require("./args/UserActerInterestArgs");
const UserActersCreatedArgs_1 = require("./args/UserActersCreatedArgs");
const UserActersDeletedArgs_1 = require("./args/UserActersDeletedArgs");
const UserActivitiesCreatedArgs_1 = require("./args/UserActivitiesCreatedArgs");
const UserInviteArgs_1 = require("./args/UserInviteArgs");
const UserLinksCreatedArgs_1 = require("./args/UserLinksCreatedArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async Acter(user, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Acter({});
    }
    async ActersCreated(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).ActersCreated(args);
    }
    async ActerConnections(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).ActerConnections(args);
    }
    async LinksCreated(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).LinksCreated(args);
    }
    async ActerInterest(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).ActerInterest(args);
    }
    async ActivitiesCreated(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).ActivitiesCreated(args);
    }
    async ActersDeleted(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).ActersDeleted(args);
    }
    async Invite(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Invite(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Acter_1.Acter, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Acter", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Acter_1.Acter], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserActersCreatedArgs_1.UserActersCreatedArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "ActersCreated", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [ActerConnection_1.ActerConnection], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserActerConnectionsArgs_1.UserActerConnectionsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "ActerConnections", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Link_1.Link], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserLinksCreatedArgs_1.UserLinksCreatedArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "LinksCreated", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [ActerInterest_1.ActerInterest], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserActerInterestArgs_1.UserActerInterestArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "ActerInterest", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Activity_1.Activity], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserActivitiesCreatedArgs_1.UserActivitiesCreatedArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "ActivitiesCreated", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Acter_1.Acter], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserActersDeletedArgs_1.UserActersDeletedArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "ActersDeleted", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Invite_1.Invite], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserInviteArgs_1.UserInviteArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Invite", null);
UserRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
