import { useSignIn, useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { SignInSchema } from "./schema"
import { useState } from "react"

export const useAuthSignIn = () => {
    const { isLoaded, setActive, signIn } = useSignIn()
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        mode: "onBlur",
    })

    const router = useRouter()

    const onClerkAuth = async (email: string, password: string) => {
        if (!isLoaded)
            return toast("Error", {
                description: "Oops, something went wrong",
            })
        try {
            const authenticated = await signIn.create({
                identifier: email,
                password: password,
            })

            if (authenticated.status === "complete") {
                reset()
                await setActive({ session: authenticated.createdSessionId })

                toast("Success", {
                    description: "You have successfully signed in",
                })
            }
        } catch (error: any) {
            if (error.error[0].code === "form_password_incorrect") {
                toast("Error", {
                    description: "Invalid email or password",
                })
            }
        }
    }

    const { mutate: initiateLoginFlow, isPending } = useMutation({
        mutationFn: ({
            email,
            password,
        }: {
            email: string
            password: string
        }) => onClerkAuth(email, password),
    })

    const onAuthenticatedUser = handleSubmit(async (data) => {
        initiateLoginFlow({
            email: data.email,
            password: data.password,
        })
    })

    return {
        onAuthenticatedUser,
        register,
        isPending,
        errors,
    }
}


export const useAuthSignUp = () => {
    const { setActive, isLoaded, signUp } = useSignUp()
    const [creating, setCreating] = useState<boolean>(false)
    const [verifying, setVerifying] = useState<boolean>(false)
    const [code, setCode] = useState<string>("")

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
        getValues,
    } = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        mode: "onBlur",
    })

    const router = useRouter()

    const onGenerateCode = async (email: string, password: string) => {
        if (!isLoaded)
            return toast("Error", {
                description: "Oops! something went wrong",
            })
        try {
            if (email && password) {
                await signUp.create({
                    emailAddress: getValues("email"),
                    password: getValues("password"),
                })

                await signUp.prepareEmailAddressVerification({
                    strategy: "email_code",
                })

                setVerifying(true)
            } else {
                return toast("Error", {
                    description: "No fields must be empty",
                })
            }
        } catch (error) {
            console.error(JSON.stringify(error, null, 2))
        }
    }

    const onInitiateUserRegistration = handleSubmit(async (values) => {
        if (!isLoaded)
            return toast("Error", {
                description: "Oops! something went wrong",
            })

        try {
            setCreating(true)
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code,
                },
            )

            if (completeSignUp.status !== "complete") {
                return toast("Error", {
                    description:
                        "Oops! something went wrong, status in complete",
                })
            }

            if (completeSignUp.status === "complete") {
                if (!signUp.createdUserId) return
                const user = await onSignUpUser({
                    firstname: values.firstname,
                    lastname: values.lastname,
                    clerkId: signUp.createdUserId,
                    image: "",
                })

                reset()

                if (user.status === 200) {
                    toast("Success", {
                        description: user.message,
                    })
                    await setActive({
                        session: completeSignUp.createdSessionId,
                    })
                    router.push(`/group/create`)
                }
                if (user.status !== 200) {
                    toast("Error", {
                        description: user.message + "action failed",
                    })
                    router.refresh
                }
                setCreating(false)
                setVerifying(false)
            } else {
                console.error(JSON.stringify(completeSignUp, null, 2))
            }
        } catch (error) {
            console.error(JSON.stringify(error, null, 2))
        }
    })

    return {
        register,
        errors,
        onGenerateCode,
        onInitiateUserRegistration,
        verifying,
        creating,
        code,
        setCode,
        getValues,
    }
}
