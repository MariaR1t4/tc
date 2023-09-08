import {z} from "zod";

export default interface ProfessorDto{
    name: string;
    email: string;
    password: string;
    telefone: string;
}
export const ProfessorSchema = z.object({ 
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, {message: "insira uma senha de pelo menos 8 caracteres"}),
    telefone: z.string().length(12, {message:"insira apenas números (ex: xx x xxxx xxxx"})
})