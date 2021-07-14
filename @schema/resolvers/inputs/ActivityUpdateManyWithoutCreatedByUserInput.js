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
exports.ActivityUpdateManyWithoutCreatedByUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActivityCreateManyCreatedByUserInputEnvelope_1 = require("../inputs/ActivityCreateManyCreatedByUserInputEnvelope");
const ActivityCreateOrConnectWithoutCreatedByUserInput_1 = require("../inputs/ActivityCreateOrConnectWithoutCreatedByUserInput");
const ActivityCreateWithoutCreatedByUserInput_1 = require("../inputs/ActivityCreateWithoutCreatedByUserInput");
const ActivityScalarWhereInput_1 = require("../inputs/ActivityScalarWhereInput");
const ActivityUpdateManyWithWhereWithoutCreatedByUserInput_1 = require("../inputs/ActivityUpdateManyWithWhereWithoutCreatedByUserInput");
const ActivityUpdateWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/ActivityUpdateWithWhereUniqueWithoutCreatedByUserInput");
const ActivityUpsertWithWhereUniqueWithoutCreatedByUserInput_1 = require("../inputs/ActivityUpsertWithWhereUniqueWithoutCreatedByUserInput");
const ActivityWhereUniqueInput_1 = require("../inputs/ActivityWhereUniqueInput");
let ActivityUpdateManyWithoutCreatedByUserInput = class ActivityUpdateManyWithoutCreatedByUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActivityCreateWithoutCreatedByUserInput_1.ActivityCreateWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityCreateOrConnectWithoutCreatedByUserInput_1.ActivityCreateOrConnectWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpsertWithWhereUniqueWithoutCreatedByUserInput_1.ActivityUpsertWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateManyCreatedByUserInputEnvelope_1.ActivityCreateManyCreatedByUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateManyCreatedByUserInputEnvelope_1.ActivityCreateManyCreatedByUserInputEnvelope)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpdateWithWhereUniqueWithoutCreatedByUserInput_1.ActivityUpdateWithWhereUniqueWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpdateManyWithWhereWithoutCreatedByUserInput_1.ActivityUpdateManyWithWhereWithoutCreatedByUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityScalarWhereInput_1.ActivityScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutCreatedByUserInput.prototype, "deleteMany", void 0);
ActivityUpdateManyWithoutCreatedByUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActivityUpdateManyWithoutCreatedByUserInput);
exports.ActivityUpdateManyWithoutCreatedByUserInput = ActivityUpdateManyWithoutCreatedByUserInput;
