import { useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";



function App() {

  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=> setLoaded(true)}/>}
      <div className={`${isLoaded? 'opacity-100': 'opacity-0'} min-h-screen transition-opacity duration-700 bg-black text-gray-100 `}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  )
}

export default App
