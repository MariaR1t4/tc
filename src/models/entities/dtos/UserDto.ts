import {z} from "zod";

export default interface UserDto{
    rm: number;
    name: string;
    email: string;
    password: string;
    telefone: string;
}
export const UserSchema = z.object({
    rm: z.number(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    telefone: z.string()
})