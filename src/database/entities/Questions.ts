import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answers } from "./Answers";

@Entity("questions", { schema: "moviesquiz" })
export class Questions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @OneToMany(() => Answers, (answers) => answers.question)
  answers: Answers[];
}
