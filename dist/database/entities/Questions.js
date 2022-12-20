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
exports.Questions = void 0;
const typeorm_1 = require("typeorm");
const Answers_1 = require("./Answers");
let Questions = class Questions {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Questions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Questions.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Answers_1.Answers, (answers) => answers.question),
    __metadata("design:type", Array)
], Questions.prototype, "answers", void 0);
Questions = __decorate([
    (0, typeorm_1.Entity)("questions", { schema: "moviesquiz" })
], Questions);
exports.Questions = Questions;
//# sourceMappingURL=Questions.js.map