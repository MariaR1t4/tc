import {z} from "zod";

export default interface TurmaDto{
    curso: string;
    periodo: string;
    modulo: string;
    descricao: string;
}
export const TurmaSchema = z.object({
    curso: z.string(),
    periodo: z.string(),
    modulo: z.string(),
    descricao: z.string(),
})
