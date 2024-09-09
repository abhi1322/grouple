"use client"

import { useAuthSignIn } from "@/app/hooks/authentication"
import { FormGenerator } from "@/components/global/form-generator"
import { Loader } from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/constants"

type Props = {}

function SignInForm({}: Props) {
    const { isPending, onAuthenticatedUser, register, errors } = useAuthSignIn()
    return (
        <form
            className="flex flex-col gap-3 mt-10"
            onSubmit={onAuthenticatedUser}
        >
            {GROUPLE_CONSTANTS.signInForm.map((field) => (
                <FormGenerator
                    {...field}
                    key={field.id}
                    register={register}
                    errors={errors}
                />
            ))}
            <Button type="submit" className="rounded-xl">
                <Loader loading={isPending}>Sign In with Email</Loader>
            </Button>
        </form>
    )
}

export default SignInForm
