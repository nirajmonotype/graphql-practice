"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerResolver = void 0;
const businesses_1 = require("../businesses");
exports.AnswerResolver = {
    Query: {
        async answer(_root, { id }) {
            return await businesses_1.answerBusiness.getOne({ id });
        },
        async answers(_root) {
            return await businesses_1.answerBusiness.get({});
        }
    },
    Answer: {
        id(answer) {
            return answer.id;
        },
        name(answer) {
            return answer.name;
        },
        is_correct(answer) {
            return answer.isCorrect;
        },
        question(answer) {
            return answer.question;
        }
    }
};
//# sourceMappingURL=answer.resolver.js.map