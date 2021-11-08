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
exports.NotificationUpdateManyWithoutToActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NotificationCreateManyToActerInputEnvelope_1 = require("../inputs/NotificationCreateManyToActerInputEnvelope");
const NotificationCreateOrConnectWithoutToActerInput_1 = require("../inputs/NotificationCreateOrConnectWithoutToActerInput");
const NotificationCreateWithoutToActerInput_1 = require("../inputs/NotificationCreateWithoutToActerInput");
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyWithWhereWithoutToActerInput_1 = require("../inputs/NotificationUpdateManyWithWhereWithoutToActerInput");
const NotificationUpdateWithWhereUniqueWithoutToActerInput_1 = require("../inputs/NotificationUpdateWithWhereUniqueWithoutToActerInput");
const NotificationUpsertWithWhereUniqueWithoutToActerInput_1 = require("../inputs/NotificationUpsertWithWhereUniqueWithoutToActerInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateManyWithoutToActerInput = class NotificationUpdateManyWithoutToActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutToActerInput_1.NotificationCreateWithoutToActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutToActerInput_1.NotificationCreateOrConnectWithoutToActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutToActerInput_1.NotificationUpsertWithWhereUniqueWithoutToActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyToActerInputEnvelope_1.NotificationCreateManyToActerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", NotificationCreateManyToActerInputEnvelope_1.NotificationCreateManyToActerInputEnvelope)
], NotificationUpdateManyWithoutToActerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutToActerInput_1.NotificationUpdateWithWhereUniqueWithoutToActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutToActerInput_1.NotificationUpdateManyWithWhereWithoutToActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1.NotificationScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutToActerInput.prototype, "deleteMany", void 0);
NotificationUpdateManyWithoutToActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NotificationUpdateManyWithoutToActerInput);
exports.NotificationUpdateManyWithoutToActerInput = NotificationUpdateManyWithoutToActerInput;
