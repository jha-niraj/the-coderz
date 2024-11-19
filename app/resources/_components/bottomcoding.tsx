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
            <Card>
                <CardHeader>
                    <CardTitle>Important Coding Questions</CardTitle>
                    <CardDescription>Sharpen your coding skills with these essential problems</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        Practice coding questions frequently asked in technical interviews and competitive programming contests.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button asChild>
                        <Link href="/coding-questions">Start Coding</Link>
                    </Button>
                </CardFooter>
            </Card>
        </ShineBorder>
    )
}