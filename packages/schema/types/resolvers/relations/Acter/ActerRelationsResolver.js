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
exports.ActerRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Acter_1 = require("../../../models/Acter");
const ActerConnection_1 = require("../../../models/ActerConnection");
const ActerInterest_1 = require("../../../models/ActerInterest");
const ActerType_1 = require("../../../models/ActerType");
const Activity_1 = require("../../../models/Activity");
const Invite_1 = require("../../../models/Invite");
const Link_1 = require("../../../models/Link");
const Notification_1 = require("../../../models/Notification");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
const ActerActerInterestsArgs_1 = require("./args/ActerActerInterestsArgs");
const ActerActivitiesOrganizedArgs_1 = require("./args/ActerActivitiesOrganizedArgs");
const ActerAttachedLinksArgs_1 = require("./args/ActerAttachedLinksArgs");
const ActerAttachedPostsArgs_1 = require("./args/ActerAttachedPostsArgs");
const ActerAuthoredPostsArgs_1 = require("./args/ActerAuthoredPostsArgs");
const ActerChildrenArgs_1 = require("./args/ActerChildrenArgs");
const ActerFollowersArgs_1 = require("./args/ActerFollowersArgs");
const ActerFollowingArgs_1 = require("./args/ActerFollowingArgs");
const ActerInviteArgs_1 = require("./args/ActerInviteArgs");
const ActerNotificationsOnArgs_1 = require("./args/ActerNotificationsOnArgs");
const ActerNotificationsToArgs_1 = require("./args/ActerNotificationsToArgs");
const helpers_1 = require("../../../helpers");
let ActerRelationsResolver = class ActerRelationsResolver {
    async ActerInterests(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).ActerInterests(args);
    }
    async createdByUser(acter, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).createdByUser({});
    }
    async DeletedByUser(acter, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).DeletedByUser({});
    }
    async ActerType(acter, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).ActerType({});
    }
    async Parent(acter, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).Parent({});
    }
    async Children(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).Children(args);
    }
    async Following(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).Following(args);
    }
    async Followers(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).Followers(args);
    }
    async User(acter, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).User({});
    }
    async Activity(acter, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).Activity({});
    }
    async ActivitiesOrganized(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).ActivitiesOrganized(args);
    }
    async AttachedPosts(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).AttachedPosts(args);
    }
    async AuthoredPosts(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).AuthoredPosts(args);
    }
    async AttachedLinks(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).AttachedLinks(args);
    }
    async NotificationsTo(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).NotificationsTo(args);
    }
    async NotificationsOn(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).NotificationsOn(args);
    }
    async Invite(acter, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acter.findUnique({
            where: {
                id: acter.id,
            },
        }).Invite(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [ActerInterest_1.ActerInterest], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerActerInterestsArgs_1.ActerActerInterestsArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "ActerInterests", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "createdByUser", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "DeletedByUser", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => ActerType_1.ActerType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "ActerType", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Acter_1.Acter, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "Parent", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Acter_1.Acter], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerChildrenArgs_1.ActerChildrenArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "Children", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [ActerConnection_1.ActerConnection], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerFollowingArgs_1.ActerFollowingArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "Following", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [ActerConnection_1.ActerConnection], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerFollowersArgs_1.ActerFollowersArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "Followers", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "User", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Activity_1.Activity, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "Activity", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Activity_1.Activity], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerActivitiesOrganizedArgs_1.ActerActivitiesOrganizedArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "ActivitiesOrganized", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerAttachedPostsArgs_1.ActerAttachedPostsArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "AttachedPosts", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerAuthoredPostsArgs_1.ActerAuthoredPostsArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "AuthoredPosts", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Link_1.Link], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerAttachedLinksArgs_1.ActerAttachedLinksArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "AttachedLinks", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Notification_1.Notification], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerNotificationsToArgs_1.ActerNotificationsToArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "NotificationsTo", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Notification_1.Notification], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerNotificationsOnArgs_1.ActerNotificationsOnArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "NotificationsOn", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Invite_1.Invite], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acter_1.Acter, Object, ActerInviteArgs_1.ActerInviteArgs]),
    __metadata("design:returntype", Promise)
], ActerRelationsResolver.prototype, "Invite", null);
ActerRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Acter_1.Acter)
], ActerRelationsResolver);
exports.ActerRelationsResolver = ActerRelationsResolver;
