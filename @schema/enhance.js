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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Acter: crudResolvers.ActerCrudResolver,
    ActerConnection: crudResolvers.ActerConnectionCrudResolver,
    ActerInterest: crudResolvers.ActerInterestCrudResolver,
    ActerType: crudResolvers.ActerTypeCrudResolver,
    ActerTypeRule: crudResolvers.ActerTypeRuleCrudResolver,
    Activity: crudResolvers.ActivityCrudResolver,
    Interest: crudResolvers.InterestCrudResolver,
    InterestType: crudResolvers.InterestTypeCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    VerificationRequest: crudResolvers.VerificationRequestCrudResolver
};
const relationResolversMap = {
    Acter: relationResolvers.ActerRelationsResolver,
    ActerConnection: relationResolvers.ActerConnectionRelationsResolver,
    ActerInterest: relationResolvers.ActerInterestRelationsResolver,
    ActerType: relationResolvers.ActerTypeRelationsResolver,
    ActerTypeRule: relationResolvers.ActerTypeRuleRelationsResolver,
    Activity: relationResolvers.ActivityRelationsResolver,
    Interest: relationResolvers.InterestRelationsResolver,
    InterestType: relationResolvers.InterestTypeRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const actionResolversMap = {
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver
    },
    Acter: {
        acter: actionResolvers.FindUniqueActerResolver,
        findFirstActer: actionResolvers.FindFirstActerResolver,
        acters: actionResolvers.FindManyActerResolver,
        createActer: actionResolvers.CreateActerResolver,
        deleteActer: actionResolvers.DeleteActerResolver,
        updateActer: actionResolvers.UpdateActerResolver,
        deleteManyActer: actionResolvers.DeleteManyActerResolver,
        updateManyActer: actionResolvers.UpdateManyActerResolver,
        upsertActer: actionResolvers.UpsertActerResolver,
        aggregateActer: actionResolvers.AggregateActerResolver
    },
    ActerConnection: {
        acterConnection: actionResolvers.FindUniqueActerConnectionResolver,
        findFirstActerConnection: actionResolvers.FindFirstActerConnectionResolver,
        acterConnections: actionResolvers.FindManyActerConnectionResolver,
        createActerConnection: actionResolvers.CreateActerConnectionResolver,
        deleteActerConnection: actionResolvers.DeleteActerConnectionResolver,
        updateActerConnection: actionResolvers.UpdateActerConnectionResolver,
        deleteManyActerConnection: actionResolvers.DeleteManyActerConnectionResolver,
        updateManyActerConnection: actionResolvers.UpdateManyActerConnectionResolver,
        upsertActerConnection: actionResolvers.UpsertActerConnectionResolver,
        aggregateActerConnection: actionResolvers.AggregateActerConnectionResolver
    },
    ActerInterest: {
        acterInterest: actionResolvers.FindUniqueActerInterestResolver,
        findFirstActerInterest: actionResolvers.FindFirstActerInterestResolver,
        acterInterests: actionResolvers.FindManyActerInterestResolver,
        createActerInterest: actionResolvers.CreateActerInterestResolver,
        deleteActerInterest: actionResolvers.DeleteActerInterestResolver,
        updateActerInterest: actionResolvers.UpdateActerInterestResolver,
        deleteManyActerInterest: actionResolvers.DeleteManyActerInterestResolver,
        updateManyActerInterest: actionResolvers.UpdateManyActerInterestResolver,
        upsertActerInterest: actionResolvers.UpsertActerInterestResolver,
        aggregateActerInterest: actionResolvers.AggregateActerInterestResolver
    },
    ActerType: {
        acterType: actionResolvers.FindUniqueActerTypeResolver,
        findFirstActerType: actionResolvers.FindFirstActerTypeResolver,
        acterTypes: actionResolvers.FindManyActerTypeResolver,
        createActerType: actionResolvers.CreateActerTypeResolver,
        deleteActerType: actionResolvers.DeleteActerTypeResolver,
        updateActerType: actionResolvers.UpdateActerTypeResolver,
        deleteManyActerType: actionResolvers.DeleteManyActerTypeResolver,
        updateManyActerType: actionResolvers.UpdateManyActerTypeResolver,
        upsertActerType: actionResolvers.UpsertActerTypeResolver,
        aggregateActerType: actionResolvers.AggregateActerTypeResolver
    },
    ActerTypeRule: {
        acterTypeRule: actionResolvers.FindUniqueActerTypeRuleResolver,
        findFirstActerTypeRule: actionResolvers.FindFirstActerTypeRuleResolver,
        acterTypeRules: actionResolvers.FindManyActerTypeRuleResolver,
        createActerTypeRule: actionResolvers.CreateActerTypeRuleResolver,
        deleteActerTypeRule: actionResolvers.DeleteActerTypeRuleResolver,
        updateActerTypeRule: actionResolvers.UpdateActerTypeRuleResolver,
        deleteManyActerTypeRule: actionResolvers.DeleteManyActerTypeRuleResolver,
        updateManyActerTypeRule: actionResolvers.UpdateManyActerTypeRuleResolver,
        upsertActerTypeRule: actionResolvers.UpsertActerTypeRuleResolver,
        aggregateActerTypeRule: actionResolvers.AggregateActerTypeRuleResolver
    },
    Activity: {
        activity: actionResolvers.FindUniqueActivityResolver,
        findFirstActivity: actionResolvers.FindFirstActivityResolver,
        activities: actionResolvers.FindManyActivityResolver,
        createActivity: actionResolvers.CreateActivityResolver,
        deleteActivity: actionResolvers.DeleteActivityResolver,
        updateActivity: actionResolvers.UpdateActivityResolver,
        deleteManyActivity: actionResolvers.DeleteManyActivityResolver,
        updateManyActivity: actionResolvers.UpdateManyActivityResolver,
        upsertActivity: actionResolvers.UpsertActivityResolver,
        aggregateActivity: actionResolvers.AggregateActivityResolver
    },
    Interest: {
        interest: actionResolvers.FindUniqueInterestResolver,
        findFirstInterest: actionResolvers.FindFirstInterestResolver,
        interests: actionResolvers.FindManyInterestResolver,
        createInterest: actionResolvers.CreateInterestResolver,
        deleteInterest: actionResolvers.DeleteInterestResolver,
        updateInterest: actionResolvers.UpdateInterestResolver,
        deleteManyInterest: actionResolvers.DeleteManyInterestResolver,
        updateManyInterest: actionResolvers.UpdateManyInterestResolver,
        upsertInterest: actionResolvers.UpsertInterestResolver,
        aggregateInterest: actionResolvers.AggregateInterestResolver
    },
    InterestType: {
        interestType: actionResolvers.FindUniqueInterestTypeResolver,
        findFirstInterestType: actionResolvers.FindFirstInterestTypeResolver,
        interestTypes: actionResolvers.FindManyInterestTypeResolver,
        createInterestType: actionResolvers.CreateInterestTypeResolver,
        deleteInterestType: actionResolvers.DeleteInterestTypeResolver,
        updateInterestType: actionResolvers.UpdateInterestTypeResolver,
        deleteManyInterestType: actionResolvers.DeleteManyInterestTypeResolver,
        updateManyInterestType: actionResolvers.UpdateManyInterestTypeResolver,
        upsertInterestType: actionResolvers.UpsertInterestTypeResolver,
        aggregateInterestType: actionResolvers.AggregateInterestTypeResolver
    },
    Session: {
        session: actionResolvers.FindUniqueSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        sessions: actionResolvers.FindManySessionResolver,
        createSession: actionResolvers.CreateSessionResolver,
        deleteSession: actionResolvers.DeleteSessionResolver,
        updateSession: actionResolvers.UpdateSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        upsertSession: actionResolvers.UpsertSessionResolver,
        aggregateSession: actionResolvers.AggregateSessionResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver
    },
    VerificationRequest: {
        verificationRequest: actionResolvers.FindUniqueVerificationRequestResolver,
        findFirstVerificationRequest: actionResolvers.FindFirstVerificationRequestResolver,
        verificationRequests: actionResolvers.FindManyVerificationRequestResolver,
        createVerificationRequest: actionResolvers.CreateVerificationRequestResolver,
        deleteVerificationRequest: actionResolvers.DeleteVerificationRequestResolver,
        updateVerificationRequest: actionResolvers.UpdateVerificationRequestResolver,
        deleteManyVerificationRequest: actionResolvers.DeleteManyVerificationRequestResolver,
        updateManyVerificationRequest: actionResolvers.UpdateManyVerificationRequestResolver,
        upsertVerificationRequest: actionResolvers.UpsertVerificationRequestResolver,
        aggregateVerificationRequest: actionResolvers.AggregateVerificationRequestResolver
    }
};
const resolversInfo = {
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount"],
    Acter: ["acter", "findFirstActer", "acters", "createActer", "deleteActer", "updateActer", "deleteManyActer", "updateManyActer", "upsertActer", "aggregateActer"],
    ActerConnection: ["acterConnection", "findFirstActerConnection", "acterConnections", "createActerConnection", "deleteActerConnection", "updateActerConnection", "deleteManyActerConnection", "updateManyActerConnection", "upsertActerConnection", "aggregateActerConnection"],
    ActerInterest: ["acterInterest", "findFirstActerInterest", "acterInterests", "createActerInterest", "deleteActerInterest", "updateActerInterest", "deleteManyActerInterest", "updateManyActerInterest", "upsertActerInterest", "aggregateActerInterest"],
    ActerType: ["acterType", "findFirstActerType", "acterTypes", "createActerType", "deleteActerType", "updateActerType", "deleteManyActerType", "updateManyActerType", "upsertActerType", "aggregateActerType"],
    ActerTypeRule: ["acterTypeRule", "findFirstActerTypeRule", "acterTypeRules", "createActerTypeRule", "deleteActerTypeRule", "updateActerTypeRule", "deleteManyActerTypeRule", "updateManyActerTypeRule", "upsertActerTypeRule", "aggregateActerTypeRule"],
    Activity: ["activity", "findFirstActivity", "activities", "createActivity", "deleteActivity", "updateActivity", "deleteManyActivity", "updateManyActivity", "upsertActivity", "aggregateActivity"],
    Interest: ["interest", "findFirstInterest", "interests", "createInterest", "deleteInterest", "updateInterest", "deleteManyInterest", "updateManyInterest", "upsertInterest", "aggregateInterest"],
    InterestType: ["interestType", "findFirstInterestType", "interestTypes", "createInterestType", "deleteInterestType", "updateInterestType", "deleteManyInterestType", "updateManyInterestType", "upsertInterestType", "aggregateInterestType"],
    Session: ["session", "findFirstSession", "sessions", "createSession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession"],
    User: ["user", "findFirstUser", "users", "createUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser"],
    VerificationRequest: ["verificationRequest", "findFirstVerificationRequest", "verificationRequests", "createVerificationRequest", "deleteVerificationRequest", "updateVerificationRequest", "deleteManyVerificationRequest", "updateManyVerificationRequest", "upsertVerificationRequest", "aggregateVerificationRequest"]
};
const relationResolversInfo = {
    Acter: ["createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerConnection: ["CreatedByUser", "Follower", "Following"],
    ActerInterest: ["CreatedByUser", "Acter", "Interest"],
    ActerType: ["Acter", "ActerTypeRules", "RulesOnActerType"],
    ActerTypeRule: ["Subject", "Object"],
    Activity: ["createdByUser", "Acter", "Organiser"],
    Interest: ["InterestType", "InterestActers"],
    InterestType: ["parent", "children", "Interests"],
    User: ["Acter", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"]
};
const modelsInfo = {
    Account: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    Acter: ["id", "acterTypeId", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "createdByUserId", "deletedAt", "deltedByUserId", "parentActerId"],
    ActerConnection: ["id", "isApproved", "createdAt", "updatedAt", "createdByUserId", "followerActerId", "followingActerId"],
    ActerInterest: ["id", "createdAt", "updatedAt", "createdByUserId", "acterId", "interestId"],
    ActerType: ["id", "name"],
    ActerTypeRule: ["id", "canCreate", "canJoin", "canBecome", "subjectActerTypeId", "objectActerTypeId"],
    Activity: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdByUserId", "createdAt", "updatedAt", "acterId", "organiserId"],
    Interest: ["id", "name", "description", "sdgNumber", "interestTypeId"],
    InterestType: ["id", "name", "sortOrder", "parentInterestTypeId"],
    Session: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    User: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "acterId"],
    VerificationRequest: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"]
};
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountOrderByInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountWhereUniqueInput: ["id", "compoundId"],
    ActerWhereInput: ["AND", "OR", "NOT", "id", "acterTypeId", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "createdByUser", "createdByUserId", "deletedAt", "deltedByUserId", "DeletedByUser", "ActerType", "Parent", "Children", "parentActerId", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerOrderByInput: ["id", "acterTypeId", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "createdByUserId", "deletedAt", "deltedByUserId", "parentActerId"],
    ActerWhereUniqueInput: ["id", "slug_unique_for_acter_type"],
    ActerConnectionWhereInput: ["AND", "OR", "NOT", "id", "isApproved", "createdAt", "updatedAt", "CreatedByUser", "createdByUserId", "Follower", "followerActerId", "Following", "followingActerId"],
    ActerConnectionOrderByInput: ["id", "isApproved", "createdAt", "updatedAt", "createdByUserId", "followerActerId", "followingActerId"],
    ActerConnectionWhereUniqueInput: ["id", "acter_follower_following"],
    ActerInterestWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "CreatedByUser", "createdByUserId", "Acter", "acterId", "Interest", "interestId"],
    ActerInterestOrderByInput: ["id", "createdAt", "updatedAt", "createdByUserId", "acterId", "interestId"],
    ActerInterestWhereUniqueInput: ["id", "acter_interests_unique"],
    ActerTypeWhereInput: ["AND", "OR", "NOT", "id", "name", "Acter", "ActerTypeRules", "RulesOnActerType"],
    ActerTypeOrderByInput: ["id", "name"],
    ActerTypeWhereUniqueInput: ["id", "name"],
    ActerTypeRuleWhereInput: ["AND", "OR", "NOT", "id", "canCreate", "canJoin", "canBecome", "Subject", "subjectActerTypeId", "Object", "objectActerTypeId"],
    ActerTypeRuleOrderByInput: ["id", "canCreate", "canJoin", "canBecome", "subjectActerTypeId", "objectActerTypeId"],
    ActerTypeRuleWhereUniqueInput: ["id", "subject_object_acter_type_ids"],
    ActivityWhereInput: ["AND", "OR", "NOT", "id", "startAt", "endAt", "isOnline", "isAllDay", "createdByUser", "createdByUserId", "createdAt", "updatedAt", "Acter", "acterId", "Organiser", "organiserId"],
    ActivityOrderByInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdByUserId", "createdAt", "updatedAt", "acterId", "organiserId"],
    ActivityWhereUniqueInput: ["id", "acterId"],
    InterestWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "sdgNumber", "InterestType", "interestTypeId", "InterestActers"],
    InterestOrderByInput: ["id", "name", "description", "sdgNumber", "interestTypeId"],
    InterestWhereUniqueInput: ["id", "nameUniqueForInterestType"],
    InterestTypeWhereInput: ["AND", "OR", "NOT", "id", "name", "parent", "children", "sortOrder", "parentInterestTypeId", "Interests"],
    InterestTypeOrderByInput: ["id", "name", "sortOrder", "parentInterestTypeId"],
    InterestTypeWhereUniqueInput: ["id", "nameUniqueForParentInterestType"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionOrderByInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionWhereUniqueInput: ["id", "sessionToken", "accessToken"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "acterId", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    UserOrderByInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "acterId"],
    UserWhereUniqueInput: ["id", "email"],
    VerificationRequestWhereInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestOrderByInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestWhereUniqueInput: ["id", "token"],
    AccountCreateInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountUpdateInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    ActerCreateInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerUpdateInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerUpdateManyMutationInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt"],
    ActerConnectionCreateInput: ["id", "isApproved", "createdAt", "updatedAt", "CreatedByUser", "Follower", "Following"],
    ActerConnectionUpdateInput: ["id", "isApproved", "createdAt", "updatedAt", "CreatedByUser", "Follower", "Following"],
    ActerConnectionUpdateManyMutationInput: ["id", "isApproved", "createdAt", "updatedAt"],
    ActerInterestCreateInput: ["id", "createdAt", "updatedAt", "CreatedByUser", "Acter", "Interest"],
    ActerInterestUpdateInput: ["id", "createdAt", "updatedAt", "CreatedByUser", "Acter", "Interest"],
    ActerInterestUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
    ActerTypeCreateInput: ["id", "name", "Acter", "ActerTypeRules", "RulesOnActerType"],
    ActerTypeUpdateInput: ["id", "name", "Acter", "ActerTypeRules", "RulesOnActerType"],
    ActerTypeUpdateManyMutationInput: ["id", "name"],
    ActerTypeRuleCreateInput: ["id", "canCreate", "canJoin", "canBecome", "Subject", "Object"],
    ActerTypeRuleUpdateInput: ["id", "canCreate", "canJoin", "canBecome", "Subject", "Object"],
    ActerTypeRuleUpdateManyMutationInput: ["id", "canCreate", "canJoin", "canBecome"],
    ActivityCreateInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt", "createdByUser", "Acter", "Organiser"],
    ActivityUpdateInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt", "createdByUser", "Acter", "Organiser"],
    ActivityUpdateManyMutationInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt"],
    InterestCreateInput: ["id", "name", "description", "sdgNumber", "InterestType", "InterestActers"],
    InterestUpdateInput: ["id", "name", "description", "sdgNumber", "InterestType", "InterestActers"],
    InterestUpdateManyMutationInput: ["id", "name", "description", "sdgNumber"],
    InterestTypeCreateInput: ["id", "name", "sortOrder", "parent", "children", "Interests"],
    InterestTypeUpdateInput: ["id", "name", "sortOrder", "parent", "children", "Interests"],
    InterestTypeUpdateManyMutationInput: ["id", "name", "sortOrder"],
    SessionCreateInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionUpdateInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionUpdateManyMutationInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestCreateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestUpdateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestUpdateManyMutationInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolFilter: ["equals", "not"],
    UserRelationFilter: ["is", "isNot"],
    ActerTypeRelationFilter: ["is", "isNot"],
    ActerRelationFilter: ["is", "isNot"],
    ActerListRelationFilter: ["every", "some", "none"],
    ActerConnectionListRelationFilter: ["every", "some", "none"],
    ActerInterestListRelationFilter: ["every", "some", "none"],
    ActivityRelationFilter: ["is", "isNot"],
    ActivityListRelationFilter: ["every", "some", "none"],
    ActerSlug_unique_for_acter_typeCompoundUniqueInput: ["slug", "acterTypeId"],
    BoolNullableFilter: ["equals", "not"],
    ActerConnectionActer_follower_followingCompoundUniqueInput: ["followerActerId", "followingActerId"],
    InterestRelationFilter: ["is", "isNot"],
    ActerInterestActer_interests_uniqueCompoundUniqueInput: ["acterId", "interestId"],
    ActerTypeRuleListRelationFilter: ["every", "some", "none"],
    ActerTypeRuleSubject_object_acter_type_idsCompoundUniqueInput: ["subjectActerTypeId", "objectActerTypeId"],
    InterestTypeRelationFilter: ["is", "isNot"],
    InterestNameUniqueForInterestTypeCompoundUniqueInput: ["interestTypeId", "name"],
    InterestTypeListRelationFilter: ["every", "some", "none"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    InterestListRelationFilter: ["every", "some", "none"],
    InterestTypeNameUniqueForParentInterestTypeCompoundUniqueInput: ["parentInterestTypeId", "name"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserCreateNestedOneWithoutActersCreatedInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutActersDeletedInput: ["create", "connectOrCreate", "connect"],
    ActerTypeCreateNestedOneWithoutActerInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedOneWithoutChildrenInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "connect"],
    ActerConnectionCreateNestedManyWithoutFollowerInput: ["create", "connectOrCreate", "connect"],
    ActerConnectionCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutActerInput: ["create", "connectOrCreate", "connect"],
    ActerInterestCreateNestedManyWithoutActerInput: ["create", "connectOrCreate", "connect"],
    ActivityCreateNestedOneWithoutActerInput: ["create", "connectOrCreate", "connect"],
    ActivityCreateNestedManyWithoutOrganiserInput: ["create", "connectOrCreate", "connect"],
    NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutActersCreatedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneWithoutActersDeletedInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    ActerTypeUpdateOneRequiredWithoutActerInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ActerUpdateOneWithoutChildrenInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    ActerUpdateManyWithoutParentInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerConnectionUpdateManyWithoutFollowerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerConnectionUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserUpdateOneWithoutActerInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    ActerInterestUpdateManyWithoutActerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActivityUpdateOneWithoutActerInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    ActivityUpdateManyWithoutOrganiserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutActerConnectionsInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedOneWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedOneWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutActerConnectionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ActerUpdateOneRequiredWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ActerUpdateOneRequiredWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutActerInterestInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedOneWithoutActerInterestsInput: ["create", "connectOrCreate", "connect"],
    InterestCreateNestedOneWithoutInterestActersInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutActerInterestInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ActerUpdateOneRequiredWithoutActerInterestsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    InterestUpdateOneRequiredWithoutInterestActersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ActerCreateNestedManyWithoutActerTypeInput: ["create", "connectOrCreate", "connect"],
    ActerTypeRuleCreateNestedManyWithoutSubjectInput: ["create", "connectOrCreate", "connect"],
    ActerTypeRuleCreateNestedManyWithoutObjectInput: ["create", "connectOrCreate", "connect"],
    ActerUpdateManyWithoutActerTypeInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerTypeRuleUpdateManyWithoutSubjectInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerTypeRuleUpdateManyWithoutObjectInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerTypeCreateNestedOneWithoutActerTypeRulesInput: ["create", "connectOrCreate", "connect"],
    ActerTypeCreateNestedOneWithoutRulesOnActerTypeInput: ["create", "connectOrCreate", "connect"],
    ActerTypeUpdateOneRequiredWithoutActerTypeRulesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ActerTypeUpdateOneRequiredWithoutRulesOnActerTypeInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutActivitiesCreatedInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedOneWithoutActivityInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedOneWithoutActivitiesOrganizedInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutActivitiesCreatedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ActerUpdateOneWithoutActivityInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    ActerUpdateOneWithoutActivitiesOrganizedInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    InterestTypeCreateNestedOneWithoutInterestsInput: ["create", "connectOrCreate", "connect"],
    ActerInterestCreateNestedManyWithoutInterestInput: ["create", "connectOrCreate", "connect"],
    InterestTypeUpdateOneRequiredWithoutInterestsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ActerInterestUpdateManyWithoutInterestInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    InterestTypeCreateNestedOneWithoutChildrenInput: ["create", "connectOrCreate", "connect"],
    InterestTypeCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "connect"],
    InterestCreateNestedManyWithoutInterestTypeInput: ["create", "connectOrCreate", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    InterestTypeUpdateOneWithoutChildrenInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    InterestTypeUpdateManyWithoutParentInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    InterestUpdateManyWithoutInterestTypeInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "connect"],
    ActerConnectionCreateNestedManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "connect"],
    ActerInterestCreateNestedManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "connect"],
    ActivityCreateNestedManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "connect"],
    ActerCreateNestedManyWithoutDeletedByUserInput: ["create", "connectOrCreate", "connect"],
    ActerUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    ActerUpdateManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerConnectionUpdateManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerInterestUpdateManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActivityUpdateManyWithoutCreatedByUserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ActerUpdateManyWithoutDeletedByUserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedBoolNullableFilter: ["equals", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserCreateWithoutActersCreatedInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    UserCreateOrConnectWithoutActersCreatedInput: ["where", "create"],
    UserCreateWithoutActersDeletedInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated"],
    UserCreateOrConnectWithoutActersDeletedInput: ["where", "create"],
    ActerTypeCreateWithoutActerInput: ["id", "name", "ActerTypeRules", "RulesOnActerType"],
    ActerTypeCreateOrConnectWithoutActerInput: ["where", "create"],
    ActerCreateWithoutChildrenInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutChildrenInput: ["where", "create"],
    ActerCreateWithoutParentInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutParentInput: ["where", "create"],
    ActerConnectionCreateWithoutFollowerInput: ["id", "isApproved", "createdAt", "updatedAt", "CreatedByUser", "Following"],
    ActerConnectionCreateOrConnectWithoutFollowerInput: ["where", "create"],
    ActerConnectionCreateWithoutFollowingInput: ["id", "isApproved", "createdAt", "updatedAt", "CreatedByUser", "Follower"],
    ActerConnectionCreateOrConnectWithoutFollowingInput: ["where", "create"],
    UserCreateWithoutActerInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    UserCreateOrConnectWithoutActerInput: ["where", "create"],
    ActerInterestCreateWithoutActerInput: ["id", "createdAt", "updatedAt", "CreatedByUser", "Interest"],
    ActerInterestCreateOrConnectWithoutActerInput: ["where", "create"],
    ActivityCreateWithoutActerInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt", "createdByUser", "Organiser"],
    ActivityCreateOrConnectWithoutActerInput: ["where", "create"],
    ActivityCreateWithoutOrganiserInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt", "createdByUser", "Acter"],
    ActivityCreateOrConnectWithoutOrganiserInput: ["where", "create"],
    UserUpsertWithoutActersCreatedInput: ["update", "create"],
    UserUpdateWithoutActersCreatedInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    UserUpsertWithoutActersDeletedInput: ["update", "create"],
    UserUpdateWithoutActersDeletedInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated"],
    ActerTypeUpsertWithoutActerInput: ["update", "create"],
    ActerTypeUpdateWithoutActerInput: ["id", "name", "ActerTypeRules", "RulesOnActerType"],
    ActerUpsertWithoutChildrenInput: ["update", "create"],
    ActerUpdateWithoutChildrenInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
    ActerUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
    ActerUpdateManyWithWhereWithoutParentInput: ["where", "data"],
    ActerScalarWhereInput: ["AND", "OR", "NOT", "id", "acterTypeId", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "createdByUserId", "deletedAt", "deltedByUserId", "parentActerId"],
    ActerConnectionUpsertWithWhereUniqueWithoutFollowerInput: ["where", "update", "create"],
    ActerConnectionUpdateWithWhereUniqueWithoutFollowerInput: ["where", "data"],
    ActerConnectionUpdateManyWithWhereWithoutFollowerInput: ["where", "data"],
    ActerConnectionScalarWhereInput: ["AND", "OR", "NOT", "id", "isApproved", "createdAt", "updatedAt", "createdByUserId", "followerActerId", "followingActerId"],
    ActerConnectionUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
    ActerConnectionUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
    ActerConnectionUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
    UserUpsertWithoutActerInput: ["update", "create"],
    UserUpdateWithoutActerInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    ActerInterestUpsertWithWhereUniqueWithoutActerInput: ["where", "update", "create"],
    ActerInterestUpdateWithWhereUniqueWithoutActerInput: ["where", "data"],
    ActerInterestUpdateManyWithWhereWithoutActerInput: ["where", "data"],
    ActerInterestScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "createdByUserId", "acterId", "interestId"],
    ActivityUpsertWithoutActerInput: ["update", "create"],
    ActivityUpdateWithoutActerInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt", "createdByUser", "Organiser"],
    ActivityUpsertWithWhereUniqueWithoutOrganiserInput: ["where", "update", "create"],
    ActivityUpdateWithWhereUniqueWithoutOrganiserInput: ["where", "data"],
    ActivityUpdateManyWithWhereWithoutOrganiserInput: ["where", "data"],
    ActivityScalarWhereInput: ["AND", "OR", "NOT", "id", "startAt", "endAt", "isOnline", "isAllDay", "createdByUserId", "createdAt", "updatedAt", "acterId", "organiserId"],
    UserCreateWithoutActerConnectionsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    UserCreateOrConnectWithoutActerConnectionsInput: ["where", "create"],
    ActerCreateWithoutFollowingInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutFollowingInput: ["where", "create"],
    ActerCreateWithoutFollowersInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutFollowersInput: ["where", "create"],
    UserUpsertWithoutActerConnectionsInput: ["update", "create"],
    UserUpdateWithoutActerConnectionsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    ActerUpsertWithoutFollowingInput: ["update", "create"],
    ActerUpdateWithoutFollowingInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerUpsertWithoutFollowersInput: ["update", "create"],
    ActerUpdateWithoutFollowersInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    UserCreateWithoutActerInterestInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerConnections", "ActivitiesCreated", "ActersDeleted"],
    UserCreateOrConnectWithoutActerInterestInput: ["where", "create"],
    ActerCreateWithoutActerInterestsInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutActerInterestsInput: ["where", "create"],
    InterestCreateWithoutInterestActersInput: ["id", "name", "description", "sdgNumber", "InterestType"],
    InterestCreateOrConnectWithoutInterestActersInput: ["where", "create"],
    UserUpsertWithoutActerInterestInput: ["update", "create"],
    UserUpdateWithoutActerInterestInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerConnections", "ActivitiesCreated", "ActersDeleted"],
    ActerUpsertWithoutActerInterestsInput: ["update", "create"],
    ActerUpdateWithoutActerInterestsInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "Activity", "ActivitiesOrganized"],
    InterestUpsertWithoutInterestActersInput: ["update", "create"],
    InterestUpdateWithoutInterestActersInput: ["id", "name", "description", "sdgNumber", "InterestType"],
    ActerCreateWithoutActerTypeInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutActerTypeInput: ["where", "create"],
    ActerTypeRuleCreateWithoutSubjectInput: ["id", "canCreate", "canJoin", "canBecome", "Object"],
    ActerTypeRuleCreateOrConnectWithoutSubjectInput: ["where", "create"],
    ActerTypeRuleCreateWithoutObjectInput: ["id", "canCreate", "canJoin", "canBecome", "Subject"],
    ActerTypeRuleCreateOrConnectWithoutObjectInput: ["where", "create"],
    ActerUpsertWithWhereUniqueWithoutActerTypeInput: ["where", "update", "create"],
    ActerUpdateWithWhereUniqueWithoutActerTypeInput: ["where", "data"],
    ActerUpdateManyWithWhereWithoutActerTypeInput: ["where", "data"],
    ActerTypeRuleUpsertWithWhereUniqueWithoutSubjectInput: ["where", "update", "create"],
    ActerTypeRuleUpdateWithWhereUniqueWithoutSubjectInput: ["where", "data"],
    ActerTypeRuleUpdateManyWithWhereWithoutSubjectInput: ["where", "data"],
    ActerTypeRuleScalarWhereInput: ["AND", "OR", "NOT", "id", "canCreate", "canJoin", "canBecome", "subjectActerTypeId", "objectActerTypeId"],
    ActerTypeRuleUpsertWithWhereUniqueWithoutObjectInput: ["where", "update", "create"],
    ActerTypeRuleUpdateWithWhereUniqueWithoutObjectInput: ["where", "data"],
    ActerTypeRuleUpdateManyWithWhereWithoutObjectInput: ["where", "data"],
    ActerTypeCreateWithoutActerTypeRulesInput: ["id", "name", "Acter", "RulesOnActerType"],
    ActerTypeCreateOrConnectWithoutActerTypeRulesInput: ["where", "create"],
    ActerTypeCreateWithoutRulesOnActerTypeInput: ["id", "name", "Acter", "ActerTypeRules"],
    ActerTypeCreateOrConnectWithoutRulesOnActerTypeInput: ["where", "create"],
    ActerTypeUpsertWithoutActerTypeRulesInput: ["update", "create"],
    ActerTypeUpdateWithoutActerTypeRulesInput: ["id", "name", "Acter", "RulesOnActerType"],
    ActerTypeUpsertWithoutRulesOnActerTypeInput: ["update", "create"],
    ActerTypeUpdateWithoutRulesOnActerTypeInput: ["id", "name", "Acter", "ActerTypeRules"],
    UserCreateWithoutActivitiesCreatedInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerConnections", "ActerInterest", "ActersDeleted"],
    UserCreateOrConnectWithoutActivitiesCreatedInput: ["where", "create"],
    ActerCreateWithoutActivityInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutActivityInput: ["where", "create"],
    ActerCreateWithoutActivitiesOrganizedInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity"],
    ActerCreateOrConnectWithoutActivitiesOrganizedInput: ["where", "create"],
    UserUpsertWithoutActivitiesCreatedInput: ["update", "create"],
    UserUpdateWithoutActivitiesCreatedInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "ActersCreated", "ActerConnections", "ActerInterest", "ActersDeleted"],
    ActerUpsertWithoutActivityInput: ["update", "create"],
    ActerUpdateWithoutActivityInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "ActivitiesOrganized"],
    ActerUpsertWithoutActivitiesOrganizedInput: ["update", "create"],
    ActerUpdateWithoutActivitiesOrganizedInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity"],
    InterestTypeCreateWithoutInterestsInput: ["id", "name", "sortOrder", "parent", "children"],
    InterestTypeCreateOrConnectWithoutInterestsInput: ["where", "create"],
    ActerInterestCreateWithoutInterestInput: ["id", "createdAt", "updatedAt", "CreatedByUser", "Acter"],
    ActerInterestCreateOrConnectWithoutInterestInput: ["where", "create"],
    InterestTypeUpsertWithoutInterestsInput: ["update", "create"],
    InterestTypeUpdateWithoutInterestsInput: ["id", "name", "sortOrder", "parent", "children"],
    ActerInterestUpsertWithWhereUniqueWithoutInterestInput: ["where", "update", "create"],
    ActerInterestUpdateWithWhereUniqueWithoutInterestInput: ["where", "data"],
    ActerInterestUpdateManyWithWhereWithoutInterestInput: ["where", "data"],
    InterestTypeCreateWithoutChildrenInput: ["id", "name", "sortOrder", "parent", "Interests"],
    InterestTypeCreateOrConnectWithoutChildrenInput: ["where", "create"],
    InterestTypeCreateWithoutParentInput: ["id", "name", "sortOrder", "children", "Interests"],
    InterestTypeCreateOrConnectWithoutParentInput: ["where", "create"],
    InterestCreateWithoutInterestTypeInput: ["id", "name", "description", "sdgNumber", "InterestActers"],
    InterestCreateOrConnectWithoutInterestTypeInput: ["where", "create"],
    InterestTypeUpsertWithoutChildrenInput: ["update", "create"],
    InterestTypeUpdateWithoutChildrenInput: ["id", "name", "sortOrder", "parent", "Interests"],
    InterestTypeUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
    InterestTypeUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
    InterestTypeUpdateManyWithWhereWithoutParentInput: ["where", "data"],
    InterestTypeScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "sortOrder", "parentInterestTypeId"],
    InterestUpsertWithWhereUniqueWithoutInterestTypeInput: ["where", "update", "create"],
    InterestUpdateWithWhereUniqueWithoutInterestTypeInput: ["where", "data"],
    InterestUpdateManyWithWhereWithoutInterestTypeInput: ["where", "data"],
    InterestScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "sdgNumber", "interestTypeId"],
    ActerCreateWithoutUserInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutUserInput: ["where", "create"],
    ActerCreateWithoutCreatedByUserInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutCreatedByUserInput: ["where", "create"],
    ActerConnectionCreateWithoutCreatedByUserInput: ["id", "isApproved", "createdAt", "updatedAt", "Follower", "Following"],
    ActerConnectionCreateOrConnectWithoutCreatedByUserInput: ["where", "create"],
    ActerInterestCreateWithoutCreatedByUserInput: ["id", "createdAt", "updatedAt", "Acter", "Interest"],
    ActerInterestCreateOrConnectWithoutCreatedByUserInput: ["where", "create"],
    ActivityCreateWithoutCreatedByUserInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt", "Acter", "Organiser"],
    ActivityCreateOrConnectWithoutCreatedByUserInput: ["where", "create"],
    ActerCreateWithoutDeletedByUserInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerCreateOrConnectWithoutDeletedByUserInput: ["where", "create"],
    ActerUpsertWithoutUserInput: ["update", "create"],
    ActerUpdateWithoutUserInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerUpsertWithWhereUniqueWithoutCreatedByUserInput: ["where", "update", "create"],
    ActerUpdateWithWhereUniqueWithoutCreatedByUserInput: ["where", "data"],
    ActerUpdateManyWithWhereWithoutCreatedByUserInput: ["where", "data"],
    ActerConnectionUpsertWithWhereUniqueWithoutCreatedByUserInput: ["where", "update", "create"],
    ActerConnectionUpdateWithWhereUniqueWithoutCreatedByUserInput: ["where", "data"],
    ActerConnectionUpdateManyWithWhereWithoutCreatedByUserInput: ["where", "data"],
    ActerInterestUpsertWithWhereUniqueWithoutCreatedByUserInput: ["where", "update", "create"],
    ActerInterestUpdateWithWhereUniqueWithoutCreatedByUserInput: ["where", "data"],
    ActerInterestUpdateManyWithWhereWithoutCreatedByUserInput: ["where", "data"],
    ActivityUpsertWithWhereUniqueWithoutCreatedByUserInput: ["where", "update", "create"],
    ActivityUpdateWithWhereUniqueWithoutCreatedByUserInput: ["where", "data"],
    ActivityUpdateManyWithWhereWithoutCreatedByUserInput: ["where", "data"],
    ActerUpsertWithWhereUniqueWithoutDeletedByUserInput: ["where", "update", "create"],
    ActerUpdateWithWhereUniqueWithoutDeletedByUserInput: ["where", "data"],
    ActerUpdateManyWithWhereWithoutDeletedByUserInput: ["where", "data"],
    ActerUpdateWithoutParentInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "ActerType", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerConnectionUpdateWithoutFollowerInput: ["id", "isApproved", "createdAt", "updatedAt", "CreatedByUser", "Following"],
    ActerConnectionUpdateWithoutFollowingInput: ["id", "isApproved", "createdAt", "updatedAt", "CreatedByUser", "Follower"],
    ActerInterestUpdateWithoutActerInput: ["id", "createdAt", "updatedAt", "CreatedByUser", "Interest"],
    ActivityUpdateWithoutOrganiserInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt", "createdByUser", "Acter"],
    ActerUpdateWithoutActerTypeInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "DeletedByUser", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerTypeRuleUpdateWithoutSubjectInput: ["id", "canCreate", "canJoin", "canBecome", "Object"],
    ActerTypeRuleUpdateWithoutObjectInput: ["id", "canCreate", "canJoin", "canBecome", "Subject"],
    ActerInterestUpdateWithoutInterestInput: ["id", "createdAt", "updatedAt", "CreatedByUser", "Acter"],
    InterestTypeUpdateWithoutParentInput: ["id", "name", "sortOrder", "children", "Interests"],
    InterestUpdateWithoutInterestTypeInput: ["id", "name", "description", "sdgNumber", "InterestActers"],
    ActerUpdateWithoutCreatedByUserInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "DeletedByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerConnectionUpdateWithoutCreatedByUserInput: ["id", "isApproved", "createdAt", "updatedAt", "Follower", "Following"],
    ActerInterestUpdateWithoutCreatedByUserInput: ["id", "createdAt", "updatedAt", "Acter", "Interest"],
    ActivityUpdateWithoutCreatedByUserInput: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdAt", "updatedAt", "Acter", "Organiser"],
    ActerUpdateWithoutDeletedByUserInput: ["id", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "deletedAt", "createdByUser", "ActerType", "Parent", "Children", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"]
};
const outputsInfo = {
    Query: ["findFirstAccount", "findManyAccount", "aggregateAccount", "findUniqueAccount", "findFirstActer", "findManyActer", "aggregateActer", "findUniqueActer", "findFirstActerConnection", "findManyActerConnection", "aggregateActerConnection", "findUniqueActerConnection", "findFirstActerInterest", "findManyActerInterest", "aggregateActerInterest", "findUniqueActerInterest", "findFirstActerType", "findManyActerType", "aggregateActerType", "findUniqueActerType", "findFirstActerTypeRule", "findManyActerTypeRule", "aggregateActerTypeRule", "findUniqueActerTypeRule", "findFirstActivity", "findManyActivity", "aggregateActivity", "findUniqueActivity", "findFirstInterest", "findManyInterest", "aggregateInterest", "findUniqueInterest", "findFirstInterestType", "findManyInterestType", "aggregateInterestType", "findUniqueInterestType", "findFirstSession", "findManySession", "aggregateSession", "findUniqueSession", "findFirstUser", "findManyUser", "aggregateUser", "findUniqueUser", "findFirstVerificationRequest", "findManyVerificationRequest", "aggregateVerificationRequest", "findUniqueVerificationRequest"],
    Mutation: ["createOneAccount", "upsertOneAccount", "deleteOneAccount", "updateOneAccount", "updateManyAccount", "deleteManyAccount", "createOneActer", "upsertOneActer", "deleteOneActer", "updateOneActer", "updateManyActer", "deleteManyActer", "createOneActerConnection", "upsertOneActerConnection", "deleteOneActerConnection", "updateOneActerConnection", "updateManyActerConnection", "deleteManyActerConnection", "createOneActerInterest", "upsertOneActerInterest", "deleteOneActerInterest", "updateOneActerInterest", "updateManyActerInterest", "deleteManyActerInterest", "createOneActerType", "upsertOneActerType", "deleteOneActerType", "updateOneActerType", "updateManyActerType", "deleteManyActerType", "createOneActerTypeRule", "upsertOneActerTypeRule", "deleteOneActerTypeRule", "updateOneActerTypeRule", "updateManyActerTypeRule", "deleteManyActerTypeRule", "createOneActivity", "upsertOneActivity", "deleteOneActivity", "updateOneActivity", "updateManyActivity", "deleteManyActivity", "createOneInterest", "upsertOneInterest", "deleteOneInterest", "updateOneInterest", "updateManyInterest", "deleteManyInterest", "createOneInterestType", "upsertOneInterestType", "deleteOneInterestType", "updateOneInterestType", "updateManyInterestType", "deleteManyInterestType", "createOneSession", "upsertOneSession", "deleteOneSession", "updateOneSession", "updateManySession", "deleteManySession", "createOneUser", "upsertOneUser", "deleteOneUser", "updateOneUser", "updateManyUser", "deleteManyUser", "createOneVerificationRequest", "upsertOneVerificationRequest", "deleteOneVerificationRequest", "updateOneVerificationRequest", "updateManyVerificationRequest", "deleteManyVerificationRequest", "executeRaw", "queryRaw"],
    AggregateAccount: ["count", "min", "max"],
    AggregateActer: ["count", "avg", "sum", "min", "max"],
    AggregateActerConnection: ["count", "min", "max"],
    AggregateActerInterest: ["count", "min", "max"],
    AggregateActerType: ["count", "min", "max"],
    AggregateActerTypeRule: ["count", "min", "max"],
    AggregateActivity: ["count", "min", "max"],
    AggregateInterest: ["count", "min", "max"],
    AggregateInterestType: ["count", "avg", "sum", "min", "max"],
    AggregateSession: ["count", "min", "max"],
    AggregateUser: ["count", "min", "max"],
    AggregateVerificationRequest: ["count", "min", "max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_all"],
    AccountMinAggregate: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    ActerCountAggregate: ["id", "acterTypeId", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "createdByUserId", "deletedAt", "deltedByUserId", "parentActerId", "_all"],
    ActerAvgAggregate: ["locationLat", "locationLng"],
    ActerSumAggregate: ["locationLat", "locationLng"],
    ActerMinAggregate: ["id", "acterTypeId", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "createdByUserId", "deletedAt", "deltedByUserId", "parentActerId"],
    ActerMaxAggregate: ["id", "acterTypeId", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "createdByUserId", "deletedAt", "deltedByUserId", "parentActerId"],
    ActerConnectionCountAggregate: ["id", "isApproved", "createdAt", "updatedAt", "createdByUserId", "followerActerId", "followingActerId", "_all"],
    ActerConnectionMinAggregate: ["id", "isApproved", "createdAt", "updatedAt", "createdByUserId", "followerActerId", "followingActerId"],
    ActerConnectionMaxAggregate: ["id", "isApproved", "createdAt", "updatedAt", "createdByUserId", "followerActerId", "followingActerId"],
    ActerInterestCountAggregate: ["id", "createdAt", "updatedAt", "createdByUserId", "acterId", "interestId", "_all"],
    ActerInterestMinAggregate: ["id", "createdAt", "updatedAt", "createdByUserId", "acterId", "interestId"],
    ActerInterestMaxAggregate: ["id", "createdAt", "updatedAt", "createdByUserId", "acterId", "interestId"],
    ActerTypeCountAggregate: ["id", "name", "_all"],
    ActerTypeMinAggregate: ["id", "name"],
    ActerTypeMaxAggregate: ["id", "name"],
    ActerTypeRuleCountAggregate: ["id", "canCreate", "canJoin", "canBecome", "subjectActerTypeId", "objectActerTypeId", "_all"],
    ActerTypeRuleMinAggregate: ["id", "canCreate", "canJoin", "canBecome", "subjectActerTypeId", "objectActerTypeId"],
    ActerTypeRuleMaxAggregate: ["id", "canCreate", "canJoin", "canBecome", "subjectActerTypeId", "objectActerTypeId"],
    ActivityCountAggregate: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdByUserId", "createdAt", "updatedAt", "acterId", "organiserId", "_all"],
    ActivityMinAggregate: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdByUserId", "createdAt", "updatedAt", "acterId", "organiserId"],
    ActivityMaxAggregate: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdByUserId", "createdAt", "updatedAt", "acterId", "organiserId"],
    InterestCountAggregate: ["id", "name", "description", "sdgNumber", "interestTypeId", "_all"],
    InterestMinAggregate: ["id", "name", "description", "sdgNumber", "interestTypeId"],
    InterestMaxAggregate: ["id", "name", "description", "sdgNumber", "interestTypeId"],
    InterestTypeCountAggregate: ["id", "name", "sortOrder", "parentInterestTypeId", "_all"],
    InterestTypeAvgAggregate: ["sortOrder"],
    InterestTypeSumAggregate: ["sortOrder"],
    InterestTypeMinAggregate: ["id", "name", "sortOrder", "parentInterestTypeId"],
    InterestTypeMaxAggregate: ["id", "name", "sortOrder", "parentInterestTypeId"],
    SessionCountAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_all"],
    SessionMinAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionMaxAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "acterId", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "acterId"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "acterId"],
    VerificationRequestCountAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_all"],
    VerificationRequestMinAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestMaxAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    Account: ["id", "compoundId", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    Acter: ["id", "acterTypeId", "name", "slug", "description", "location", "locationLat", "locationLng", "url", "avatarUrl", "bannerUrl", "autoApproveFollowers", "createdAt", "updatedAt", "createdByUser", "createdByUserId", "deletedAt", "deltedByUserId", "DeletedByUser", "ActerType", "Parent", "Children", "parentActerId", "Following", "Followers", "User", "ActerInterests", "Activity", "ActivitiesOrganized"],
    ActerConnection: ["id", "isApproved", "createdAt", "updatedAt", "CreatedByUser", "createdByUserId", "Follower", "followerActerId", "Following", "followingActerId"],
    ActerInterest: ["id", "createdAt", "updatedAt", "CreatedByUser", "createdByUserId", "Acter", "acterId", "Interest", "interestId"],
    ActerType: ["id", "name", "Acter", "ActerTypeRules", "RulesOnActerType"],
    ActerTypeRule: ["id", "canCreate", "canJoin", "canBecome", "Subject", "subjectActerTypeId", "Object", "objectActerTypeId"],
    Activity: ["id", "startAt", "endAt", "isOnline", "isAllDay", "createdByUser", "createdByUserId", "createdAt", "updatedAt", "Acter", "acterId", "Organiser", "organiserId"],
    Interest: ["id", "name", "description", "sdgNumber", "InterestType", "interestTypeId", "InterestActers"],
    InterestType: ["id", "name", "parent", "children", "sortOrder", "parentInterestTypeId", "Interests"],
    Session: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    User: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "Acter", "acterId", "ActersCreated", "ActerConnections", "ActerInterest", "ActivitiesCreated", "ActersDeleted"],
    VerificationRequest: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"]
};
const argsInfo = {
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueActerArgs: ["where"],
    FindFirstActerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyActerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateActerArgs: ["data"],
    DeleteActerArgs: ["where"],
    UpdateActerArgs: ["data", "where"],
    DeleteManyActerArgs: ["where"],
    UpdateManyActerArgs: ["data", "where"],
    UpsertActerArgs: ["where", "create", "update"],
    AggregateActerArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueActerConnectionArgs: ["where"],
    FindFirstActerConnectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyActerConnectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateActerConnectionArgs: ["data"],
    DeleteActerConnectionArgs: ["where"],
    UpdateActerConnectionArgs: ["data", "where"],
    DeleteManyActerConnectionArgs: ["where"],
    UpdateManyActerConnectionArgs: ["data", "where"],
    UpsertActerConnectionArgs: ["where", "create", "update"],
    AggregateActerConnectionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueActerInterestArgs: ["where"],
    FindFirstActerInterestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyActerInterestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateActerInterestArgs: ["data"],
    DeleteActerInterestArgs: ["where"],
    UpdateActerInterestArgs: ["data", "where"],
    DeleteManyActerInterestArgs: ["where"],
    UpdateManyActerInterestArgs: ["data", "where"],
    UpsertActerInterestArgs: ["where", "create", "update"],
    AggregateActerInterestArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueActerTypeArgs: ["where"],
    FindFirstActerTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyActerTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateActerTypeArgs: ["data"],
    DeleteActerTypeArgs: ["where"],
    UpdateActerTypeArgs: ["data", "where"],
    DeleteManyActerTypeArgs: ["where"],
    UpdateManyActerTypeArgs: ["data", "where"],
    UpsertActerTypeArgs: ["where", "create", "update"],
    AggregateActerTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueActerTypeRuleArgs: ["where"],
    FindFirstActerTypeRuleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyActerTypeRuleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateActerTypeRuleArgs: ["data"],
    DeleteActerTypeRuleArgs: ["where"],
    UpdateActerTypeRuleArgs: ["data", "where"],
    DeleteManyActerTypeRuleArgs: ["where"],
    UpdateManyActerTypeRuleArgs: ["data", "where"],
    UpsertActerTypeRuleArgs: ["where", "create", "update"],
    AggregateActerTypeRuleArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueActivityArgs: ["where"],
    FindFirstActivityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyActivityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateActivityArgs: ["data"],
    DeleteActivityArgs: ["where"],
    UpdateActivityArgs: ["data", "where"],
    DeleteManyActivityArgs: ["where"],
    UpdateManyActivityArgs: ["data", "where"],
    UpsertActivityArgs: ["where", "create", "update"],
    AggregateActivityArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueInterestArgs: ["where"],
    FindFirstInterestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyInterestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateInterestArgs: ["data"],
    DeleteInterestArgs: ["where"],
    UpdateInterestArgs: ["data", "where"],
    DeleteManyInterestArgs: ["where"],
    UpdateManyInterestArgs: ["data", "where"],
    UpsertInterestArgs: ["where", "create", "update"],
    AggregateInterestArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueInterestTypeArgs: ["where"],
    FindFirstInterestTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyInterestTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateInterestTypeArgs: ["data"],
    DeleteInterestTypeArgs: ["where"],
    UpdateInterestTypeArgs: ["data", "where"],
    DeleteManyInterestTypeArgs: ["where"],
    UpdateManyInterestTypeArgs: ["data", "where"],
    UpsertInterestTypeArgs: ["where", "create", "update"],
    AggregateInterestTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSessionArgs: ["data"],
    DeleteSessionArgs: ["where"],
    UpdateSessionArgs: ["data", "where"],
    DeleteManySessionArgs: ["where"],
    UpdateManySessionArgs: ["data", "where"],
    UpsertSessionArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    FindUniqueVerificationRequestArgs: ["where"],
    FindFirstVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVerificationRequestArgs: ["data"],
    DeleteVerificationRequestArgs: ["where"],
    UpdateVerificationRequestArgs: ["data", "where"],
    DeleteManyVerificationRequestArgs: ["where"],
    UpdateManyVerificationRequestArgs: ["data", "where"],
    UpsertVerificationRequestArgs: ["where", "create", "update"],
    AggregateVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
