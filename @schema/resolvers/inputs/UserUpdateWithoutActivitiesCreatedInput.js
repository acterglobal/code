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
exports.UserUpdateWithoutActivitiesCreatedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionUpdateManyWithoutCreatedByUserInput_1 = require("../inputs/ActerConnectionUpdateManyWithoutCreatedByUserInput");
const ActerInterestUpdateManyWithoutCreatedByUserInput_1 = require("../inputs/ActerInterestUpdateManyWithoutCreatedByUserInput");
const ActerUpdateManyWithoutCreatedByUserInput_1 = require("../inputs/ActerUpdateManyWithoutCreatedByUserInput");
const ActerUpdateManyWithoutDeletedByUserInput_1 = require("../inputs/ActerUpdateManyWithoutDeletedByUserInput");
const ActerUpdateOneWithoutUserInput_1 = require("../inputs/ActerUpdateOneWithoutUserInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutActivitiesCreatedInput = class UserUpdateWithoutActivitiesCreatedInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateOneWithoutUserInput_1.ActerUpdateOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateOneWithoutUserInput_1.ActerUpdateOneWithoutUserInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateManyWithoutCreatedByUserInput_1.ActerUpdateManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateManyWithoutCreatedByUserInput_1.ActerUpdateManyWithoutCreatedByUserInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "ActersCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionUpdateManyWithoutCreatedByUserInput_1.ActerConnectionUpdateManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionUpdateManyWithoutCreatedByUserInput_1.ActerConnectionUpdateManyWithoutCreatedByUserInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "ActerConnections", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestUpdateManyWithoutCreatedByUserInput_1.ActerInterestUpdateManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestUpdateManyWithoutCreatedByUserInput_1.ActerInterestUpdateManyWithoutCreatedByUserInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "ActerInterest", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateManyWithoutDeletedByUserInput_1.ActerUpdateManyWithoutDeletedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateManyWithoutDeletedByUserInput_1.ActerUpdateManyWithoutDeletedByUserInput)
], UserUpdateWithoutActivitiesCreatedInput.prototype, "ActersDeleted", void 0);
UserUpdateWithoutActivitiesCreatedInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateWithoutActivitiesCreatedInput);
exports.UserUpdateWithoutActivitiesCreatedInput = UserUpdateWithoutActivitiesCreatedInput;
