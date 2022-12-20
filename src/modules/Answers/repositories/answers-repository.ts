

export class AnswersRepository {

    answersRepo:any;
    /**
     * Constructor function
     * @param answersRepo 
     */
    constructor(answersRepo) {
        this.answersRepo = answersRepo;
    }

    /**
     * Get all answers
     * object
     * @param conditions 
     */
    async get(conditions = {}) {
        return await this.answersRepo.find({where: conditions,
             relations: ['question']
    });
    }

    /**
     * Get one answer
     * @param conditions 
     */
    async getOne(conditions = {}) {
        return await this.answersRepo.findOne({
            where: conditions,
            relations: ['question']
        });
    }

}


