import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import * as _ from "../assets/constants";
import * as ROUTES from "../assets/routes";
import * as SEO from "../assets/seo";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [printString, setPrintString] = useState(_.NAME_START_TYPING);
  const [printedString, setPrintedString] = useState(false);
  const [typingDelay, setTypingDelay] = useState(_.START_TYPING_DELAY);
  const [charIndex, setCharIndex] = useState(printString.length);
  const string = _.NAME;

  const randomTypingDelay = (minValue, maxValue) => {
    return setTypingDelay(
      Math.floor(Math.random() * (maxValue - minValue) + maxValue)
    );
  };

  const renderTypingString = () => {
    randomTypingDelay(_.MIN_TYPING_DELAY, _.MAX_TYPING_DELAY);
    setPrintString(() => printString + string.charAt(charIndex));
    if (charIndex === string.length) return setPrintedString(true);
    else return setCharIndex(() => charIndex + 1);
  };

  useLayoutEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) {
        renderTypingString();
      }
    }, typingDelay);
    return () => {
      isMounted = false;
    };
  }, [charIndex]);

  return (
    <>
      <Head>
        <title>{SEO.HOME_PAGE_TITLE + _.WINDOW_TITLE}</title>
        <link rel="icon" href={_.WINDOW_ICON} />
        <meta name="viewport" content={_.VIEWPORT_CONTENT} />
        <meta name="description" content={SEO.HOME_DESCRIPTION_CONTENT} />
        <meta name="keywords" content={SEO.HOME_KEYWORDS_CONTENT} />
        <meta
          property="og:title"
          content={SEO.HOME_PAGE_TITLE + _.WINDOW_TITLE}
        />
        <meta
          property="og:description"
          content={SEO.HOME_OGDESCRIPTIONS_CONTENT}
        />
      </Head>

      <div className="container mx-auto xl:mt-0 xl:h-screen w-screen mt-4">
        <main className="flex flex-col justify-center items-center h-full w-full xl:mt-0 mt-24">
          <Image
            src={`/images/${_.PROFILE_IMAGE_FILE}`}
            alt={_.PROFILE_IMAGE_ALT}
            priority={true}
            width={240}
            height={240}
            quality={90}
            className={`rounded-full bg-gray-100`}
          />
          <div className="w-4/5 text-left md:mt-8 mt-4">
            <h2 className="md:text-6xl text-2xl font-bold">{_.GREETING}</h2>
            <h1 className="md:text-6xl text-2xl font-bold">
              {_.INTRODUCE}
              <span className="md:text-7xl text-3xl font-bold text-purple-700">
                {` ${printString}`}
              </span>
              {!printedString && (
                <span className="cursor h-full bg-gray-400 text-transparent font-light animate-pulse">
                  |
                </span>
              )}
            </h1>
          </div>
          <div className="w-4/5 text-right md:mb-10 mb-4">
            <h2 className="md:text-6xl text-2xl font-bold">- {_.ROLE}</h2>
          </div>
          <div>
            <a target="_blank" rel="noopener" href={_.FACEBOOK}>
              <FaFacebookSquare className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer hover:text-purple-700" />
            </a>
            <a target="_blank" rel="noopener" href={_.GITHUB}>
              <FaGithubSquare className="md:w-16 md:h-16 w-12 h-12 inline mx-4 cursor-pointer hover:text-purple-700" />
            </a>
            <a target="_blank" rel="noopener" href={_.LINKEDIN}>
              <FaLinkedin className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer hover:text-purple-700" />
            </a>
          </div>
          <div className="w-4/5 text-right mt-4 xl:mb-0 mb-20">
            <Link href={ROUTES.ABOUT}>
              <a
                href="#"
                className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700"
              >
                {_.ABOUT_LINK_DESCRIPTION} →
              </a>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
