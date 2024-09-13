"use client"
import { useAuthSignUp } from "@/app/hooks/authentication"
import { FormGenerator } from "@/components/global/form-generator"
import { Loader } from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/constants"
import dynamic from "next/dynamic"

type Props = {}

function SignUpForm({}: Props) {
    const {
        register,
        errors,
        verifying,
        creating,
        onGenerateCode,
        onInitiateUserRegistration,
        code,
        setCode,
        getValues,
    } = useAuthSignUp()

    const OtpInput = dynamic(
        () =>
            import("@/components/global/otp-input").then(
                (component) => component.default,
            ),
        {
            ssr: false,
        },
    )

    return (
        <form
            onSubmit={onInitiateUserRegistration}
            className="flex flex-col gap-4 mt-10"
        >
            {verifying ? (
                <div>
                    <OtpInput otp={code} setOtp={setCode} />
                </div>
            ) : (
                GROUPLE_CONSTANTS.signUpForm.map((field) => (
                    <FormGenerator
                        {...field}
                        key={field.name}
                        register={register}
                        errors={errors}
                    />
                ))
            )}
            {verifying ? (
                <Button type="submit" className="rounded-2xl">
                    <Loader loading={creating}>Sign up woth Mail</Loader>
                </Button>
            ) : (
                <Button
                    type="button"
                    onClick={() =>
                        onGenerateCode(
                            getValues("email"),
                            getValues("password"),
                        )
                    }
                >
                    <Loader loading={false}>Generate Code</Loader>
                </Button>
            )}
        </form>
    )
}

export default SignUpForm
