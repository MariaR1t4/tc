import { z } from "zod";

export default interface UsuarioDto {
  email: string;
  fcmToken: string;
  googleID: string;
  ImageUrl: string;
  tipo: string
} 

export const UsuarioSchema = z.object({
  email: z.string(),
  fcmToken: z.string(),
  googleID: z.string(),
  ImageUrl: z.string(),
  tipo: z.string(),
})