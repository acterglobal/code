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
exports.ActivityCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateActivityArgs_1 = require("./args/AggregateActivityArgs");
const CreateActivityArgs_1 = require("./args/CreateActivityArgs");
const DeleteActivityArgs_1 = require("./args/DeleteActivityArgs");
const DeleteManyActivityArgs_1 = require("./args/DeleteManyActivityArgs");
const FindFirstActivityArgs_1 = require("./args/FindFirstActivityArgs");
const FindManyActivityArgs_1 = require("./args/FindManyActivityArgs");
const FindUniqueActivityArgs_1 = require("./args/FindUniqueActivityArgs");
const UpdateActivityArgs_1 = require("./args/UpdateActivityArgs");
const UpdateManyActivityArgs_1 = require("./args/UpdateManyActivityArgs");
const UpsertActivityArgs_1 = require("./args/UpsertActivityArgs");
const helpers_1 = require("../../../helpers");
const Activity_1 = require("../../../models/Activity");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateActivity_1 = require("../../outputs/AggregateActivity");
let ActivityCrudResolver = class ActivityCrudResolver {
    async activity(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.findUnique(args);
    }
    async findFirstActivity(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.findFirst(args);
    }
    async activities(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.findMany(args);
    }
    async createActivity(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.create(args);
    }
    async deleteActivity(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.delete(args);
    }
    async updateActivity(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.update(args);
    }
    async deleteManyActivity(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.deleteMany(args);
    }
    async updateManyActivity(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.updateMany(args);
    }
    async upsertActivity(ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.upsert(args);
    }
    async aggregateActivity(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).activity.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Activity_1.Activity, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueActivityArgs_1.FindUniqueActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "activity", null);
__decorate([
    TypeGraphQL.Query(_returns => Activity_1.Activity, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstActivityArgs_1.FindFirstActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "findFirstActivity", null);
__decorate([
    TypeGraphQL.Query(_returns => [Activity_1.Activity], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyActivityArgs_1.FindManyActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "activities", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Activity_1.Activity, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateActivityArgs_1.CreateActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "createActivity", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Activity_1.Activity, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteActivityArgs_1.DeleteActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "deleteActivity", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Activity_1.Activity, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateActivityArgs_1.UpdateActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "updateActivity", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyActivityArgs_1.DeleteManyActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "deleteManyActivity", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyActivityArgs_1.UpdateManyActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "updateManyActivity", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Activity_1.Activity, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertActivityArgs_1.UpsertActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "upsertActivity", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateActivity_1.AggregateActivity, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateActivityArgs_1.AggregateActivityArgs]),
    __metadata("design:returntype", Promise)
], ActivityCrudResolver.prototype, "aggregateActivity", null);
ActivityCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Activity_1.Activity)
], ActivityCrudResolver);
exports.ActivityCrudResolver = ActivityCrudResolver;
