import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Questions } from "./Questions";

@Index("question_id", ["questionId"], {})
@Entity("answers", { schema: "moviesquiz" })
export class Answers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "question_id", nullable: true })
  questionId: number | null;

  @Column("tinyint", {
    name: "is_correct",
    nullable: true,
    default: () => "'0'",
  })
  isCorrect: number | null;

  @ManyToOne(() => Questions, (questions) => questions.answers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "question_id", referencedColumnName: "id" }])
  question: Questions;
}
