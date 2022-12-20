import { QuestionsRepository } from "./questions-repository";
import { myDataSource } from '../../../database/connection';
import { Questions } from "../../../database/entities/Questions";

const instance = myDataSource.getRepository(Questions);

const questionsRepository = new QuestionsRepository(instance);

export {
    questionsRepository
}