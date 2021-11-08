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
exports.NotificationCreateWithoutActivityInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateNestedOneWithoutNotificationsOnInput_1 = require("../inputs/ActerCreateNestedOneWithoutNotificationsOnInput");
const ActerCreateNestedOneWithoutNotificationsToInput_1 = require("../inputs/ActerCreateNestedOneWithoutNotificationsToInput");
const PostCreateNestedOneWithoutNotificationInput_1 = require("../inputs/PostCreateNestedOneWithoutNotificationInput");
const NotificationType_1 = require("../../enums/NotificationType");
let NotificationCreateWithoutActivityInput = class NotificationCreateWithoutActivityInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationCreateWithoutActivityInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationType_1.NotificationType, {
        nullable: false
    }),
    __metadata("design:type", String)
], NotificationCreateWithoutActivityInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], NotificationCreateWithoutActivityInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NotificationCreateWithoutActivityInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NotificationCreateWithoutActivityInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NotificationCreateWithoutActivityInput.prototype, "sendTo", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NotificationCreateWithoutActivityInput.prototype, "sentAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NotificationCreateWithoutActivityInput.prototype, "viewedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutNotificationsOnInput_1.ActerCreateNestedOneWithoutNotificationsOnInput, {
        nullable: false
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutNotificationsOnInput_1.ActerCreateNestedOneWithoutNotificationsOnInput)
], NotificationCreateWithoutActivityInput.prototype, "ToActer", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutNotificationsToInput_1.ActerCreateNestedOneWithoutNotificationsToInput, {
        nullable: false
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutNotificationsToInput_1.ActerCreateNestedOneWithoutNotificationsToInput)
], NotificationCreateWithoutActivityInput.prototype, "OnActer", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutNotificationInput_1.PostCreateNestedOneWithoutNotificationInput, {
        nullable: true
    }),
    __metadata("design:type", PostCreateNestedOneWithoutNotificationInput_1.PostCreateNestedOneWithoutNotificationInput)
], NotificationCreateWithoutActivityInput.prototype, "Post", void 0);
NotificationCreateWithoutActivityInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NotificationCreateWithoutActivityInput);
exports.NotificationCreateWithoutActivityInput = NotificationCreateWithoutActivityInput;
