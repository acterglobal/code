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
exports.ActivityRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Acter_1 = require("../../../models/Acter");
const Activity_1 = require("../../../models/Activity");
const ActivityType_1 = require("../../../models/ActivityType");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ActivityRelationsResolver = class ActivityRelationsResolver {
    async ActivityType(activity, ctx) {
        return helpers_1.getPrismaFromContext(ctx).activity.findUnique({
            where: {
                id: activity.id,
            },
        }).ActivityType({});
    }
    async createdByUser(activity, ctx) {
        return helpers_1.getPrismaFromContext(ctx).activity.findUnique({
            where: {
                id: activity.id,
            },
        }).createdByUser({});
    }
    async Acter(activity, ctx) {
        return helpers_1.getPrismaFromContext(ctx).activity.findUnique({
            where: {
                id: activity.id,
            },
        }).Acter({});
    }
    async Organiser(activity, ctx) {
        return helpers_1.getPrismaFromContext(ctx).activity.findUnique({
            where: {
                id: activity.id,
            },
        }).Organiser({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => ActivityType_1.ActivityType, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Activity_1.Activity, Object]),
    __metadata("design:returntype", Promise)
], ActivityRelationsResolver.prototype, "ActivityType", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Activity_1.Activity, Object]),
    __metadata("design:returntype", Promise)
], ActivityRelationsResolver.prototype, "createdByUser", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Acter_1.Acter, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Activity_1.Activity, Object]),
    __metadata("design:returntype", Promise)
], ActivityRelationsResolver.prototype, "Acter", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Acter_1.Acter, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Activity_1.Activity, Object]),
    __metadata("design:returntype", Promise)
], ActivityRelationsResolver.prototype, "Organiser", null);
ActivityRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Activity_1.Activity)
], ActivityRelationsResolver);
exports.ActivityRelationsResolver = ActivityRelationsResolver;
