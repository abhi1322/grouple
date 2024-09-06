"use client"

import { useNavigation } from "@/app/hooks/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { GROUPLE_CONSTANTS } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"

type MenuProps = {
    orientation: "desktop" | "mobile"
}

function Menu({ orientation }: MenuProps) {
    const { section, onSetSection } = useNavigation()

    switch (orientation) {
        case "desktop":
            return (
                <Card
                    className="bg-themeGray border-themeGray bg-clip-padding backdrop-blur__safari backdrop-filter  backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden 
                rounded-xl"
                >
                    <CardContent className="p-0 flex gap-2">
                        {GROUPLE_CONSTANTS.landingPageMenu.map((menu) => (
                            <Link
                                key={menu.id}
                                href={menu.path}
                                {...(menu.section && {
                                    onClick: () => onSetSection(menu.path),
                                })}
                                className={cn(
                                    "rounded-xl flex gap-2 py-3 px-4 items-center",
                                    section === menu.path
                                        ? "bg-[#09090b] border-[#27272A"
                                        : "",
                                )}
                            >
                                {section == menu.path && menu.icon}
                                {menu.label}
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            )
        case "mobile":
            return (
                <div className="flex flex-col gap-2 mt-10 bg-transparent  border-themeGray bg-clip-padding backdrop-blur__safari backdrop-filter  backdrop-blur-3xl  ">
                    {GROUPLE_CONSTANTS.landingPageMenu.map((menu) => (
                        <Link
                            key={menu.id}
                            href={menu.path}
                            {...(menu.section && {
                                onClick: () => onSetSection(menu.path),
                            })}
                            className={cn(
                                "rounded-xl flex gap-2 py-3 px-4 items-center",
                                section === menu.path
                                    ? "bg-[#27272A] border-[#27272A]"
                                    : "bg-transparent",
                            )}
                        >
                            {menu.icon}
                            {menu.label}
                        </Link>
                    ))}
                </div>
            )
        default:
            return <></>
    }
}

export default Menu
