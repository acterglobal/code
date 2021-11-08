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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerJoinSettings_1 = require("../enums/ActerJoinSettings");
const ActerNotificationEmailFrequency_1 = require("../enums/ActerNotificationEmailFrequency");
const ActerNotificationSettings_1 = require("../enums/ActerNotificationSettings");
const ActerPrivacySettings_1 = require("../enums/ActerPrivacySettings");
const ActerCount_1 = require("../resolvers/outputs/ActerCount");
let Acter = class Acter {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Acter.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Acter.prototype, "acterTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Acter.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], Acter.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], Acter.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], Acter.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], Acter.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerJoinSettings_1.ActerJoinSettings, {
        nullable: false
    }),
    __metadata("design:type", String)
], Acter.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerNotificationSettings_1.ActerNotificationSettings, {
        nullable: false
    }),
    __metadata("design:type", String)
], Acter.prototype, "acterNotifySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerNotificationEmailFrequency_1.ActerNotificationEmailFrequency, {
        nullable: false
    }),
    __metadata("design:type", String)
], Acter.prototype, "acterNotifyEmailFrequency", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerPrivacySettings_1.ActerPrivacySettings, {
        nullable: false
    }),
    __metadata("design:type", String)
], Acter.prototype, "acterPrivacySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Acter.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], Acter.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "deletedByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Acter.prototype, "parentActerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCount_1.ActerCount, {
        nullable: true
    }),
    __metadata("design:type", ActerCount_1.ActerCount)
], Acter.prototype, "_count", void 0);
Acter = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], Acter);
exports.Acter = Acter;
