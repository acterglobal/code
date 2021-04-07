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
exports.UserCreateWithoutActersDeletedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/ActerConnectionCreateNestedManyWithoutCreatedByUserInput");
const ActerCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/ActerCreateNestedManyWithoutCreatedByUserInput");
const ActerCreateNestedOneWithoutUserInput_1 = require("../inputs/ActerCreateNestedOneWithoutUserInput");
const ActerInterestCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/ActerInterestCreateNestedManyWithoutCreatedByUserInput");
const ActivityCreateNestedManyWithoutCreatedByUserInput_1 = require("../inputs/ActivityCreateNestedManyWithoutCreatedByUserInput");
let UserCreateWithoutActersDeletedInput = class UserCreateWithoutActersDeletedInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActersDeletedInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActersDeletedInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActersDeletedInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutActersDeletedInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutActersDeletedInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutActersDeletedInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutActersDeletedInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedOneWithoutUserInput_1.ActerCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedOneWithoutUserInput_1.ActerCreateNestedOneWithoutUserInput)
], UserCreateWithoutActersDeletedInput.prototype, "Acter", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerCreateNestedManyWithoutCreatedByUserInput_1.ActerCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerCreateNestedManyWithoutCreatedByUserInput_1.ActerCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActersDeletedInput.prototype, "ActersCreated", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionCreateNestedManyWithoutCreatedByUserInput_1.ActerConnectionCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionCreateNestedManyWithoutCreatedByUserInput_1.ActerConnectionCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActersDeletedInput.prototype, "ActerConnections", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestCreateNestedManyWithoutCreatedByUserInput_1.ActerInterestCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestCreateNestedManyWithoutCreatedByUserInput_1.ActerInterestCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActersDeletedInput.prototype, "ActerInterest", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCreateNestedManyWithoutCreatedByUserInput_1.ActivityCreateNestedManyWithoutCreatedByUserInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityCreateNestedManyWithoutCreatedByUserInput_1.ActivityCreateNestedManyWithoutCreatedByUserInput)
], UserCreateWithoutActersDeletedInput.prototype, "ActivitiesCreated", void 0);
UserCreateWithoutActersDeletedInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateWithoutActersDeletedInput);
exports.UserCreateWithoutActersDeletedInput = UserCreateWithoutActersDeletedInput;
