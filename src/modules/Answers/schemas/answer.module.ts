import { Answer } from './answer.type';
import { AnswerResolver } from './answer.resolver';
import { createModule } from 'graphql-modules';

export const AnswerModule = createModule({
  id: 'answer-module',
  dirname: __dirname,
  typeDefs: [Answer],
  resolvers: [AnswerResolver]
});