import { AnswersRepository } from "./answers-repository";
import { myDataSource } from '../../../database/connection';
import { Answers } from "../../../database/entities/Answers";

const instance = myDataSource.getRepository(Answers);

const answersRepository = new AnswersRepository(instance);

export {
    answersRepository
}