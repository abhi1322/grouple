import { z } from "zod"

export const SignUpSchema = z.object({
    firstname: z.string().min(3, { message: "First name is required" }),
    lastname: z.string().min(3, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(64, { message: "Password must be at most 64 characters" })
        .refine((value) => /^[A-Za-z0-9]+$/.test(value), {
            message: "Password must be alphanumeric",
        }),
})
