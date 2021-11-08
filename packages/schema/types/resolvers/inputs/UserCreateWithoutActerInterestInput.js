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
exports.UserCreateWithoutActerInterestInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/ActerConnectionCreateNestedManyWithoutCreatedByUserInput");
const ActerCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/ActerCreateNestedManyWithoutCreatedByUserInput");
const ActerCreateNestedManyWithoutDeletedByUserInput_1 = require("../inputs/ActerCreateNestedManyWithoutDeletedByUserInput");
const ActerCreateNestedOneWithoutUserInput_1 = require("../inputs/ActerCreateNestedOneWithoutUserInput");
const ActivityCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/ActivityCreateNestedManyWithoutCreatedByUserInput");
const InviteCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/InviteCreateNestedManyWithoutCreatedByUserInput");
const LinkCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/LinkCreateNestedManyWithoutCreatedByUserInput");
let UserCreateWithoutActerInterestInput = class UserCreateWithoutActerInterestInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActerInterestInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActerInterestInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActerInterestInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutActerInterestInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActerInterestInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutActerInterestInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutActerInterestInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActerInterestInput.prototype, "auth0ProviderId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActerInterestInput.prototype, "intercomId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutUserInput_1.ActerCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutUserInput_1.ActerCreateNestedOneWithoutUserInput)
], UserCreateWithoutActerInterestInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedManyWithoutCreatedByUserInput_1.ActerCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedManyWithoutCreatedByUserInput_1.ActerCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActerInterestInput.prototype, "ActersCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCreateNestedManyWithoutCreatedByUserInput_1.ActerConnectionCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCreateNestedManyWithoutCreatedByUserInput_1.ActerConnectionCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActerInterestInput.prototype, "ActerConnections", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkCreateNestedManyWithoutCreatedByUserInput_1.LinkCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", LinkCreateNestedManyWithoutCreatedByUserInput_1.LinkCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActerInterestInput.prototype, "LinksCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateNestedManyWithoutCreatedByUserInput_1.ActivityCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateNestedManyWithoutCreatedByUserInput_1.ActivityCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActerInterestInput.prototype, "ActivitiesCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedManyWithoutDeletedByUserInput_1.ActerCreateNestedManyWithoutDeletedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedManyWithoutDeletedByUserInput_1.ActerCreateNestedManyWithoutDeletedByUserInput)
], UserCreateWithoutActerInterestInput.prototype, "ActersDeleted", void 0);
__decorate([
    TypeGraphQL.Field(_type => InviteCreateNestedManyWithoutCreatedByUserInput_1.InviteCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", InviteCreateNestedManyWithoutCreatedByUserInput_1.InviteCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActerInterestInput.prototype, "Invite", void 0);
UserCreateWithoutActerInterestInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateWithoutActerInterestInput);
exports.UserCreateWithoutActerInterestInput = UserCreateWithoutActerInterestInput;
