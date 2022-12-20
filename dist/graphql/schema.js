"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application = void 0;
const graphql_modules_1 = require("graphql-modules");
const schemas_1 = require("../modules/Questions/schemas");
const schemas_2 = require("../modules/Answers/schemas");
exports.application = (0, graphql_modules_1.createApplication)({
    modules: [schemas_1.QuestionModule, schemas_2.AnswerModule],
});
//# sourceMappingURL=schema.js.map