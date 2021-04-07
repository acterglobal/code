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
exports.UserUpdateOneWithoutActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutActerInput_1 = require("../inputs/UserCreateOrConnectWithoutActerInput");
const UserCreateWithoutActerInput_1 = require("../inputs/UserCreateWithoutActerInput");
const UserUpdateWithoutActerInput_1 = require("../inputs/UserUpdateWithoutActerInput");
const UserUpsertWithoutActerInput_1 = require("../inputs/UserUpsertWithoutActerInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutActerInput = class UserUpdateOneWithoutActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutActerInput_1.UserCreateWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutActerInput_1.UserCreateWithoutActerInput)
], UserUpdateOneWithoutActerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutActerInput_1.UserCreateOrConnectWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutActerInput_1.UserCreateOrConnectWithoutActerInput)
], UserUpdateOneWithoutActerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutActerInput_1.UserUpsertWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpsertWithoutActerInput_1.UserUpsertWithoutActerInput)
], UserUpdateOneWithoutActerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutActerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutActerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutActerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutActerInput_1.UserUpdateWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateWithoutActerInput_1.UserUpdateWithoutActerInput)
], UserUpdateOneWithoutActerInput.prototype, "update", void 0);
UserUpdateOneWithoutActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateOneWithoutActerInput);
exports.UserUpdateOneWithoutActerInput = UserUpdateOneWithoutActerInput;
