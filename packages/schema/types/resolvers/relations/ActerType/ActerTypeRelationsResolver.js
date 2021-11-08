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
exports.ActerTypeRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Acter_1 = require("../../../models/Acter");
const ActerType_1 = require("../../../models/ActerType");
const ActerTypeRule_1 = require("../../../models/ActerTypeRule");
const ActerTypeActerArgs_1 = require("./args/ActerTypeActerArgs");
const ActerTypeActerTypeRulesArgs_1 = require("./args/ActerTypeActerTypeRulesArgs");
const ActerTypeRulesOnActerTypeArgs_1 = require("./args/ActerTypeRulesOnActerTypeArgs");
const helpers_1 = require("../../../helpers");
let ActerTypeRelationsResolver = class ActerTypeRelationsResolver {
    async Acter(acterType, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.findUnique({
            where: {
                id: acterType.id,
            },
        }).Acter(args);
    }
    async ActerTypeRules(acterType, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.findUnique({
            where: {
                id: acterType.id,
            },
        }).ActerTypeRules(args);
    }
    async RulesOnActerType(acterType, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).acterType.findUnique({
            where: {
                id: acterType.id,
            },
        }).RulesOnActerType(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Acter_1.Acter], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ActerType_1.ActerType, Object, ActerTypeActerArgs_1.ActerTypeActerArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRelationsResolver.prototype, "Acter", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [ActerTypeRule_1.ActerTypeRule], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ActerType_1.ActerType, Object, ActerTypeActerTypeRulesArgs_1.ActerTypeActerTypeRulesArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRelationsResolver.prototype, "ActerTypeRules", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [ActerTypeRule_1.ActerTypeRule], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ActerType_1.ActerType, Object, ActerTypeRulesOnActerTypeArgs_1.ActerTypeRulesOnActerTypeArgs]),
    __metadata("design:returntype", Promise)
], ActerTypeRelationsResolver.prototype, "RulesOnActerType", null);
ActerTypeRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => ActerType_1.ActerType)
], ActerTypeRelationsResolver);
exports.ActerTypeRelationsResolver = ActerTypeRelationsResolver;
