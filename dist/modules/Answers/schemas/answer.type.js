"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
const graphql_modules_1 = require("graphql-modules");
exports.Answer = (0, graphql_modules_1.gql) `
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
//# sourceMappingURL=answer.type.js.map