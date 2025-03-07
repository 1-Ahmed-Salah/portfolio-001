import { useEffect } from "react";

interface INavbarState {
    menuOpen: boolean;
    setMenuOpen: (val: boolean)=> void;
}

const Navbar: React.FC<INavbarState> = ({ menuOpen, setMenuOpen }) => {

    useEffect(()=> {
        document.body.style.overflow = menuOpen? 'hidden': '';

        return () => {
            document.body.style.overflow = '';
        }
    }, [menuOpen])

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a href="#home" className="font-mono text-xl font-bold">
                        A.<span className="text-blue-500">S</span>
                    </a>

                    {/* Menu Icon */}
                    <div 
                        role="button"
                        aria-label="Toggle menu"
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={()=> setMenuOpen(!menuOpen)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">

                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </a>

                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </a>

                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                            Projects
                        </a>

                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </a>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar