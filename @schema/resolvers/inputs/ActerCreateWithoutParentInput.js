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
exports.ActerCreateWithoutParentInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionCreateNestedManyWithoutFollowerInput_1 = require("../inputs/ActerConnectionCreateNestedManyWithoutFollowerInput");
const ActerConnectionCreateNestedManyWithoutFollowingInput_1 = require("../inputs/ActerConnectionCreateNestedManyWithoutFollowingInput");
const ActerCreateNestedManyWithoutParentInput_1 = require("../inputs/ActerCreateNestedManyWithoutParentInput");
const ActerInterestCreateNestedManyWithoutActerInput_1 = require("../inputs/ActerInterestCreateNestedManyWithoutActerInput");
const ActerTypeCreateNestedOneWithoutActerInput_1 = require("../inputs/ActerTypeCreateNestedOneWithoutActerInput");
const ActivityCreateNestedManyWithoutOrganiserInput_1 = require("../inputs/ActivityCreateNestedManyWithoutOrganiserInput");
const ActivityCreateNestedOneWithoutActerInput_1 = require("../inputs/ActivityCreateNestedOneWithoutActerInput");
const UserCreateNestedOneWithoutActerInput_1 = require("../inputs/UserCreateNestedOneWithoutActerInput");
const UserCreateNestedOneWithoutActersCreatedInput_1 = require("../inputs/UserCreateNestedOneWithoutActersCreatedInput");
const UserCreateNestedOneWithoutActersDeletedInput_1 = require("../inputs/UserCreateNestedOneWithoutActersDeletedInput");
let ActerCreateWithoutParentInput = class ActerCreateWithoutParentInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutParentInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutParentInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutParentInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutParentInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutParentInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ActerCreateWithoutParentInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ActerCreateWithoutParentInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutParentInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutParentInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActerCreateWithoutParentInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ActerCreateWithoutParentInput.prototype, "autoApproveFollowers", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutParentInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutParentInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActerCreateWithoutParentInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActersCreatedInput_1.UserCreateNestedOneWithoutActersCreatedInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActersCreatedInput_1.UserCreateNestedOneWithoutActersCreatedInput)
], ActerCreateWithoutParentInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActersDeletedInput_1.UserCreateNestedOneWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActersDeletedInput_1.UserCreateNestedOneWithoutActersDeletedInput)
], ActerCreateWithoutParentInput.prototype, "DeletedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeCreateNestedOneWithoutActerInput_1.ActerTypeCreateNestedOneWithoutActerInput, {
        nullable: false
    }),
    __metadata("design:type", ActerTypeCreateNestedOneWithoutActerInput_1.ActerTypeCreateNestedOneWithoutActerInput)
], ActerCreateWithoutParentInput.prototype, "ActerType", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedManyWithoutParentInput_1.ActerCreateNestedManyWithoutParentInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedManyWithoutParentInput_1.ActerCreateNestedManyWithoutParentInput)
], ActerCreateWithoutParentInput.prototype, "Children", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCreateNestedManyWithoutFollowerInput_1.ActerConnectionCreateNestedManyWithoutFollowerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCreateNestedManyWithoutFollowerInput_1.ActerConnectionCreateNestedManyWithoutFollowerInput)
], ActerCreateWithoutParentInput.prototype, "Following", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCreateNestedManyWithoutFollowingInput_1.ActerConnectionCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCreateNestedManyWithoutFollowingInput_1.ActerConnectionCreateNestedManyWithoutFollowingInput)
], ActerCreateWithoutParentInput.prototype, "Followers", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActerInput_1.UserCreateNestedOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedOneWithoutActerInput_1.UserCreateNestedOneWithoutActerInput)
], ActerCreateWithoutParentInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestCreateNestedManyWithoutActerInput_1.ActerInterestCreateNestedManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestCreateNestedManyWithoutActerInput_1.ActerInterestCreateNestedManyWithoutActerInput)
], ActerCreateWithoutParentInput.prototype, "ActerInterests", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateNestedOneWithoutActerInput_1.ActivityCreateNestedOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateNestedOneWithoutActerInput_1.ActivityCreateNestedOneWithoutActerInput)
], ActerCreateWithoutParentInput.prototype, "Activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateNestedManyWithoutOrganiserInput_1.ActivityCreateNestedManyWithoutOrganiserInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateNestedManyWithoutOrganiserInput_1.ActivityCreateNestedManyWithoutOrganiserInput)
], ActerCreateWithoutParentInput.prototype, "ActivitiesOrganized", void 0);
ActerCreateWithoutParentInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerCreateWithoutParentInput);
exports.ActerCreateWithoutParentInput = ActerCreateWithoutParentInput;
