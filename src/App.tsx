import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Transgender } from "lucide-react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"


export function App() {
  return (
    <div>
      <Header />
      <div className="flex h-25 bg-gray-200 flex-col items-center justify-center">
        <Button variant="default">Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="destructive">
          <Mail /> Send me
        </Button>
      </div>
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Тут учимся хуярить Shadcn UI</CardTitle>
          <CardDescription>Хуярим як можна</CardDescription>
          <CardAction>Какойто актив</CardAction>
        </CardHeader>
        <CardContent>
          <p>Может захуярю картинку <Transgender /></p>
        </CardContent>
        <CardFooter className="flex items-center gap-4">
          <Switch id="airplane-mode" defaultChecked className="border-2 border-red-500  w-10 h-5" />
          <span>Меняем цвет</span>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
