import { createApplication } from 'graphql-modules';
import { QuestionModule } from '../modules/Questions/schemas';
import { AnswerModule } from '../modules/Answers/schemas';

export const application = createApplication({
  modules: [QuestionModule, AnswerModule],
});