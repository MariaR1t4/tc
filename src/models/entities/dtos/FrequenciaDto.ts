import {z} from "zod";
import TurmaDto from "./TurmaDto";
import AlunoDto from "./AlunoDto";

export default interface FrequenciaDto{
    id_frequencia: number;
    lista_chamada: number;
    id_turma: TurmaDto;
    rm: AlunoDto;
    frequencia: number;
}
export const FrequenciaSchema = z.object({
    id_frequencia: z.number(),
    lista_chamada: z.number(),
    id_turma: z.number(),
    rm: z.number(),
    frequencia: z.number(),
})
