import {z} from "zod";

export default interface ProfessorDto{
    name: string;
    telefone: string;
    email: string;
}
export const ProfessorSchema = z.object({ 
    name: z.string(),
    telefone: z.string().length(12, {message:"insira apenas números (ex: xx x xxxx xxxx"}),
    email: z.string().email(),
})