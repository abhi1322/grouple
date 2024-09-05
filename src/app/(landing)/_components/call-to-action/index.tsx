import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { BadgePlus, PlayCircle } from "lucide-react"
import Link from "next/link"

type Props = {}

function CallToAction({}: Props) {
    return (
        <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-2">
            <GradientText className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] font-bold md:font-semibold leading-tight capitalize">
                Brining community <br className="md:hidden" /> together
            </GradientText>
            <p className="text-sm md:text-center  text-left text-muted-foreground ">
                Grouple is a platform that allows you to create and manage
                groups, and invite your friends to join you.
            </p>
            <div className="flex flex-col md:flex-row gap-5 md:justify-center md:mt-5 w-full">
                <Button
                    variant="outline"
                    className="rounded-xl bg-transparent flex gap-2 items-center py-5 text-base"
                >
                    <PlayCircle />
                    Watch Demo
                </Button>
                <Link href="/sign-in">
                    <Button className="rounded-xl text-base flex gap-2 w-full">
                        <BadgePlus />
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CallToAction
