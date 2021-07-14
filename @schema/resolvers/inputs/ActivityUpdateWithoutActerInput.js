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
exports.ActivityUpdateWithoutActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerUpdateOneWithoutActivitiesOrganizedInput_1 = require("../inputs/ActerUpdateOneWithoutActivitiesOrganizedInput");
const ActivityTypeUpdateOneRequiredWithoutActivityInput_1 = require("../inputs/ActivityTypeUpdateOneRequiredWithoutActivityInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutActivitiesCreatedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutActivitiesCreatedInput");
let ActivityUpdateWithoutActerInput = class ActivityUpdateWithoutActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ActivityUpdateWithoutActerInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActivityUpdateWithoutActerInput.prototype, "startAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActivityUpdateWithoutActerInput.prototype, "endAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ActivityUpdateWithoutActerInput.prototype, "isOnline", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ActivityUpdateWithoutActerInput.prototype, "isAllDay", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActivityUpdateWithoutActerInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActivityUpdateWithoutActerInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutActivityInput_1.ActivityTypeUpdateOneRequiredWithoutActivityInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityTypeUpdateOneRequiredWithoutActivityInput_1.ActivityTypeUpdateOneRequiredWithoutActivityInput)
], ActivityUpdateWithoutActerInput.prototype, "ActivityType", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActivitiesCreatedInput_1.UserUpdateOneRequiredWithoutActivitiesCreatedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutActivitiesCreatedInput_1.UserUpdateOneRequiredWithoutActivitiesCreatedInput)
], ActivityUpdateWithoutActerInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateOneWithoutActivitiesOrganizedInput_1.ActerUpdateOneWithoutActivitiesOrganizedInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateOneWithoutActivitiesOrganizedInput_1.ActerUpdateOneWithoutActivitiesOrganizedInput)
], ActivityUpdateWithoutActerInput.prototype, "Organiser", void 0);
ActivityUpdateWithoutActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActivityUpdateWithoutActerInput);
exports.ActivityUpdateWithoutActerInput = ActivityUpdateWithoutActerInput;
