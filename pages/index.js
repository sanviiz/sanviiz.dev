import _Head from "../components/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as _ from "../assets/constants";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <_Head title="I'm Sanviiz" />

      <Navbar />

      <div className="container mx-auto lg:h-screen">
        <main className="flex flex-col justify-center items-center h-full w-full">
          <Image
            src="/images/profile_image.jpg"
            alt="Profile picture"
            width={240}
            height={240}
            quality={100}
            className="rounded-full"
          />
          <div className="w-4/5 text-left mt-8">
            <p className="md:text-7xl text-2xl font-bold">Hi there!</p>
            <p className="md:text-7xl text-2xl font-bold">
              I'm
              <span className="md:text-8xl text-3xl font-bold text-purple-700">
                {` ${_.NAME}`}
              </span>
            </p>
          </div>
          <div className="w-4/5 text-right md:mb-10 mb-5">
            <p className="md:text-7xl text-2xl font-bold">- {_.ROLE}</p>
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
            <p className="md:text-xl text-base font-semibold underline cursor-pointer">
              About me →
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
