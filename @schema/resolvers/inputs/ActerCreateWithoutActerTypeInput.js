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
exports.ActerCreateWithoutActerTypeInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionCreateNestedManyWithoutFollowerInput_1 = require("../inputs/ActerConnectionCreateNestedManyWithoutFollowerInput");
const ActerConnectionCreateNestedManyWithoutFollowingInput_1 = require("../inputs/ActerConnectionCreateNestedManyWithoutFollowingInput");
const ActerCreateNestedManyWithoutParentInput_1 = require("../inputs/ActerCreateNestedManyWithoutParentInput");
const ActerCreateNestedOneWithoutChildrenInput_1 = require("../inputs/ActerCreateNestedOneWithoutChildrenInput");
const ActerInterestCreateNestedManyWithoutActerInput_1 = require("../inputs/ActerInterestCreateNestedManyWithoutActerInput");
const ActivityCreateNestedManyWithoutOrganiserInput_1 = require("../inputs/ActivityCreateNestedManyWithoutOrganiserInput");
const ActivityCreateNestedOneWithoutActerInput_1 = require("../inputs/ActivityCreateNestedOneWithoutActerInput");
const LinkCreateNestedManyWithoutActerInput_1 = require("../inputs/LinkCreateNestedManyWithoutActerInput");
const PostCreateNestedManyWithoutActerInput_1 = require("../inputs/PostCreateNestedManyWithoutActerInput");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const UserCreateNestedOneWithoutActerInput_1 = require("../inputs/UserCreateNestedOneWithoutActerInput");
const UserCreateNestedOneWithoutActersCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutActersCreatedInput");
const UserCreateNestedOneWithoutActersDeletedInput_1 = require("../inputs/UserCreateNestedOneWithoutActersDeletedInput");
const ActerJoinSettings_1 = require("../../enums/ActerJoinSettings");
let ActerCreateWithoutActerTypeInput = class ActerCreateWithoutActerTypeInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ActerCreateWithoutActerTypeInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ActerCreateWithoutActerTypeInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ActerCreateWithoutActerTypeInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutActerTypeInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutActerTypeInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerJoinSettings_1.ActerJoinSettings, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutActerTypeInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutActerTypeInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestCreateNestedManyWithoutActerInput_1.ActerInterestCreateNestedManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestCreateNestedManyWithoutActerInput_1.ActerInterestCreateNestedManyWithoutActerInput)
], ActerCreateWithoutActerTypeInput.prototype, "ActerInterests", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActersCreatedInput_1.UserCreateNestedOneWithoutActersCreatedInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActersCreatedInput_1.UserCreateNestedOneWithoutActersCreatedInput)
], ActerCreateWithoutActerTypeInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActersDeletedInput_1.UserCreateNestedOneWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActersDeletedInput_1.UserCreateNestedOneWithoutActersDeletedInput)
], ActerCreateWithoutActerTypeInput.prototype, "DeletedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutChildrenInput_1.ActerCreateNestedOneWithoutChildrenInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutChildrenInput_1.ActerCreateNestedOneWithoutChildrenInput)
], ActerCreateWithoutActerTypeInput.prototype, "Parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedManyWithoutParentInput_1.ActerCreateNestedManyWithoutParentInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedManyWithoutParentInput_1.ActerCreateNestedManyWithoutParentInput)
], ActerCreateWithoutActerTypeInput.prototype, "Children", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCreateNestedManyWithoutFollowerInput_1.ActerConnectionCreateNestedManyWithoutFollowerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCreateNestedManyWithoutFollowerInput_1.ActerConnectionCreateNestedManyWithoutFollowerInput)
], ActerCreateWithoutActerTypeInput.prototype, "Following", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCreateNestedManyWithoutFollowingInput_1.ActerConnectionCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCreateNestedManyWithoutFollowingInput_1.ActerConnectionCreateNestedManyWithoutFollowingInput)
], ActerCreateWithoutActerTypeInput.prototype, "Followers", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActerInput_1.UserCreateNestedOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActerInput_1.UserCreateNestedOneWithoutActerInput)
], ActerCreateWithoutActerTypeInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateNestedOneWithoutActerInput_1.ActivityCreateNestedOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateNestedOneWithoutActerInput_1.ActivityCreateNestedOneWithoutActerInput)
], ActerCreateWithoutActerTypeInput.prototype, "Activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateNestedManyWithoutOrganiserInput_1.ActivityCreateNestedManyWithoutOrganiserInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateNestedManyWithoutOrganiserInput_1.ActivityCreateNestedManyWithoutOrganiserInput)
], ActerCreateWithoutActerTypeInput.prototype, "ActivitiesOrganized", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutActerInput_1.PostCreateNestedManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", PostCreateNestedManyWithoutActerInput_1.PostCreateNestedManyWithoutActerInput)
], ActerCreateWithoutActerTypeInput.prototype, "AttachedPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], ActerCreateWithoutActerTypeInput.prototype, "AuthoredPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkCreateNestedManyWithoutActerInput_1.LinkCreateNestedManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", LinkCreateNestedManyWithoutActerInput_1.LinkCreateNestedManyWithoutActerInput)
], ActerCreateWithoutActerTypeInput.prototype, "AttachedLinks", void 0);
ActerCreateWithoutActerTypeInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerCreateWithoutActerTypeInput);
exports.ActerCreateWithoutActerTypeInput = ActerCreateWithoutActerTypeInput;
