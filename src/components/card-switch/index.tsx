import { Transgender } from "lucide-react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

const cardStyles = 'bg-gray-100 text-black'

export function CardSwitch({switchState, onSwitch}: {switchState: boolean, onSwitch: (value: boolean) => void}) {
   
    const [switchTrue, setSwitchTrue] = useState(switchState)

    return (
        <Card className={`w-[550px] mx-auto my-10 ${switchTrue && cardStyles}`}>
            <CardHeader>
                <CardTitle>Тут учимся хуярить Shadcn UI</CardTitle>
                <CardDescription>Хуярим як можна</CardDescription>
                <CardAction>Подпизденка Сбоку</CardAction>
            </CardHeader>
            <CardContent>
                <p>Может захуярю иконку из lucide<Transgender /></p>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
                <Switch 
                id="airplane-mode" 
                className="border-2 border-red-500"
                onCheckedChange={(value) => {
                    setSwitchTrue(value)
                    onSwitch(value)
                }}
                />
                <span>Меняем цвет</span>
            </CardFooter>
        </Card>
    )
}