import { Question } from './question.type';
import { QuestionResolver } from './question.resolver';
import { createModule } from 'graphql-modules';

export const QuestionModule = createModule({
  id: 'question-module',
  dirname: __dirname,
  typeDefs: [Question],
  resolvers: [QuestionResolver]
});