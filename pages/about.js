import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Education from "../components/education";
import Skills from "../components/skills";
import Work from "../components/work";
import Projects from "../components/projects";
import * as _ from "../assets/constants";
import * as ROUTES from "../assets/routes";
import * as SEO from "../assets/seo";
import { educationList } from "../assets/contents/education";
import { skillList } from "../assets/contents/skills";
import { workList } from "../assets/contents/works";
import { technicalProjectList } from "../assets/contents/technicalProjects";
import { businessProjectList } from "../assets/contents/businessProjects";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>{SEO.ABOUT_PAGE_TITLE + _.WINDOW_TITLE}</title>
        <link rel="icon" href={_.WINDOW_ICON} />
        <meta name="viewport" content={_.VIEWPORT_CONTENT} />
        <meta name="description" content={SEO.ABOUT_DESCRIPTION_CONTENT} />
        <meta name="keywords" content={SEO.ABOUT_KEYWORDS_CONTENT} />
        <meta
          property="og:title"
          content={SEO.ABOUT_PAGE_TITLE + _.WINDOW_TITLE}
        />
        <meta
          property="og:description"
          content={SEO.ABOUT_OGDESCRIPTION_CONTENT}
        />
      </Head>

      <div className="container mx-auto">
        <main className="flex flex-col items-center h-full w-full mt-24">
          <Image
            src={`/images/${_.PROFILE_IMAGE_FILE}`}
            alt={_.PROFILE_IMAGE_ALT}
            priority={true}
            width={150}
            height={150}
            quality={90}
            className={`rounded-full bg-gray-100`}
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
          <div className="w-4/5 text-left mt-4">
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
            <div className="flex justify-between text-right lg:mt-6 mt-2 mb-20">
              <Link href={ROUTES.HOME}>
                <a
                  href="#"
                  className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700"
                >
                  {`${_.ARROW_LEFT_SYMBOL} ${_.HOME_LINK_DESCRIPTION}`}
                </a>
              </Link>
              <span
                onClick={() => scrollToTop()}
                className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700"
              >
                {`${_.ARROW_UP_SYMBOL} ${_.GO_TO_TOP_DESCRIPTION}`}
              </span>
              <Link href={ROUTES.CONTACT}>
                <a
                  href="#"
                  className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700"
                >
                  {`${_.CONTACT_LINK_DESCRIPTION} ${_.ARROW_RIGHT_SYMBOL}`}
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
