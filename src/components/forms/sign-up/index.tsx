import { useAuthSignUp } from "@/app/hooks/authentication"

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

    return <div>SignUpForm</div>
}

export default SignUpForm
