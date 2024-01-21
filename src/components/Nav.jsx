import { useState } from "react";
import { hamburger, cross } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium text-coral-red font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
        </div>
        <div className="hidden max-lg:block cursor-pointer">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={handleShow}
          />
        </div>

        {/* This is For Mobile Menu */}
        <div
          className={`${
            !show
              ? `hidden`
              : `fixed top-0 left-0 z-[999] w-[100%] h-[100dvh] bg-white`
          }`}
        >
          <div className="flex justify-end mr-10 mt-8">
            <img
              src={cross}
              alt="cross"
              onClick={handleShow}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-16 pt-[12%]">
            {navLinks.map((item) => (
              <li key={item.label} className="list-none">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-coral-red font-semibold text-xl"
                  onClick={handleShow}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
