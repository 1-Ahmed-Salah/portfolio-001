import { useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"



function App() {

  const [isLoaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=> setLoaded(true)}/>}
    </>
  )
}

export default App
