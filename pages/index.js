import { useEffect } from "react";
import { useAppContext } from "../contexts/state";
import Link from "next/link";
import Image from "next/image";
import * as _ from "../assets/constants";
import * as ROUTES from "../assets/routes";
import * as SEO from "../assets/seo";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const sharedState = useAppContext();
  const setWindowTitle = sharedState.windowTitle[1];
  const setDescriptionContent = sharedState.descriptionContent[1];
  const setKeywordsContent = sharedState.keywordsContent[1];
  const setOgDescriptionContent = sharedState.ogDescriptionContent[1];

  useEffect(() => {
    setWindowTitle(SEO.HOME_PAGE_TITLE);
    setDescriptionContent(SEO.HOME_DESCRIPTION_CONTENT);
    setKeywordsContent(SEO.HOME_KEYWORDS_CONTENT);
    setOgDescriptionContent(SEO.HOME_OGDESCRIPTIONS_CONTENT);
  }, []);

  return (
    <>
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
            <h2 className="md:text-6xl text-2xl font-bold">{_.GREETING}</h2>
            <h1 className="md:text-6xl text-2xl font-bold">
              {_.INTRODUCE}
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
            <a target="_blank" href={_.LINKEDIN}>
              <FaLinkedin className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer hover:text-purple-700" />
            </a>
          </div>
          <div className="w-4/5 text-right mt-4 lg:mb-0 mb-16">
            <Link href={ROUTES.ABOUT}>
              <a
                href="#"
                className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700"
              >
                {_.ABOUT_LINK_DESCRIPTION}
              </a>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
