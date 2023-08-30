import {z} from "zod";

export default interface UserDto{
    RandomNumber: number;
    rm: number;
    name: string;
    email: string;
    password: string;
    telefone: string;
}
export const UserSchema = z.object({
    RandomNumber: z.number(),
    rm: z.number(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    telefone: z.string()
})