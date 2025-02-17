"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleGitHubClick = () => {
    window.open("http://github.com/aeuro7", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/tibet-charoensripaiboon-895162328/", "_blank");
  };

  const handleContactClick = () => {};

  return (
    <nav className="w-full sticky top-3 z-50">
      <div className="flex flex-col container mx-auto px-8 py-4 bg-black justify-between items-center bg-opacity-10  backdrop-blur-lg rounded-[50px] border border-white border-opacity-20">
        
        {/* Top Bar */}
        <div className="flex w-full justify-between items-center">
          <button className="text-white hover:text-bluemain duration-500">EURO</button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white font-light">
            <button onClick={handleGitHubClick} className="hover:text-bluemain duration-500">Github</button>
            <button onClick={handleLinkedinClick} className="hover:text-bluemain duration-500">Linkedin</button>
            <button onClick={handleContactClick} className="hover:text-bluemain duration-500">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none duration-500 hover:text-bluemain hover:bg-white bg-white bg-opacity-10 rounded-full p-2 px-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>

        {/* Mobile Menu (อยู่ภายในกรอบเดียวกัน) */}
        <div className={`w-full flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-34 py-4 opacity-100 scale-y-100" : "max-h-0 py-0 opacity-0 scale-y-0"
        } md:hidden`}>
          <hr className="w-full border-t border-white border-opacity-20 transition-all duration-500 ease-in-out transform ${
            isOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }" />
          <button onClick={handleGitHubClick} className="text-white hover:text-bluemain duration-500">Github</button>
          <button onClick={handleLinkedinClick} className="text-white hover:text-bluemain duration-500">Linkedin</button>
          <button onClick={handleContactClick} className="text-white hover:text-bluemain duration-500">Contact</button>
        </div>

      </div>
    </nav>
  );
}
