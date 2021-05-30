import _Head from "../components/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as _ from "../assets/constants";
import * as ROUTES from "../assets/routes";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <_Head />

      <Navbar />

      <div className="container mx-auto lg:mt-0 lg:h-screen mt-4">
        <main className="flex flex-col justify-center items-center h-full w-full lg:mt-0 mt-24">
          <Image
            src="/images/profile_image.jpg"
            alt="Profile picture"
            width={240}
            height={240}
            quality={100}
            className="rounded-full"
          />
          <div className="w-4/5 text-left md:mt-8 mt-4">
            <h2 className="md:text-6xl text-2xl font-bold">Hi there!</h2>
            <h1 className="md:text-6xl text-2xl font-bold">
              I'm
              <span className="md:text-7xl text-3xl font-bold text-purple-700">
                {` ${_.NAME}`}
              </span>
            </h1>
          </div>
          <div className="w-4/5 text-right md:mb-10 mb-4">
            <h2 className="md:text-6xl text-2xl font-bold">- {_.ROLE}</h2>
          </div>
          <div>
            <a target="_blank" href={_.FACEBOOK}>
              <FaFacebookSquare className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer hover:text-purple-700" />
            </a>
            <a target="_blank" href={_.GITHUB}>
              <FaGithubSquare className="md:w-16 md:h-16 w-12 h-12 inline mx-4 cursor-pointer hover:text-purple-700" />
            </a>
            <a target="_blank" href={_.INSTAGRAM}>
              <FaInstagramSquare className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer hover:text-purple-700" />
            </a>
          </div>
          <div className="w-4/5 text-right mt-4 md:mb-0 mb-10">
            <Link href={ROUTES.ABOUT}>
              <a
                href="#"
                className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700"
              >
                About me →
              </a>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
