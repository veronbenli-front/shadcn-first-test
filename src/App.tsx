import { Header } from "@/components/header"
import { ButtonList } from "@/components/button-list"
import { CardSwitch } from "@/components/card-switch"
import { useState } from "react"

export function App() {
  const [switchMode, setSwitchMode] = useState(false)
  console.log(switchMode)


  return (
    <div className={`min-h-screen ${switchMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      <ButtonList />
      <CardSwitch switchState={switchMode} onSwitch={setSwitchMode} />
    </div>
  )
}

export default App
