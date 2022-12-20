"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionBusiness = void 0;
const repositories_1 = require("../repositories");
class QuestionBusiness {
    /**
     * Get all questions
     * object
     * @param conditions
     */
    async get(conditions = {}) {
        return await repositories_1.questionsRepository.get(conditions);
    }
    /**
    * Get one question
    * object
    * @param conditions
    */
    async getOne(conditions = {}) {
        return await repositories_1.questionsRepository.getOne(conditions);
    }
}
exports.QuestionBusiness = QuestionBusiness;
//# sourceMappingURL=questions-business.js.map