"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerBusiness = void 0;
const repositories_1 = require("../repositories");
class AnswerBusiness {
    /**
     * Get all answers
     * object
     * @param conditions
     */
    async get(conditions = {}) {
        return await repositories_1.answersRepository.get(conditions);
    }
    /**
    * Get one answer
    * object
    * @param conditions
    */
    async getOne(conditions = {}) {
        return await repositories_1.answersRepository.getOne(conditions);
    }
}
exports.AnswerBusiness = AnswerBusiness;
//# sourceMappingURL=answer-business.js.map