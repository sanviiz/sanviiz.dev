import _Head from "../components/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Education from "../components/education";
import Skills from "../components/skills";
import Work from "../components/work";
import Projects from "../components/projects";
import * as _ from "../assets/constants";
import { educationList } from "../assets/education";
import { skillList } from "../assets/skills";
import { workList } from "../assets/works";
import { technicalProjectList } from "../assets/technicalProjects";
import { businessProjectList } from "../assets/businessProjects";

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
          <h3 className="text-3xl font-normal mt-3">{_.NAME}</h3>
          <div className="text-xl font-light my-3 text-center">
            <a
              target="_blank"
              href={_.GITHUB}
              className="cursor-pointer hover:text-purple-700"
            >
              {_.GITHUB_CONTACT_DISPLAY}
            </a>
            <span className="md:inline hidden"> | </span>
            <br className="md:hidden" />
            <a
              target="_blank"
              href={_.WEBSITE}
              className="cursor-pointer hover:text-purple-700"
            >
              {_.WEBSITE_CONTACT_DISPLAY}
            </a>
            <span className="md:inline hidden"> | </span>
            <br className="md:hidden" />
            <address className="inline not-italic">
              <a
                href={_.EMAIL}
                className="cursor-pointer hover:text-purple-700"
              >
                {_.EMAIL_CONTACT_DISPLAY}
              </a>
            </address>
            <span className="md:inline hidden"> | </span>
            <br className="md:hidden" />
            <address className="inline not-italic">
              <a href={_.TEL} className="cursor-pointer hover:text-purple-700">
                {_.TEL_CONTACT_DISPLAY}
              </a>
            </address>
          </div>
          <hr className="w-full border-black" />
          <div className="w-4/5 text-left mt-4 mb-16">
            <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1">
              <div className="mt-3">
                <h3 className="text-3xl font-normal text-gray-500">
                  {_.EDUCATION_TITLE}
                </h3>
                {educationList.map((educationElement) => {
                  return (
                    <Education
                      education={educationElement}
                      key={educationList.indexOf(educationElement)}
                    />
                  );
                })}
                <h3 className="text-3xl font-normal text-gray-500 mt-5">
                  {_.SKILL_TITLE}
                </h3>
                {skillList.map((skillElement) => {
                  return (
                    <Skills
                      skill={skillElement}
                      key={skillList.indexOf(skillElement)}
                    />
                  );
                })}
                <h3 className="text-3xl font-normal text-gray-500 mt-5">
                  {_.WORK_TITLE}
                </h3>
                {workList.map((workElement) => {
                  return (
                    <Work
                      work={workElement}
                      key={workList.indexOf(workElement)}
                    />
                  );
                })}
              </div>
              <div className="mt-3">
                <h3 className="text-3xl font-normal text-gray-500">
                  {_.TECHNICAL_PROJECT_TITLE}
                </h3>
                {technicalProjectList.map((projectElement) => {
                  return (
                    <Projects
                      project={projectElement}
                      key={technicalProjectList.indexOf(projectElement)}
                    />
                  );
                })}
                <h3 className="text-3xl font-normal text-gray-500 mt-5">
                  {_.BUSINESS_PROJECT_TITLE}
                </h3>
                {businessProjectList.map((projectElement) => {
                  return (
                    <Projects
                      project={projectElement}
                      key={businessProjectList.indexOf(projectElement)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
