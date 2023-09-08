import TurmaDto from "./TurmaDto";
import AlunoDto from "./AlunoDto";
import { z } from "zod";

export default interface FrequenciaDto{
    lista_chamada: number;
    id_turma: TurmaDto;
    rm: AlunoDto;
    frequencia: number;
}
export const FrequenciaSchema = z.object({
    lista_chamada: z.number(),
    id_turma: z.number(),
    rm: z.number(),
    frequencia: z.number(),
})
