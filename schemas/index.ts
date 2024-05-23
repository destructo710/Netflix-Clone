import { z } from "zod";
 
export const RegisterSchema = z.object({
  email: z.string().email({
    message: '❌ Please enter a valid email address.'
  }),
  password: z.string()
})