"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answersRepository = void 0;
const answers_repository_1 = require("./answers-repository");
const connection_1 = require("../../../database/connection");
const Answers_1 = require("../../../database/entities/Answers");
const instance = connection_1.myDataSource.getRepository(Answers_1.Answers);
const answersRepository = new answers_repository_1.AnswersRepository(instance);
exports.answersRepository = answersRepository;
//# sourceMappingURL=index.js.map