import { z } from "zod";
import TurmaDto from "./TurmaDto";
import DisciplinaDto from "./DisciplinaDto";
import ProfessorDto from "./ProfessorDto";

export default interface ProfessorDisciplinaDto {
  id_turma: TurmaDto;
  id_disciplina: DisciplinaDto;
  id_professor: ProfessorDto;
  carga_horaria: number;
}

export const ProfessorDisciplinaSchema = z.object({
  id_turma: z.number(),
  id_disciplina: z.number(),
  id_professor: z.number(),
  carga_horaria: z.number()
})