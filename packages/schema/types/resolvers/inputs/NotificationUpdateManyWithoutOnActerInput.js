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
exports.NotificationUpdateManyWithoutOnActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NotificationCreateManyOnActerInputEnvelope_1 = require("../inputs/NotificationCreateManyOnActerInputEnvelope");
const NotificationCreateOrConnectWithoutOnActerInput_1 = require("../inputs/NotificationCreateOrConnectWithoutOnActerInput");
const NotificationCreateWithoutOnActerInput_1 = require("../inputs/NotificationCreateWithoutOnActerInput");
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyWithWhereWithoutOnActerInput_1 = require("../inputs/NotificationUpdateManyWithWhereWithoutOnActerInput");
const NotificationUpdateWithWhereUniqueWithoutOnActerInput_1 = require("../inputs/NotificationUpdateWithWhereUniqueWithoutOnActerInput");
const NotificationUpsertWithWhereUniqueWithoutOnActerInput_1 = require("../inputs/NotificationUpsertWithWhereUniqueWithoutOnActerInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateManyWithoutOnActerInput = class NotificationUpdateManyWithoutOnActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutOnActerInput_1.NotificationCreateWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutOnActerInput_1.NotificationCreateOrConnectWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutOnActerInput_1.NotificationUpsertWithWhereUniqueWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyOnActerInputEnvelope_1.NotificationCreateManyOnActerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", NotificationCreateManyOnActerInputEnvelope_1.NotificationCreateManyOnActerInputEnvelope)
], NotificationUpdateManyWithoutOnActerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutOnActerInput_1.NotificationUpdateWithWhereUniqueWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutOnActerInput_1.NotificationUpdateManyWithWhereWithoutOnActerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1.NotificationScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutOnActerInput.prototype, "deleteMany", void 0);
NotificationUpdateManyWithoutOnActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NotificationUpdateManyWithoutOnActerInput);
exports.NotificationUpdateManyWithoutOnActerInput = NotificationUpdateManyWithoutOnActerInput;
