"use client"

import { useAuthSignIn } from "@/app/hooks/authentication"

type Props = {}

function SignInForm({}: Props) {
    const { isPending, onAuthenticatedUser, register, errors } = useAuthSignIn()
    return <div>
        
    </div>
}

export default SignInForm
