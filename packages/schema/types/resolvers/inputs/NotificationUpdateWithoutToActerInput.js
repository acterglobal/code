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
exports.NotificationUpdateWithoutToActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerUpdateOneRequiredWithoutNotificationsToInput_1 = require("../inputs/ActerUpdateOneRequiredWithoutNotificationsToInput");
const ActivityUpdateOneWithoutNotificationInput_1 = require("../inputs/ActivityUpdateOneWithoutNotificationInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumNotificationTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumNotificationTypeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateOneWithoutNotificationInput_1 = require("../inputs/PostUpdateOneWithoutNotificationInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let NotificationUpdateWithoutToActerInput = class NotificationUpdateWithoutToActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUpdateWithoutToActerInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumNotificationTypeFieldUpdateOperationsInput_1.EnumNotificationTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumNotificationTypeFieldUpdateOperationsInput_1.EnumNotificationTypeFieldUpdateOperationsInput)
], NotificationUpdateWithoutToActerInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUpdateWithoutToActerInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutToActerInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutToActerInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], NotificationUpdateWithoutToActerInput.prototype, "sendTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutToActerInput.prototype, "sentAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutToActerInput.prototype, "viewedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateOneRequiredWithoutNotificationsToInput_1.ActerUpdateOneRequiredWithoutNotificationsToInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateOneRequiredWithoutNotificationsToInput_1.ActerUpdateOneRequiredWithoutNotificationsToInput)
], NotificationUpdateWithoutToActerInput.prototype, "OnActer", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneWithoutNotificationInput_1.PostUpdateOneWithoutNotificationInput, {
        nullable: true
    }),
    __metadata("design:type", PostUpdateOneWithoutNotificationInput_1.PostUpdateOneWithoutNotificationInput)
], NotificationUpdateWithoutToActerInput.prototype, "Post", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityUpdateOneWithoutNotificationInput_1.ActivityUpdateOneWithoutNotificationInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityUpdateOneWithoutNotificationInput_1.ActivityUpdateOneWithoutNotificationInput)
], NotificationUpdateWithoutToActerInput.prototype, "Activity", void 0);
NotificationUpdateWithoutToActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NotificationUpdateWithoutToActerInput);
exports.NotificationUpdateWithoutToActerInput = NotificationUpdateWithoutToActerInput;
