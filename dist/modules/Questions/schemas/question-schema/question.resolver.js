"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionResolver = void 0;
const businesses_1 = require("../../businesses");
exports.QuestionResolver = {
    Query: {
        async question(_root, { id }) {
            return await businesses_1.questionBusiness.getOne({ id });
        },
        async questions(_root) {
            return await businesses_1.questionBusiness.get({});
        }
    },
    Question: {
        id(question) {
            return question.id;
        },
        name(question) {
            return question.name;
        },
        answers(question) {
            return question.answers;
        }
    }
};
//# sourceMappingURL=question.resolver.js.map