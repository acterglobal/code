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
exports.ActivityUpdateManyWithoutActivityTypeInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActivityCreateManyActivityTypeInputEnvelope_1 = require("../inputs/ActivityCreateManyActivityTypeInputEnvelope");
const ActivityCreateOrConnectWithoutActivityTypeInput_1 = require("../inputs/ActivityCreateOrConnectWithoutActivityTypeInput");
const ActivityCreateWithoutActivityTypeInput_1 = require("../inputs/ActivityCreateWithoutActivityTypeInput");
const ActivityScalarWhereInput_1 = require("../inputs/ActivityScalarWhereInput");
const ActivityUpdateManyWithWhereWithoutActivityTypeInput_1 = require("../inputs/ActivityUpdateManyWithWhereWithoutActivityTypeInput");
const ActivityUpdateWithWhereUniqueWithoutActivityTypeInput_1 = require("../inputs/ActivityUpdateWithWhereUniqueWithoutActivityTypeInput");
const ActivityUpsertWithWhereUniqueWithoutActivityTypeInput_1 = require("../inputs/ActivityUpsertWithWhereUniqueWithoutActivityTypeInput");
const ActivityWhereUniqueInput_1 = require("../inputs/ActivityWhereUniqueInput");
let ActivityUpdateManyWithoutActivityTypeInput = class ActivityUpdateManyWithoutActivityTypeInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActivityCreateWithoutActivityTypeInput_1.ActivityCreateWithoutActivityTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityCreateOrConnectWithoutActivityTypeInput_1.ActivityCreateOrConnectWithoutActivityTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpsertWithWhereUniqueWithoutActivityTypeInput_1.ActivityUpsertWithWhereUniqueWithoutActivityTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateManyActivityTypeInputEnvelope_1.ActivityCreateManyActivityTypeInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateManyActivityTypeInputEnvelope_1.ActivityCreateManyActivityTypeInputEnvelope)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpdateWithWhereUniqueWithoutActivityTypeInput_1.ActivityUpdateWithWhereUniqueWithoutActivityTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpdateManyWithWhereWithoutActivityTypeInput_1.ActivityUpdateManyWithWhereWithoutActivityTypeInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityScalarWhereInput_1.ActivityScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutActivityTypeInput.prototype, "deleteMany", void 0);
ActivityUpdateManyWithoutActivityTypeInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActivityUpdateManyWithoutActivityTypeInput);
exports.ActivityUpdateManyWithoutActivityTypeInput = ActivityUpdateManyWithoutActivityTypeInput;
