import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import * as _ from "../assets/constants";
import * as ROUTES from "../assets/routes";

export default function Navbar() {
  const [toggleHidden, setToggleHidden] = useState("hidden");
  const navbarWrapperRef = useRef(null);

  const handlerButtonClick = () => {
    if (toggleHidden === "") setToggleHidden("hidden");
    else setToggleHidden("");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navbarWrapperRef.current &&
        !navbarWrapperRef.current.contains(event.target)
      ) {
        setToggleHidden("hidden");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarWrapperRef]);

  return (
    <nav
      ref={navbarWrapperRef}
      className="flex items-center justify-between flex-wrap p-6 fixed w-full top-0 bg-white border-b border-gray-300 z-10"
    >
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link href={ROUTES.HOME}>
          <span className="font-semibold lg:text-3xl text-2xl tracking-tight cursor-pointer">
            {_.AKA}
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded border-black hover:text-purple-700 hover:border-purple-700"
          onClick={handlerButtonClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{_.NAVBAR_COLLAPSE_BUTTON_TITLE}</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right ${toggleHidden}`}
      >
        <div className="text-lg font-semibold lg:flex-grow">
          <Link href={ROUTES.HOME}>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-700 mr-4"
            >
              {_.NAVBAR_HOME_LINK_TITLE}
            </a>
          </Link>
          <Link href={ROUTES.ABOUT}>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-700 mr-4"
            >
              {_.NAVBAR_ABOUT_LINK_TITLE}
            </a>
          </Link>
          <Link href={ROUTES.CONTACT}>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-700"
            >
              {_.NAVBAR_CONTACT_LINK_TITLE}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
