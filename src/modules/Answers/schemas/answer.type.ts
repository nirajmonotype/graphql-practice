import { gql } from 'graphql-modules';

export const Answer = gql`
  type Query {
    answer(id: ID!): Answer,
    answers: [Answer]
  }
  
  type Answer {
    id: Int!
    name: String
    question_id: Int!
    is_correct: Int
    question: Question
  }
`;