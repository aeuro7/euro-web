"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaBookBookmark,
  FaCodeBranch,
  FaAws,
  FaSalesforce,
} from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGitHubClick = () => {
    window.open("http://github.com/aeuro7", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/tibet-charoensripaiboon-895162328/",
      "_blank"
    );
  };

  const handleContactClick = () => {};

  return (
    <nav
      className={`w-full sticky top-1 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`flex flex-col container mx-auto px-8 ${
          isScrolled ? "py-1" : "py-4"
        } bg-black justify-between items-center bg-opacity-10 backdrop-blur-lg rounded-[50px] border border-white border-opacity-20 transition-all duration-300`}
      >
        {/* Top Bar */}
        <div className="flex w-full justify-between items-center">
          <button
            className="text-white duration-500 hover:text-bluemain transform transition-transform ease-in-out"
            style={{
              transform: isScrolled
                ? "translateY(0) scale(0.9)"
                : "translateY(0) scale(1)",
            }}
          >
            EURO
          </button>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex space-x-6 text-white font-light transition-all duration-300 ${
              isScrolled ? "text-sm" : "text-base"
            }`}
          >
            <button
              onClick={handleGitHubClick}
              className="hover:text-bluemain duration-500"
            >
              Github
            </button>
            <button
              onClick={handleLinkedinClick}
              className="hover:text-bluemain duration-500"
            >
              Linkedin
            </button>
            <button
              onClick={handleContactClick}
              className="hover:text-bluemain duration-500"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-white focus:outline-none duration-700 hover:text-bluemain hover:bg-white bg-white bg-opacity-10 rounded-full p-2 px-4 transition-all ease-in-out ${
              isScrolled
                ? "opacity-0 translate-y-[0] pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`w-full flex flex-col items-center space-y-4 transition-all duration-700 ease-in-out overflow-hidden ${
            isOpen && !isScrolled
              ? "max-h-34 py-4 opacity-100 translate-y-0"
              : "max-h-0 py-0 opacity-0 translate-y-[-20px]"
          } md:hidden`}
        >
          <hr className="w-full border-t border-white border-opacity-20" />
          <button
            onClick={handleGitHubClick}
            className="text-white hover:text-bluemain duration-500"
          >
            Github
          </button>
          <button
            onClick={handleLinkedinClick}
            className="text-white hover:text-bluemain duration-500"
          >
            Linkedin
          </button>
          <button
            onClick={handleContactClick}
            className="text-white hover:text-bluemain duration-500"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
