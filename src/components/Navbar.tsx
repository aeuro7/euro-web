"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter hook

  const handleGitHubClick = () => {
    // Trigger the page change and add fade effect
    router.push("/user");
  };
  const handleMainClick = () => {
    // Trigger the page change and add fade effect
    router.push("/");
  };

  return (
    <nav className="w-min-screen sticky top-3 z-50">
      <div className="flex container mx-auto sm:mx-auto px-8 py-4 bg-black bg-opacity-10 justify-between items-center backdrop-blur-lg rounded-[50px] border border-white border-opacity-20">
        
        {/* Left side: Logo */}
        <button onClick={handleMainClick} className="text-white hover:text-bluemain">EURO</button>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-light">
          <button onClick={() => window.open("http://github.com/aeuro7", "_blank")} className="hover:text-bluemain">Github</button>
          <button onClick={() => window.open("https://www.linkedin.com/in/tibet-charoensripaiboon-895162328/", "_blank")} className="hover:text-bluemain">Linkedin</button>
          <button className="hover:text-bluemain">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none hover:text-bluemain"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 mr-10 ml-10 py-4 md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-10 justify-between backdrop-blur-lg rounded-[50px] border border-white border-opacity-20 animate-fadeDown">
          <button className="text-white hover:text-bluemain">Github</button>
          <button className="text-white hover:text-bluemain">Linkedin</button>
          <button className="text-white hover:text-bluemain">Contact</button>
        </div>
      )}
    </nav>
  );
}
