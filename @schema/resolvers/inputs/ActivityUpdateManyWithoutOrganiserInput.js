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
exports.ActivityUpdateManyWithoutOrganiserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActivityCreateManyOrganiserInputEnvelope_1 = require("../inputs/ActivityCreateManyOrganiserInputEnvelope");
const ActivityCreateOrConnectWithoutOrganiserInput_1 = require("../inputs/ActivityCreateOrConnectWithoutOrganiserInput");
const ActivityCreateWithoutOrganiserInput_1 = require("../inputs/ActivityCreateWithoutOrganiserInput");
const ActivityScalarWhereInput_1 = require("../inputs/ActivityScalarWhereInput");
const ActivityUpdateManyWithWhereWithoutOrganiserInput_1 = require("../inputs/ActivityUpdateManyWithWhereWithoutOrganiserInput");
const ActivityUpdateWithWhereUniqueWithoutOrganiserInput_1 = require("../inputs/ActivityUpdateWithWhereUniqueWithoutOrganiserInput");
const ActivityUpsertWithWhereUniqueWithoutOrganiserInput_1 = require("../inputs/ActivityUpsertWithWhereUniqueWithoutOrganiserInput");
const ActivityWhereUniqueInput_1 = require("../inputs/ActivityWhereUniqueInput");
let ActivityUpdateManyWithoutOrganiserInput = class ActivityUpdateManyWithoutOrganiserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActivityCreateWithoutOrganiserInput_1.ActivityCreateWithoutOrganiserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityCreateOrConnectWithoutOrganiserInput_1.ActivityCreateOrConnectWithoutOrganiserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpsertWithWhereUniqueWithoutOrganiserInput_1.ActivityUpsertWithWhereUniqueWithoutOrganiserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateManyOrganiserInputEnvelope_1.ActivityCreateManyOrganiserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateManyOrganiserInputEnvelope_1.ActivityCreateManyOrganiserInputEnvelope)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityWhereUniqueInput_1.ActivityWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpdateWithWhereUniqueWithoutOrganiserInput_1.ActivityUpdateWithWhereUniqueWithoutOrganiserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityUpdateManyWithWhereWithoutOrganiserInput_1.ActivityUpdateManyWithWhereWithoutOrganiserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActivityScalarWhereInput_1.ActivityScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActivityUpdateManyWithoutOrganiserInput.prototype, "deleteMany", void 0);
ActivityUpdateManyWithoutOrganiserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActivityUpdateManyWithoutOrganiserInput);
exports.ActivityUpdateManyWithoutOrganiserInput = ActivityUpdateManyWithoutOrganiserInput;
