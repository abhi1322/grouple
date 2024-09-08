import { getAuthenticatedUser } from "@/actions/auth"
import React from "react"

type Props = {
    children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
    const session = await getAuthenticatedUser()
    return <div>AuthLayout</div>
}

export default AuthLayout
    