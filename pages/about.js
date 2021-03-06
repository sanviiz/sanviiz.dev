import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import * as _ from "../assets/constants";
import * as ROUTES from "../assets/routes";
import * as SEO from "../assets/seo";
import EducationLists from "../components/educationLists";
import SkillLists from "../components/skillLists";
import WorkLists from "../components/workLists";
import TechnicalProjectLists from "../components/technicalProjectLists";
import BusinessProjectLists from "../components/businessProjectLists";

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
          property="og:url"
          content={process.env.NEXT_PUBLIC_VERCEL_URL + ROUTES.ABOUT}
        />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_VERCEL_URL + ROUTES.ABOUT}
        />
        <meta
          property="twitter:title"
          content={SEO.ABOUT_PAGE_TITLE + _.WINDOW_TITLE}
        />
        <meta
          property="twitter:description"
          content={SEO.ABOUT_DESCRIPTION_CONTENT}
        />
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
            className={`rounded-full bg-gray-10 dark:bg-transparent`}
          />
          <h3 className="text-3xl font-normal mt-3 dark:text-white transition-all">
            {_.NAME}
          </h3>
          <div className="text-xl font-light my-3 text-center dark:text-white">
            <a
              target="_blank"
              href={_.GITHUB}
              className="cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all"
            >
              {_.GITHUB_CONTACT_DISPLAY}
            </a>
            <span className="md:inline hidden transition-all"> | </span>
            <br className="md:hidden" />
            <a
              target="_blank"
              href={_.WEBSITE}
              className="cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all"
            >
              {_.WEBSITE_CONTACT_DISPLAY}
            </a>
            <span className="md:inline hidden transition-all"> | </span>
            <br className="md:hidden" />
            <a
              href={_.EMAIL}
              className="cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all"
            >
              {_.EMAIL_CONTACT_DISPLAY}
            </a>
            <span className="md:inline hidden transition-all"> | </span>
            <br className="md:hidden" />
            <a
              href={_.TEL}
              className="cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all"
            >
              {_.TEL_CONTACT_DISPLAY}
            </a>
          </div>
          <hr className="w-full border-black dark:border-white" />
          <div className="w-4/5 text-left mt-4">
            <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1">
              <div className="mt-3">
                <EducationLists />
                <SkillLists />
                <WorkLists />
              </div>
              <div className="mt-3">
                <TechnicalProjectLists />
                <BusinessProjectLists />
              </div>
            </div>
            <Fade bottom>
              <div className="flex justify-between text-right lg:mt-6 mt-2 mb-20 dark:text-white">
                <Link href={ROUTES.HOME}>
                  <a
                    href="#"
                    className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all"
                  >
                    {`${_.ARROW_LEFT_SYMBOL} ${_.HOME_LINK_DESCRIPTION}`}
                  </a>
                </Link>
                <span
                  onClick={() => scrollToTop()}
                  className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all"
                >
                  {`${_.ARROW_UP_SYMBOL} ${_.GO_TO_TOP_DESCRIPTION}`}
                </span>
                <Link href={ROUTES.CONTACT}>
                  <a
                    href="#"
                    className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all"
                  >
                    {`${_.CONTACT_LINK_DESCRIPTION} ${_.ARROW_RIGHT_SYMBOL}`}
                  </a>
                </Link>
              </div>
            </Fade>
          </div>
        </main>
      </div>
    </>
  );
}
