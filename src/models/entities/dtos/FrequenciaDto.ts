import {z} from "zod";

export default interface FrequenciaDto{
    id_freq: number;
    lista_chamada: number;
    id_turma: number;
    rm: number;
    frequencia: number;
}
export const FrequenciaSchema = z.object({
    id_freq: z.number(),
    lista_chamada: z.number(),
    id_turma: z.number(),
    rm: z.number(),
    frequencia: z.number(),
})
