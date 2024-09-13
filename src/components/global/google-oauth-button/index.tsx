"use client"

import { useGoogleAuth } from "@/app/hooks/authentication"
import { Button } from "@/components/ui/button"
import { Chrome } from "lucide-react"
import { Loader } from "../loader"

type GoogleAuthButtonProps = {
    method: "signin" | "signup"
}

const GoogleAuthButton = ({ method }: GoogleAuthButtonProps) => {
    const { signInWith, signUpWith } = useGoogleAuth()
    return (
        <Button
            className="w-full flex items-center gap-2"
            {...(method === "signin"
                ? {
                      onClick: () => signInWith("oauth_google"),
                  }
                : {
                      onClick: () => signUpWith("oauth_google"),
                  })}
        >
            <Loader loading={false}>
                <Chrome />
                Continue with Google
            </Loader>
        </Button>
    )
}

export default GoogleAuthButton
