import {z} from "zod";

export default interface PessoaDto{
    id: number;
    email:string;
    password: string;
}
export const PessoaSchema = z.object({
    id: z.number(),
    email: z.string(),
    password: z.string()
})