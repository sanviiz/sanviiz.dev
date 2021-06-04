import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as _ from "../assets/constants";
import * as ROUTES from "../assets/routes";
import { FaGithub } from "react-icons/fa";
import Switch from "react-switch";
import { IoMoon } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";

export default function Navbar(props) {
  const { darkTheme, setDarkTheme } = props;

  const router = useRouter();
  const [toggleHidden, setToggleHidden] = useState("hidden");
  const navbarWrapperRef = useRef(null);

  const handlerButtonClick = () => {
    if (toggleHidden === "") setToggleHidden("hidden");
    else setToggleHidden("");
  };

  const handlerLinkClick = () => {
    setToggleHidden("hidden");
  };

  const handleChange = () => {
    setDarkTheme(!darkTheme);
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
      className="flex items-center justify-between flex-wrap p-6 fixed w-full top-0 bg-white border-b border-gray-300 z-10 dark:bg-gray-900 dark:border-gray-700 transition-all"
    >
      <div className="flex items-center flex-shrink-0 text-black mr-6 dark:text-white transition-all">
        <Link href={ROUTES.HOME}>
          <span
            className="font-semibold lg:text-3xl text-2xl tracking-tight cursor-pointer"
            onClick={handlerLinkClick}
          >
            {_.LOGO}
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded border-black hover:text-purple-700 hover:border-purple-700 dark:text-white dark:border-white transition-all"
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
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right ${toggleHidden} dark:text-white`}
      >
        <div className="text-lg font-semibold lg:flex-grow">
          <Switch
            className="align-top mr-4 lg:mt-0 mt-4"
            onColor="#202a37"
            offColor="#202a37"
            uncheckedIcon={
              <MdWbSunny className="h-full ml-1.5 text-yellow-400" />
            }
            checkedIcon={<IoMoon className="h-full w-4 ml-2 text-white" />}
            activeBoxShadow="none"
            onChange={() => handleChange()}
            checked={darkTheme}
          />
          <Link href={ROUTES.HOME}>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-700 dark:hover:text-green-500 transition-all mr-4"
              onClick={handlerLinkClick}
            >
              {_.NAVBAR_HOME_LINK_TITLE}
            </a>
          </Link>
          <Link href={ROUTES.ABOUT}>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-700 dark:hover:text-green-500 transition-all mr-4"
              onClick={handlerLinkClick}
            >
              {_.NAVBAR_ABOUT_LINK_TITLE}
            </a>
          </Link>
          <Link href={ROUTES.CONTACT}>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-700 dark:hover:text-green-500 transition-all mr-4"
              onClick={handlerLinkClick}
            >
              {_.NAVBAR_CONTACT_LINK_TITLE}
            </a>
          </Link>
          <FaGithub
            className="w-7 h-7 inline-block align-top cursor-pointer lg:mt-0 mt-4 text-gray-400 hover:text-gray-500 transition-colors duration-200"
            onClick={() => router.push(_.GITHUB_REPOSITORY)}
          />
        </div>
      </div>
    </nav>
  );
}
