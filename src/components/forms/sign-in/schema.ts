import { z } from "zod"

export const SignInSchema = z.object({
    email: z.string().email("Your email is invalid"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(66, "your password is too long")
        .refine(
            (data) =>
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
                    data,
                ),
            {
                message:
                    "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
            },
        ),
})

