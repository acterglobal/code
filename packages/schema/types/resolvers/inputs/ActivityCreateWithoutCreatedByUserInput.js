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
exports.ActivityCreateWithoutCreatedByUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateNestedOneWithoutActivitiesOrganizedInput_1 = require("../inputs/ActerCreateNestedOneWithoutActivitiesOrganizedInput");
const ActerCreateNestedOneWithoutActivityInput_1 = require("../inputs/ActerCreateNestedOneWithoutActivityInput");
const ActivityTypeCreateNestedOneWithoutActivityInput_1 = require("../inputs/ActivityTypeCreateNestedOneWithoutActivityInput");
const NotificationCreateNestedManyWithoutActivityInput_1 = require("../inputs/NotificationCreateNestedManyWithoutActivityInput");
let ActivityCreateWithoutCreatedByUserInput = class ActivityCreateWithoutCreatedByUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityCreateWithoutCreatedByUserInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ActivityCreateWithoutCreatedByUserInput.prototype, "startAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ActivityCreateWithoutCreatedByUserInput.prototype, "endAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ActivityCreateWithoutCreatedByUserInput.prototype, "isOnline", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ActivityCreateWithoutCreatedByUserInput.prototype, "isAllDay", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActivityCreateWithoutCreatedByUserInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ActivityCreateWithoutCreatedByUserInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutActivityInput_1.ActivityTypeCreateNestedOneWithoutActivityInput, {
        nullable: false
    }),
    __metadata("design:type", ActivityTypeCreateNestedOneWithoutActivityInput_1.ActivityTypeCreateNestedOneWithoutActivityInput)
], ActivityCreateWithoutCreatedByUserInput.prototype, "ActivityType", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutActivityInput_1.ActerCreateNestedOneWithoutActivityInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutActivityInput_1.ActerCreateNestedOneWithoutActivityInput)
], ActivityCreateWithoutCreatedByUserInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutActivitiesOrganizedInput_1.ActerCreateNestedOneWithoutActivitiesOrganizedInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutActivitiesOrganizedInput_1.ActerCreateNestedOneWithoutActivitiesOrganizedInput)
], ActivityCreateWithoutCreatedByUserInput.prototype, "Organiser", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutActivityInput_1.NotificationCreateNestedManyWithoutActivityInput, {
        nullable: true
    }),
    __metadata("design:type", NotificationCreateNestedManyWithoutActivityInput_1.NotificationCreateNestedManyWithoutActivityInput)
], ActivityCreateWithoutCreatedByUserInput.prototype, "Notification", void 0);
ActivityCreateWithoutCreatedByUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActivityCreateWithoutCreatedByUserInput);
exports.ActivityCreateWithoutCreatedByUserInput = ActivityCreateWithoutCreatedByUserInput;
