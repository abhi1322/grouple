import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Check } from "@/icons"
import Link from "next/link"

type Props = {}

const PricingSection = (props: Props) => {
    return (
        <div
            className="w-full pt-20 flex flex-col  items-center gap-3"
            id="pricing"
        >
            <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
                <GradientText
                    className="capitalize text-left md:text-center text-4xl font-semibold"
                    element="H2"
                >
                    Pricing Plans That fit you right
                </GradientText>
                <p className="mt-3 text-sm md:text-center text-left text-muted-foreground">
                    Grouple is a vibrant online community platform that connects
                    people with similar interests, cultivate meaningful
                    relationships and passions.
                </p>
            </BackdropGradient>
            <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
                <CardTitle>$99/m</CardTitle>
                <CardDescription className="mt-1  text-[#B4B0AE]">
                    Great if you&apos;re just getting started
                </CardDescription>
                <Link href="#" className="w-full">
                    <Button
                        variant="default"
                        className="mt-4 bg-[#333337] w-full rounded-xl text-white hover:text-[#333337]"
                    >
                        Start for free
                    </Button>
                </Link>
                <div className="mt-5">
                    <p className="text-sm text-muted-foreground">Features</p>
                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="flex gap-2 items-center text-sm">
                            <Check />
                            <p>Unlimited access to all features</p>
                        </li>
                        <li className="flex gap-2 items-center text-sm">
                            <Check />
                            <p>Unlimited group creation</p>
                        </li>
                        <li className="flex gap-2 items-center text-sm">
                            <Check />
                            <p>Advanced search filters</p>
                        </li>
                        <li className="flex gap-2 items-center text-sm">
                            <Check />
                            <p>24/7 customer support</p>
                        </li>
                        <li className="flex gap-2 items-center text-sm">
                            <Check />
                            <p>Custom group analytics</p>
                        </li>
                        <li className="flex gap-2 items-center text-sm">
                            <Check />
                            <p>Integration with popular apps</p>
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    )
}

export default PricingSection
