import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Users, MessageSquare } from 'lucide-react'

export default function FooterDescription() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">Join the Community</h2>
                <p className="text-lg text-muted-foreground">
                    roadmap.sh is the{" "}
                    <a href="#" className="text-primary hover:underline">
                        7th most starred project on GitHub
                    </a>{" "}
                    and is visited by hundreds of thousands of developers every month.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardContent className="pt-6">
                        <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm mb-4">
                            <span>Rank 7th</span>
                            <span className="mx-1">out of</span>
                            <span>28M!</span>
                        </div>
                        <div className="text-5xl font-bold mb-4">298K</div>
                        <div className="text-muted-foreground mb-6">GitHub Stars</div>
                        <Button className="w-full" variant="outline">
                            <Github className="mr-2 h-4 w-4" />
                            Star us on GitHub
                            <span className="sr-only">Star us on GitHub</span>
                        </Button>
                        <div className="text-sm text-muted-foreground mt-2">Help us reach #1</div>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardContent className="pt-6">
                        <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm mb-4">
                            <span>+90k</span>
                            <span className="ml-1">every month</span>
                        </div>
                        <div className="text-5xl font-bold mb-4">+1.5M</div>
                        <div className="text-muted-foreground mb-6">Registered Users</div>
                        <Button className="w-full" variant="outline">
                            <Users className="mr-2 h-4 w-4" />
                            Register yourself
                            <span className="sr-only">Register yourself</span>
                        </Button>
                        <div className="text-sm text-muted-foreground mt-2">Commit to your growth</div>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardContent className="pt-6">
                        <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm mb-4">
                            <span>+2k</span>
                            <span className="ml-1">every month</span>
                        </div>
                        <div className="text-5xl font-bold mb-4">29K</div>
                        <div className="text-muted-foreground mb-6">Discord Members</div>
                        <Button className="w-full" variant="outline">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Join on Discord
                            <span className="sr-only">Join on Discord</span>
                        </Button>
                        <div className="text-sm text-muted-foreground mt-2">Join the community</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

