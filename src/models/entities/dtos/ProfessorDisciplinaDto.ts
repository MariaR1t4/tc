import { z } from "zod";
import TurmaDto from "./TurmaDto";
import DisciplinaDto from "./DisciplinaDto";
import ProfessorDto from "./ProfessorDto";

export default interface ProfessorDisciplinato {
  professor_disciplina: number;
  id_turma: TurmaDto;
  id_disciplina: DisciplinaDto;
  id_professor: ProfessorDto;
  carga_horaria: Date;
}

export const ProfessorDisciplinaSchema = z.object({
  professor_disciplina: z.number(),
  id_turma: z.number(),
  id_disciplina: z.number(),
  id_professor: z.number(),
  carga_horaria: z.date()
})