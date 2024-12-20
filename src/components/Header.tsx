import { useState } from "react";
import logo from "../assets/Logo.svg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between py-4 px-4 md:py-5 md:px-14 items-center relative">
      <a href="#" className="z-20">
        <img src={logo} alt="logo" className="w-24 md:w-auto" />
      </a>

      {/* Mobile Menu Button */}
      <button
        className="z-20 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
        fixed inset-0 bg-black bg-opacity-90 z-10 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden
      `}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col text-white space-y-6 text-center text-lg uppercase">
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Property
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Agent
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <button className="border border-white py-3 px-8 rounded-full text-white">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex text-white space-x-8 text-base uppercase">
          <li className="hover:opacity-80">Home</li>
          <li className="hover:opacity-80">Features</li>
          <li className="hover:opacity-80">Property</li>
          <li className="hover:opacity-80">Agent</li>
          <li className="hover:opacity-80">Blog</li>
          <li className="hover:opacity-80">About</li>
        </ul>
      </div>

      <div className="hidden md:block">
        <button className="border border-white py-3 px-8 rounded-full uppercase text-white text-base hover:bg-white hover:text-black transition-colors">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Header;
