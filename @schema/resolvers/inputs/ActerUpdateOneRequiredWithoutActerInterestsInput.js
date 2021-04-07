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
exports.ActerUpdateOneRequiredWithoutActerInterestsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerCreateOrConnectWithoutActerInterestsInput_1 = require("../inputs/ActerCreateOrConnectWithoutActerInterestsInput");
const ActerCreateWithoutActerInterestsInput_1 = require("../inputs/ActerCreateWithoutActerInterestsInput");
const ActerUpdateWithoutActerInterestsInput_1 = require("../inputs/ActerUpdateWithoutActerInterestsInput");
const ActerUpsertWithoutActerInterestsInput_1 = require("../inputs/ActerUpsertWithoutActerInterestsInput");
const ActerWhereUniqueInput_1 = require("../inputs/ActerWhereUniqueInput");
let ActerUpdateOneRequiredWithoutActerInterestsInput = class ActerUpdateOneRequiredWithoutActerInterestsInput {
};
__decorate([
    TypeGraphQL.Field(_type => ActerCreateWithoutActerInterestsInput_1.ActerCreateWithoutActerInterestsInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateWithoutActerInterestsInput_1.ActerCreateWithoutActerInterestsInput)
], ActerUpdateOneRequiredWithoutActerInterestsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateOrConnectWithoutActerInterestsInput_1.ActerCreateOrConnectWithoutActerInterestsInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateOrConnectWithoutActerInterestsInput_1.ActerCreateOrConnectWithoutActerInterestsInput)
], ActerUpdateOneRequiredWithoutActerInterestsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpsertWithoutActerInterestsInput_1.ActerUpsertWithoutActerInterestsInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpsertWithoutActerInterestsInput_1.ActerUpsertWithoutActerInterestsInput)
], ActerUpdateOneRequiredWithoutActerInterestsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerWhereUniqueInput_1.ActerWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ActerWhereUniqueInput_1.ActerWhereUniqueInput)
], ActerUpdateOneRequiredWithoutActerInterestsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateWithoutActerInterestsInput_1.ActerUpdateWithoutActerInterestsInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateWithoutActerInterestsInput_1.ActerUpdateWithoutActerInterestsInput)
], ActerUpdateOneRequiredWithoutActerInterestsInput.prototype, "update", void 0);
ActerUpdateOneRequiredWithoutActerInterestsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateOneRequiredWithoutActerInterestsInput);
exports.ActerUpdateOneRequiredWithoutActerInterestsInput = ActerUpdateOneRequiredWithoutActerInterestsInput;
