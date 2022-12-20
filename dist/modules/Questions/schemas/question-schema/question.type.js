"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const graphql_modules_1 = require("graphql-modules");
exports.Question = (0, graphql_modules_1.gql) `
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
//# sourceMappingURL=question.type.js.map