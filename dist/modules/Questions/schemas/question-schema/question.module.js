"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModule = void 0;
const question_type_1 = require("./question.type");
const question_resolver_1 = require("./question.resolver");
const graphql_modules_1 = require("graphql-modules");
exports.QuestionModule = (0, graphql_modules_1.createModule)({
    id: 'question-module',
    dirname: __dirname,
    typeDefs: [question_type_1.Question],
    resolvers: [question_resolver_1.QuestionResolver]
});
//# sourceMappingURL=question.module.js.map