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
exports.ActerUpdateWithoutAuthoredPostsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActerConnectionUpdateManyWithoutFollowerInput_1 = require("../inputs/ActerConnectionUpdateManyWithoutFollowerInput");
const ActerConnectionUpdateManyWithoutFollowingInput_1 = require("../inputs/ActerConnectionUpdateManyWithoutFollowingInput");
const ActerInterestUpdateManyWithoutActerInput_1 = require("../inputs/ActerInterestUpdateManyWithoutActerInput");
const ActerTypeUpdateOneRequiredWithoutActerInput_1 = require("../inputs/ActerTypeUpdateOneRequiredWithoutActerInput");
const ActerUpdateManyWithoutParentInput_1 = require("../inputs/ActerUpdateManyWithoutParentInput");
const ActerUpdateOneWithoutChildrenInput_1 = require("../inputs/ActerUpdateOneWithoutChildrenInput");
const ActivityUpdateManyWithoutOrganiserInput_1 = require("../inputs/ActivityUpdateManyWithoutOrganiserInput");
const ActivityUpdateOneWithoutActerInput_1 = require("../inputs/ActivityUpdateOneWithoutActerInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumActerJoinSettingsFieldUpdateOperationsInput_1 = require("../inputs/EnumActerJoinSettingsFieldUpdateOperationsInput");
const LinkUpdateManyWithoutActerInput_1 = require("../inputs/LinkUpdateManyWithoutActerInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutActerInput_1 = require("../inputs/PostUpdateManyWithoutActerInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutActersCreatedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutActersCreatedInput");
const UserUpdateOneWithoutActerInput_1 = require("../inputs/UserUpdateOneWithoutActerInput");
const UserUpdateOneWithoutActersDeletedInput_1 = require("../inputs/UserUpdateOneWithoutActersDeletedInput");
let ActerUpdateWithoutAuthoredPostsInput = class ActerUpdateWithoutAuthoredPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "location", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "locationLat", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "locationLng", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "avatarUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "bannerUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "useAdmins", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumActerJoinSettingsFieldUpdateOperationsInput_1.EnumActerJoinSettingsFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumActerJoinSettingsFieldUpdateOperationsInput_1.EnumActerJoinSettingsFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "acterJoinSetting", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "deletedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerInterestUpdateManyWithoutActerInput_1.ActerInterestUpdateManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerInterestUpdateManyWithoutActerInput_1.ActerInterestUpdateManyWithoutActerInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "ActerInterests", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActersCreatedInput_1.UserUpdateOneRequiredWithoutActersCreatedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutActersCreatedInput_1.UserUpdateOneRequiredWithoutActersCreatedInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "createdByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutActersDeletedInput_1.UserUpdateOneWithoutActersDeletedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneWithoutActersDeletedInput_1.UserUpdateOneWithoutActersDeletedInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "DeletedByUser", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerTypeUpdateOneRequiredWithoutActerInput_1.ActerTypeUpdateOneRequiredWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerTypeUpdateOneRequiredWithoutActerInput_1.ActerTypeUpdateOneRequiredWithoutActerInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "ActerType", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateOneWithoutChildrenInput_1.ActerUpdateOneWithoutChildrenInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateOneWithoutChildrenInput_1.ActerUpdateOneWithoutChildrenInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "Parent", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerUpdateManyWithoutParentInput_1.ActerUpdateManyWithoutParentInput, {
        nullable: true
    }),
    __metadata("design:type", ActerUpdateManyWithoutParentInput_1.ActerUpdateManyWithoutParentInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "Children", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionUpdateManyWithoutFollowerInput_1.ActerConnectionUpdateManyWithoutFollowerInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionUpdateManyWithoutFollowerInput_1.ActerConnectionUpdateManyWithoutFollowerInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "Following", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActerConnectionUpdateManyWithoutFollowingInput_1.ActerConnectionUpdateManyWithoutFollowingInput, {
        nullable: true
    }),
    __metadata("design:type", ActerConnectionUpdateManyWithoutFollowingInput_1.ActerConnectionUpdateManyWithoutFollowingInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "Followers", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutActerInput_1.UserUpdateOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneWithoutActerInput_1.UserUpdateOneWithoutActerInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityUpdateOneWithoutActerInput_1.ActivityUpdateOneWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityUpdateOneWithoutActerInput_1.ActivityUpdateOneWithoutActerInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "Activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityUpdateManyWithoutOrganiserInput_1.ActivityUpdateManyWithoutOrganiserInput, {
        nullable: true
    }),
    __metadata("design:type", ActivityUpdateManyWithoutOrganiserInput_1.ActivityUpdateManyWithoutOrganiserInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "ActivitiesOrganized", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutActerInput_1.PostUpdateManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", PostUpdateManyWithoutActerInput_1.PostUpdateManyWithoutActerInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "AttachedPosts", void 0);
__decorate([
    TypeGraphQL.Field(_type => LinkUpdateManyWithoutActerInput_1.LinkUpdateManyWithoutActerInput, {
        nullable: true
    }),
    __metadata("design:type", LinkUpdateManyWithoutActerInput_1.LinkUpdateManyWithoutActerInput)
], ActerUpdateWithoutAuthoredPostsInput.prototype, "AttachedLinks", void 0);
ActerUpdateWithoutAuthoredPostsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ActerUpdateWithoutAuthoredPostsInput);
exports.ActerUpdateWithoutAuthoredPostsInput = ActerUpdateWithoutAuthoredPostsInput;
