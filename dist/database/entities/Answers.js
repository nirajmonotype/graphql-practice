"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answers = void 0;
const typeorm_1 = require("typeorm");
const Questions_1 = require("./Questions");
let Answers = class Answers {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Answers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Answers.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "question_id", nullable: true }),
    __metadata("design:type", Number)
], Answers.prototype, "questionId", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "is_correct",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], Answers.prototype, "isCorrect", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Questions_1.Questions, (questions) => questions.answers, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "question_id", referencedColumnName: "id" }]),
    __metadata("design:type", Questions_1.Questions)
], Answers.prototype, "question", void 0);
Answers = __decorate([
    (0, typeorm_1.Index)("question_id", ["questionId"], {}),
    (0, typeorm_1.Entity)("answers", { schema: "moviesquiz" })
], Answers);
exports.Answers = Answers;
//# sourceMappingURL=Answers.js.map