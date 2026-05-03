import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navbarLinks = [
    { id: 1, title: "Home", link: "heroSection" },
    { id: 2, title: "About", link: "about" },
    { id: 3, title: "Menu", link: "menu" },
    { id: 4, title: "Reservation", link: "reservation" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-700 cursor-pointer">S-K</div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        {navbarLinks.map((el) => (
          <Link
            key={el.id}
            to={el.link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-gray-700 hover:text-purple-600 cursor-pointer font-medium transition"
          >
            {el.title}
          </Link>
        ))}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-purple-700 transition">
          OUR MENU
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center">
        <GiHamburgerMenu
          size={28}
          className="cursor-pointer text-purple-700"
          onClick={() => setShow(!show)}
        />
      </div>

      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-4 md:hidden">
          {navbarLinks.map((el) => (
            <Link
              key={el.id}
              to={el.link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-gray-700 hover:text-purple-600 cursor-pointer font-medium"
              onClick={() => setShow(false)}
            >
              {el.title}
            </Link>
          ))}
          <button className="bg-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-purple-700 transition">
            OUR MENU
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;