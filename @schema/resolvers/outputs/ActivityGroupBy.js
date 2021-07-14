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
exports.ActivityGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActivityCountAggregate_1 = require("../outputs/ActivityCountAggregate");
const ActivityMaxAggregate_1 = require("../outputs/ActivityMaxAggregate");
const ActivityMinAggregate_1 = require("../outputs/ActivityMinAggregate");
let ActivityGroupBy = class ActivityGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActivityGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ActivityGroupBy.prototype, "startAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ActivityGroupBy.prototype, "endAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ActivityGroupBy.prototype, "isOnline", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ActivityGroupBy.prototype, "isAllDay", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActivityGroupBy.prototype, "activityTypeId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ActivityGroupBy.prototype, "createdByUserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ActivityGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ActivityGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityGroupBy.prototype, "acterId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActivityGroupBy.prototype, "organiserId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityCountAggregate_1.ActivityCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActivityCountAggregate_1.ActivityCountAggregate)
], ActivityGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityMinAggregate_1.ActivityMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActivityMinAggregate_1.ActivityMinAggregate)
], ActivityGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActivityMaxAggregate_1.ActivityMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ActivityMaxAggregate_1.ActivityMaxAggregate)
], ActivityGroupBy.prototype, "max", void 0);
ActivityGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], ActivityGroupBy);
exports.ActivityGroupBy = ActivityGroupBy;
