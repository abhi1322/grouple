"use server"

import { currentUser } from "@clerk/nextjs/server"

export const getAuthenticatedUser = async () => {
    try {
        const clerk = await currentUser()
        if (!clerk) {
            return null
        }
        
        const user = await prisma.user.findUnique({})

    } catch (error) {}
}
