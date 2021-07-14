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
exports.UserUpdateWithoutActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionUpdateManyWithoutCreatedByUserInput_1 = require("../inputs/ActerConnectionUpdateManyWithoutCreatedByUserInput");
const ActerInterestUpdateManyWithoutCreatedByUserInput_1 = require("../inputs/ActerInterestUpdateManyWithoutCreatedByUserInput");
const ActerUpdateManyWithoutCreatedByUserInput_1 = require("../inputs/ActerUpdateManyWithoutCreatedByUserInput");
const ActerUpdateManyWithoutDeletedByUserInput_1 = require("../inputs/ActerUpdateManyWithoutDeletedByUserInput");
const ActivityUpdateManyWithoutCreatedByUserInput_1 = require("../inputs/ActivityUpdateManyWithoutCreatedByUserInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LinkUpdateManyWithoutCreatedByUserInput_1 = require("../inputs/LinkUpdateManyWithoutCreatedByUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutActerInput = class UserUpdateWithoutActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutActerInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutActerInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutActerInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutActerInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutActerInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutActerInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutActerInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateManyWithoutCreatedByUserInput_1.ActerUpdateManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateManyWithoutCreatedByUserInput_1.ActerUpdateManyWithoutCreatedByUserInput)
], UserUpdateWithoutActerInput.prototype, "ActersCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionUpdateManyWithoutCreatedByUserInput_1.ActerConnectionUpdateManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionUpdateManyWithoutCreatedByUserInput_1.ActerConnectionUpdateManyWithoutCreatedByUserInput)
], UserUpdateWithoutActerInput.prototype, "ActerConnections", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkUpdateManyWithoutCreatedByUserInput_1.LinkUpdateManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", LinkUpdateManyWithoutCreatedByUserInput_1.LinkUpdateManyWithoutCreatedByUserInput)
], UserUpdateWithoutActerInput.prototype, "LinksCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestUpdateManyWithoutCreatedByUserInput_1.ActerInterestUpdateManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestUpdateManyWithoutCreatedByUserInput_1.ActerInterestUpdateManyWithoutCreatedByUserInput)
], UserUpdateWithoutActerInput.prototype, "ActerInterest", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityUpdateManyWithoutCreatedByUserInput_1.ActivityUpdateManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityUpdateManyWithoutCreatedByUserInput_1.ActivityUpdateManyWithoutCreatedByUserInput)
], UserUpdateWithoutActerInput.prototype, "ActivitiesCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateManyWithoutDeletedByUserInput_1.ActerUpdateManyWithoutDeletedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateManyWithoutDeletedByUserInput_1.ActerUpdateManyWithoutDeletedByUserInput)
], UserUpdateWithoutActerInput.prototype, "ActersDeleted", void 0);
UserUpdateWithoutActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateWithoutActerInput);
exports.UserUpdateWithoutActerInput = UserUpdateWithoutActerInput;