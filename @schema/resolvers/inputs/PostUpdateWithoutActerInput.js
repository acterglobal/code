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
exports.PostUpdateWithoutActerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerUpdateOneRequiredWithoutAuthoredPostsInput_1 = require("../inputs/ActerUpdateOneRequiredWithoutAuthoredPostsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateManyWithoutParentInput_1 = require("../inputs/PostUpdateManyWithoutParentInput");
const PostUpdateOneWithoutCommentsInput_1 = require("../inputs/PostUpdateOneWithoutCommentsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PostUpdateWithoutActerInput = class PostUpdateWithoutActerInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutActerInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutActerInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutActerInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutActerInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneWithoutCommentsInput_1.PostUpdateOneWithoutCommentsInput, {
        nullable: true
    }),
    __metadata("design:type", PostUpdateOneWithoutCommentsInput_1.PostUpdateOneWithoutCommentsInput)
], PostUpdateWithoutActerInput.prototype, "Parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutParentInput_1.PostUpdateManyWithoutParentInput, {
        nullable: true
    }),
    __metadata("design:type", PostUpdateManyWithoutParentInput_1.PostUpdateManyWithoutParentInput)
], PostUpdateWithoutActerInput.prototype, "Comments", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateOneRequiredWithoutAuthoredPostsInput_1.ActerUpdateOneRequiredWithoutAuthoredPostsInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateOneRequiredWithoutAuthoredPostsInput_1.ActerUpdateOneRequiredWithoutAuthoredPostsInput)
], PostUpdateWithoutActerInput.prototype, "Author", void 0);
PostUpdateWithoutActerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], PostUpdateWithoutActerInput);
exports.PostUpdateWithoutActerInput = PostUpdateWithoutActerInput;
