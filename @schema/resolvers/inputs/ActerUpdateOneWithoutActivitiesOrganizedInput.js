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
exports.ActerUpdateOneWithoutActivitiesOrganizedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateOrConnectWithoutActivitiesOrganizedInput_1 = require("../inputs/ActerCreateOrConnectWithoutActivitiesOrganizedInput");
const ActerCreateWithoutActivitiesOrganizedInput_1 = require("../inputs/ActerCreateWithoutActivitiesOrganizedInput");
const ActerUpdateWithoutActivitiesOrganizedInput_1 = require("../inputs/ActerUpdateWithoutActivitiesOrganizedInput");
const ActerUpsertWithoutActivitiesOrganizedInput_1 = require("../inputs/ActerUpsertWithoutActivitiesOrganizedInput");
const ActerWhereUniqueInput_1 = require("../inputs/ActerWhereUniqueInput");
let ActerUpdateOneWithoutActivitiesOrganizedInput = class ActerUpdateOneWithoutActivitiesOrganizedInput {
};
__decorate([
    TypeGraphQL.Field(_type => ActerCreateWithoutActivitiesOrganizedInput_1.ActerCreateWithoutActivitiesOrganizedInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateWithoutActivitiesOrganizedInput_1.ActerCreateWithoutActivitiesOrganizedInput)
], ActerUpdateOneWithoutActivitiesOrganizedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateOrConnectWithoutActivitiesOrganizedInput_1.ActerCreateOrConnectWithoutActivitiesOrganizedInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateOrConnectWithoutActivitiesOrganizedInput_1.ActerCreateOrConnectWithoutActivitiesOrganizedInput)
], ActerUpdateOneWithoutActivitiesOrganizedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpsertWithoutActivitiesOrganizedInput_1.ActerUpsertWithoutActivitiesOrganizedInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpsertWithoutActivitiesOrganizedInput_1.ActerUpsertWithoutActivitiesOrganizedInput)
], ActerUpdateOneWithoutActivitiesOrganizedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerWhereUniqueInput_1.ActerWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ActerWhereUniqueInput_1.ActerWhereUniqueInput)
], ActerUpdateOneWithoutActivitiesOrganizedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ActerUpdateOneWithoutActivitiesOrganizedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ActerUpdateOneWithoutActivitiesOrganizedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateWithoutActivitiesOrganizedInput_1.ActerUpdateWithoutActivitiesOrganizedInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateWithoutActivitiesOrganizedInput_1.ActerUpdateWithoutActivitiesOrganizedInput)
], ActerUpdateOneWithoutActivitiesOrganizedInput.prototype, "update", void 0);
ActerUpdateOneWithoutActivitiesOrganizedInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateOneWithoutActivitiesOrganizedInput);
exports.ActerUpdateOneWithoutActivitiesOrganizedInput = ActerUpdateOneWithoutActivitiesOrganizedInput;
