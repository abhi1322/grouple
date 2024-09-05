import GradientText from "@/components/global/gradient-text"

type Props = {}

function CallToAction({}: Props) {
    return (
        <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-2">
            <GradientText className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] font-semibold leading-tight capitalize">
                Brining community <br className="md:hidden" /> together
            </GradientText>
            <p className="text-sm md:text-center  text-left text-muted-foreground ">
                Grouple is a platform that allows you to create and manage
                groups, and invite your friends to join you.
            </p>
        </div>
    )
}

export default CallToAction
