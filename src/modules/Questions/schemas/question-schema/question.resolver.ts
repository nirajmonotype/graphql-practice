import { questionBusiness } from "../../businesses";

export const QuestionResolver = {
    Query: {
      async question(_root, { id }) {
        return await questionBusiness.getOne({id})
      },
      async questions(_root) {
        return await questionBusiness.get({});
      }
    },
    Question: {
      id(question) {
        return question.id;
      },
      name(question) {
        return question.name;
      },
      answers(question) {
        return question.answers;
      }
    }
  };

