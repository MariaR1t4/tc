import TurmaDto from "./TurmaDto";
import AlunoDto from "./AlunoDto";
import { z } from "zod";
import ProfessorDto from "./ProfessorDto";
import DisciplinaDto from "./DisciplinaDto";
import AulaDto from "./AulaDto";
import ProfessorDisciplinato from "./ProfessorDisciplinaDto";

export default interface FrequenciaDto{
    id_turma: TurmaDto;
   /* id_professor: ProfessorDto;
    id_disciplina: DisciplinaDto;*/
    rm: AlunoDto;
}
export const FrequenciaSchema = z.object({
    id_turma: z.string(),
    /*id_professor: z.number(),
    id_disciplina: z.number(),*/
    rm: z.number(),
})