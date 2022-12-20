import { questionsRepository } from "../repositories"

export class QuestionBusiness {

    /**
     * Get all questions
     * object
     * @param conditions 
     */
    async get(conditions = {}) {
     return await questionsRepository.get(conditions);   
    }

     /**
     * Get one question
     * object
     * @param conditions 
     */
     async getOne(conditions = {}) {
        return await questionsRepository.getOne(conditions);
     }

}


