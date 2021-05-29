import * as _ from "../assets/constants";
import Link from "next/link";
import { useState } from "react";
import * as ROUTES from "../assets/routes";

export default function Navbar() {
  const [toggleHidden, setToggleHidden] = useState("hidden");

  const handlerButtonClick = () => {
    if (toggleHidden === "") setToggleHidden("hidden");
    else setToggleHidden("");
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 lg:absolute lg:w-full top-0">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold lg:text-3xl text-2xl tracking-tight">
          {_.AKA}
        </span>
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
            <title>Menu</title>
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
              HOME
            </a>
          </Link>
          <Link href={ROUTES.HOME}>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-700 mr-4"
            >
              ABOUT
            </a>
          </Link>
          <Link href={ROUTES.HOME}>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-700"
            >
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
