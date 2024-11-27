import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ShineBorder from "@/components/ui/shine-border";
import Link from "next/link";

export default function BottomCodingQuestion() {
    return (
        <ShineBorder
            className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
            <Card className="p-2">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                <CardHeader>
                    <CardTitle>Important Coding Questions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Sharpen your coding skills with these essential problems. Practice coding questions frequently asked in technical interviews and competitive programming contests.</p>
                </CardContent>
                </div>
                <Button asChild className="w-full sm:w-[80%] md:w-[70%] mx-auto">
                    <Link href="#">Coming Soon...</Link>
                </Button>
                </div>
            </Card>
        </ShineBorder>
    )
}