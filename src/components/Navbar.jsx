import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll"; // 👈 Import react-scroll

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Certificates", "Contacts"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold text-teal-400">FarhanDev</div>

        {/* Tombol hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="md:flex space-x-6 text-sm font-medium hidden">
          {navItems.map((label, i) => (
            <li key={i}>
              <Link
                to={label.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-60}
                className="cursor-pointer hover:text-teal-400"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900/95 backdrop-blur shadow-md px-6 pb-4 pt-2 space-y-2 text-white text-sm font-medium">
          {navItems.map((label, i) => (
            <li key={i}>
              <Link
                to={label.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-60}
                className="block cursor-pointer hover:text-teal-400"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
