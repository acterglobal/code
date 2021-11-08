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
exports.NotificationUpdateManyWithoutPostInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NotificationCreateManyPostInputEnvelope_1 = require("../inputs/NotificationCreateManyPostInputEnvelope");
const NotificationCreateOrConnectWithoutPostInput_1 = require("../inputs/NotificationCreateOrConnectWithoutPostInput");
const NotificationCreateWithoutPostInput_1 = require("../inputs/NotificationCreateWithoutPostInput");
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/NotificationUpdateManyWithWhereWithoutPostInput");
const NotificationUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/NotificationUpdateWithWhereUniqueWithoutPostInput");
const NotificationUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/NotificationUpsertWithWhereUniqueWithoutPostInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateManyWithoutPostInput = class NotificationUpdateManyWithoutPostInput {
};
__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutPostInput_1.NotificationCreateWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutPostInput_1.NotificationCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutPostInput_1.NotificationUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyPostInputEnvelope_1.NotificationCreateManyPostInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", NotificationCreateManyPostInputEnvelope_1.NotificationCreateManyPostInputEnvelope)
], NotificationUpdateManyWithoutPostInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutPostInput_1.NotificationUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutPostInput_1.NotificationUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1.NotificationScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NotificationUpdateManyWithoutPostInput.prototype, "deleteMany", void 0);
NotificationUpdateManyWithoutPostInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NotificationUpdateManyWithoutPostInput);
exports.NotificationUpdateManyWithoutPostInput = NotificationUpdateManyWithoutPostInput;
