import { useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"



function App() {

  const [isLoaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=> setLoaded(true)}/>}
      <div className={`${isLoaded? 'opacity-100': 'opacity-0'} min-h-screen transition-opacity duration-700 bg-black text-gray-100`}>

      </div>
    </>
  )
}

export default App
