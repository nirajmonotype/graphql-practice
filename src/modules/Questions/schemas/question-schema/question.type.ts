import { gql } from 'graphql-modules';

export const Question = gql`
  type Query {
      question(id: ID!): Question,
      questions: [Question]
  }

  type Question {
    id: Int!
    name: String
    answers: [Answer]
  }
`;