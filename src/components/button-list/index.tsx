
import { Button } from "../ui/button"
import { Mail } from "lucide-react"

export function ButtonList() {
    return (
        <div className="flex m-auto h-50 bg-gray-200 flex-col items-center justify-center w-50 rounded-lg">
            <Button className="mx-10 my-2" variant="default">Click me</Button>
            <Button className="mx-10 my-2" variant="outline">Click me</Button>
            <Button className="mx-10 my-2" variant="destructive">
                <Mail /> Send me
            </Button>
        </div>
    )
}