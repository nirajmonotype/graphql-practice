import { answerBusiness } from "../businesses";

export const AnswerResolver = {
    Query: {
      async answer(_root, { id }) {
        return await answerBusiness.getOne({id})
      },
      async answers(_root) {
        return await answerBusiness.get({});
      }
    },
    Answer: {
      id(answer) {
        return answer.id;
      },
      name(answer) {
        return answer.name;
      },
      is_correct(answer){
        return answer.isCorrect
      },
      question(answer) {
        return answer.question;
      }
    }
  };

