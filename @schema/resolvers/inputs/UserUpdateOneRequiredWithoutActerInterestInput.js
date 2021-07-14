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
exports.UserUpdateOneRequiredWithoutActerInterestInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutActerInterestInput_1 = require("../inputs/UserCreateOrConnectWithoutActerInterestInput");
const UserCreateWithoutActerInterestInput_1 = require("../inputs/UserCreateWithoutActerInterestInput");
const UserUpdateWithoutActerInterestInput_1 = require("../inputs/UserUpdateWithoutActerInterestInput");
const UserUpsertWithoutActerInterestInput_1 = require("../inputs/UserUpsertWithoutActerInterestInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutActerInterestInput = class UserUpdateOneRequiredWithoutActerInterestInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutActerInterestInput_1.UserCreateWithoutActerInterestInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutActerInterestInput_1.UserCreateWithoutActerInterestInput)
], UserUpdateOneRequiredWithoutActerInterestInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutActerInterestInput_1.UserCreateOrConnectWithoutActerInterestInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutActerInterestInput_1.UserCreateOrConnectWithoutActerInterestInput)
], UserUpdateOneRequiredWithoutActerInterestInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutActerInterestInput_1.UserUpsertWithoutActerInterestInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpsertWithoutActerInterestInput_1.UserUpsertWithoutActerInterestInput)
], UserUpdateOneRequiredWithoutActerInterestInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutActerInterestInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutActerInterestInput_1.UserUpdateWithoutActerInterestInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateWithoutActerInterestInput_1.UserUpdateWithoutActerInterestInput)
], UserUpdateOneRequiredWithoutActerInterestInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutActerInterestInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutActerInterestInput);
exports.UserUpdateOneRequiredWithoutActerInterestInput = UserUpdateOneRequiredWithoutActerInterestInput;