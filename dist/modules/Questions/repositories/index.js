"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsRepository = void 0;
const questions_repository_1 = require("./questions-repository");
const connection_1 = require("../../../database/connection");
const Questions_1 = require("../../../database/entities/Questions");
const instance = connection_1.myDataSource.getRepository(Questions_1.Questions);
const questionsRepository = new questions_repository_1.QuestionsRepository(instance);
exports.questionsRepository = questionsRepository;
//# sourceMappingURL=index.js.map