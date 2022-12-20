"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsRepository = void 0;
class QuestionsRepository {
    /**
     * Constructor function
     * @param questionRepo
     */
    constructor(questionRepo) {
        this.questionRepo = questionRepo;
    }
    /**
     * Get all questions
     * object
     * @param conditions
     */
    async get(conditions = {}) {
        return await this.questionRepo.find({ where: conditions, relations: ['answers'] });
    }
    /**
     * Get one question
     * @param conditions
     */
    async getOne(conditions = {}) {
        return await this.questionRepo.findOne({
            where: conditions,
            relations: ['answers']
        });
    }
}
exports.QuestionsRepository = QuestionsRepository;
//# sourceMappingURL=questions-repository.js.map