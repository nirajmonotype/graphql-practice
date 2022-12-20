"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerModule = void 0;
const answer_type_1 = require("./answer.type");
const answer_resolver_1 = require("./answer.resolver");
const graphql_modules_1 = require("graphql-modules");
exports.AnswerModule = (0, graphql_modules_1.createModule)({
    id: 'answer-module',
    dirname: __dirname,
    typeDefs: [answer_type_1.Answer],
    resolvers: [answer_resolver_1.AnswerResolver]
});
//# sourceMappingURL=answer.module.js.map