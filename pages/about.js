import _Head from "../components/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Education from "../components/education";
import Skills from "../components/skills";
import WorkExperience from "../components/workExperience";
import * as _ from "../assets/constants";
import { educationList } from "../assets/education";
import { skillList } from "../assets/skills";
import { workList } from "../assets/works";

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
          <div className="w-4/5 text-left mt-4">
            <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1 gap-8">
              <div className="mt-3 mb-12">
                <p className="text-3xl font-base text-gray-500">EDUCATION</p>
                {educationList.map((educationElement) => {
                  return (
                    <Education
                      education={educationElement}
                      key={educationList.indexOf(educationElement)}
                    />
                  );
                })}
                <p className="text-3xl font-base text-gray-500 mt-5">SKILLS</p>
                {skillList.map((skillElement) => {
                  return (
                    <Skills
                      skill={skillElement}
                      key={skillList.indexOf(skillElement)}
                    />
                  );
                })}
                <p className="text-3xl font-base text-gray-500 mt-5">
                  WORK EXPERIENCE
                </p>
                {workList.map((workElement) => {
                  return (
                    <WorkExperience
                      work={workElement}
                      key={workList.indexOf(workElement)}
                    />
                  );
                })}
              </div>
              <div className="mt-3 mb-12 text-center">
                - Under mantainace 🔨 -
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
