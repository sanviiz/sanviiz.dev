import _Head from "../components/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as _ from "../assets/constants";

export default function About() {
  return (
    <>
      <_Head title="About" />

      <Navbar />

      <div className="container mx-auto">
        <main className="flex flex-col items-center h-full w-full mt-24">
          <Image
            src="/images/profile_image.jpg"
            alt="Profile picture"
            width={150}
            height={150}
            quality={100}
            className="rounded-full"
          />
          <p className="text-3xl font-base my-3">{_.NAME}</p>
          <hr className="w-full border-black" />
          <div className="w-4/5 text-center mt-4">
            <p className="text-base font-bold">- Under mantainace 🔨 -</p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
