import { answersRepository } from "../repositories"

export class AnswerBusiness {

    /**
     * Get all answers
     * object
     * @param conditions 
     */
    async get(conditions = {}) {
        return await answersRepository.get(conditions);
    }

     /**
     * Get one answer
     * object
     * @param conditions 
     */
     async getOne(conditions = {}) {
        return await answersRepository.getOne(conditions);
     }

}


