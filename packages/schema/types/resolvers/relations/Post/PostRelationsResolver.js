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
exports.PostRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Acter_1 = require("../../../models/Acter");
const Notification_1 = require("../../../models/Notification");
const Post_1 = require("../../../models/Post");
const PostCommentsArgs_1 = require("./args/PostCommentsArgs");
const PostNotificationArgs_1 = require("./args/PostNotificationArgs");
const helpers_1 = require("../../../helpers");
let PostRelationsResolver = class PostRelationsResolver {
    async Parent(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Parent({});
    }
    async Comments(post, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Comments(args);
    }
    async Acter(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Acter({});
    }
    async Author(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Author({});
    }
    async Notification(post, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Notification(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object]),
    __metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Parent", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object, PostCommentsArgs_1.PostCommentsArgs]),
    __metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Comments", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Acter_1.Acter, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object]),
    __metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Acter", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Acter_1.Acter, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object]),
    __metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Author", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Notification_1.Notification], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object, PostNotificationArgs_1.PostNotificationArgs]),
    __metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Notification", null);
PostRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostRelationsResolver);
exports.PostRelationsResolver = PostRelationsResolver;
