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
exports.NotificationUpdateManyWithoutActivityInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NotificationCreateManyActivityInputEnvelope_1 = require("../inputs/NotificationCreateManyActivityInputEnvelope");
const NotificationCreateOrConnectWithoutActivityInput_1 = require("../inputs/NotificationCreateOrConnectWithoutActivityInput");
const NotificationCreateWithoutActivityInput_1 = require("../inputs/NotificationCreateWithoutActivityInput");
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyWithWhereWithoutActivityInput_1 = require("../inputs/NotificationUpdateManyWithWhereWithoutActivityInput");
const NotificationUpdateWithWhereUniqueWithoutActivityInput_1 = require("../inputs/NotificationUpdateWithWhereUniqueWithoutActivityInput");
const NotificationUpsertWithWhereUniqueWithoutActivityInput_1 = require("../inputs/NotificationUpsertWithWhereUniqueWithoutActivityInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateManyWithoutActivityInput = class NotificationUpdateManyWithoutActivityInput {
};
__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutActivityInput_1.NotificationCreateWithoutActivityInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutActivityInput_1.NotificationCreateOrConnectWithoutActivityInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutActivityInput_1.NotificationUpsertWithWhereUniqueWithoutActivityInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyActivityInputEnvelope_1.NotificationCreateManyActivityInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", NotificationCreateManyActivityInputEnvelope_1.NotificationCreateManyActivityInputEnvelope)
], NotificationUpdateManyWithoutActivityInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutActivityInput_1.NotificationUpdateWithWhereUniqueWithoutActivityInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutActivityInput_1.NotificationUpdateManyWithWhereWithoutActivityInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1.NotificationScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutActivityInput.prototype, "deleteMany", void 0);
NotificationUpdateManyWithoutActivityInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NotificationUpdateManyWithoutActivityInput);
exports.NotificationUpdateManyWithoutActivityInput = NotificationUpdateManyWithoutActivityInput;
