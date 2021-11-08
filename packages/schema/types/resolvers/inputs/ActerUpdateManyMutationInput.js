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
exports.ActerUpdateManyMutationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumActerJoinSettingsFieldUpdateOperationsInput_1 = require("../inputs/EnumActerJoinSettingsFieldUpdateOperationsInput");
const EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput_1 = require("../inputs/EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput");
const EnumActerNotificationSettingsFieldUpdateOperationsInput_1 = require("../inputs/EnumActerNotificationSettingsFieldUpdateOperationsInput");
const EnumActerPrivacySettingsFieldUpdateOperationsInput_1 = require("../inputs/EnumActerPrivacySettingsFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ActerUpdateManyMutationInput = class ActerUpdateManyMutationInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerJoinSettingsFieldUpdateOperationsInput_1.EnumActerJoinSettingsFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerJoinSettingsFieldUpdateOperationsInput_1.EnumActerJoinSettingsFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerNotificationSettingsFieldUpdateOperationsInput_1.EnumActerNotificationSettingsFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerNotificationSettingsFieldUpdateOperationsInput_1.EnumActerNotificationSettingsFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "acterNotifySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput_1.EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput_1.EnumActerNotificationEmailFrequencyFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "acterNotifyEmailFrequency", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerPrivacySettingsFieldUpdateOperationsInput_1.EnumActerPrivacySettingsFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerPrivacySettingsFieldUpdateOperationsInput_1.EnumActerPrivacySettingsFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "acterPrivacySetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ActerUpdateManyMutationInput.prototype, "deletedAt", void 0);
ActerUpdateManyMutationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateManyMutationInput);
exports.ActerUpdateManyMutationInput = ActerUpdateManyMutationInput;
