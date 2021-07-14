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
exports.LinkUpdateManyWithoutCreatedByUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LinkCreateManyCreatedByUserInputEnvelope_1 = require("../inputs/LinkCreateManyCreatedByUserInputEnvelope");
const LinkCreateOrConnectWithoutCreatedByUserInput_1 = require("../inputs/LinkCreateOrConnectWithoutCreatedByUserInput");
const LinkCreateWithoutCreatedByUserInput_1 = require("../inputs/LinkCreateWithoutCreatedByUserInput");
const LinkScalarWhereInput_1 = require("../inputs/LinkScalarWhereInput");
const LinkUpdateManyWithWhereWithoutCreatedByUserInput_1 = require("../inputs/LinkUpdateManyWithWhereWithoutCreatedByUserInput");
const LinkUpdateWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/LinkUpdateWithWhereUniqueWithoutCreatedByUserInput");
const LinkUpsertWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/LinkUpsertWithWhereUniqueWithoutCreatedByUserInput");
const LinkWhereUniqueInput_1 = require("../inputs/LinkWhereUniqueInput");
let LinkUpdateManyWithoutCreatedByUserInput = class LinkUpdateManyWithoutCreatedByUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [LinkCreateWithoutCreatedByUserInput_1.LinkCreateWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkCreateOrConnectWithoutCreatedByUserInput_1.LinkCreateOrConnectWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkUpsertWithWhereUniqueWithoutCreatedByUserInput_1.LinkUpsertWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkCreateManyCreatedByUserInputEnvelope_1.LinkCreateManyCreatedByUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", LinkCreateManyCreatedByUserInputEnvelope_1.LinkCreateManyCreatedByUserInputEnvelope)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkWhereUniqueInput_1.LinkWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkWhereUniqueInput_1.LinkWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkWhereUniqueInput_1.LinkWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkWhereUniqueInput_1.LinkWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkUpdateWithWhereUniqueWithoutCreatedByUserInput_1.LinkUpdateWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkUpdateManyWithWhereWithoutCreatedByUserInput_1.LinkUpdateManyWithWhereWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LinkScalarWhereInput_1.LinkScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LinkUpdateManyWithoutCreatedByUserInput.prototype, "deleteMany", void 0);
LinkUpdateManyWithoutCreatedByUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], LinkUpdateManyWithoutCreatedByUserInput);
exports.LinkUpdateManyWithoutCreatedByUserInput = LinkUpdateManyWithoutCreatedByUserInput;
