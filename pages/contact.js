import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import * as _ from "../assets/constants";
import * as SEO from "../assets/seo";
import * as ROUTES from "../assets/routes";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelopeOpenText,
  FaPhone,
  FaDiscord,
} from "react-icons/fa";

export default function Contact() {
  const router = useRouter();
  const [copyStatus, setCopyStatus] = useState("");
  const contactBoxClassName = `md:w-80 w-full h-32 border border-black xl:hover:border-purple-700 bg-white dark:text-white dark:bg-gray-900 dark:border-white xl:hover:text-purple-700 dark:xl:hover:text-green-500 dark:xl:hover:border-green-500 rounded-lg cursor-pointer flex items-center xl:hover:transform xl:hover:scale-110 transition-all active:border-purple-700 active:text-purple-700 ease-in-out`;

  const handleClickToCopy = () => {
    navigator.clipboard.writeText(_.DISCORD);
    setCopyStatus(_.COPIED_STATUS);
    setTimeout(() => {
      setCopyStatus("");
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>{SEO.CONTACT_PAGE_TITLE + _.WINDOW_TITLE}</title>
        <link rel="icon" href={_.WINDOW_ICON} />
        <meta name="viewport" content={_.VIEWPORT_CONTENT} />
        <meta name="description" content={SEO.CONTACT_DESCRIPTION_CONTENT} />
        <meta name="keywords" content={SEO.CONTACT_KEYWORDS_CONTENT} />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_VERCEL_URL + ROUTES.CONTACT}
        />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_VERCEL_URL + ROUTES.CONTACT}
        />
        <meta
          property="twitter:title"
          content={SEO.CONTACT_PAGE_TITLE + _.WINDOW_TITLE}
        />
        <meta
          property="twitter:description"
          content={SEO.CONTACT_DESCRIPTION_CONTENT}
        />
        <meta
          property="og:title"
          content={SEO.CONTACT_PAGE_TITLE + _.WINDOW_TITLE}
        />
        <meta
          property="og:description"
          content={SEO.CONTACT_OGDESCRIPTION_CONTENT}
        />
      </Head>

      <div className="container mx-auto xl:mt-0 w-screen xl:h-screen mt-4">
        <main className="flex flex-col justify-center items-center h-full w-full xl:mt-0 mt-24 mb-20">
          <Fade top>
            <h1 className="md:text-7xl text-4xl font-bold xl:mb-10 mb-6 dark:text-white transition-all">
              {_.CONTACT_GREETING_START}
              <span className="text-purple-700 dark:text-green-500 transition-all">
                {" "}
                {_.CONTACT_GREETING_END + _.ARROW_DOWN_SYMBOL}
              </span>
            </h1>
          </Fade>
          <div className="grid xl:grid-cols-3 gap-8 place-items-center">
            <div
              className={contactBoxClassName}
              onClick={() => router.push(_.FACEBOOK)}
            >
              <FaFacebook className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg mr-4">{_.FACEBOOK_DISPLAY_NAME}</span>
              </div>
            </div>
            <div
              className={contactBoxClassName}
              onClick={() => router.push(_.GITHUB)}
            >
              <FaGithub className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg block">{_.GITHUB_DISPLAY_NAME}</span>
                <span className="text-lg mr-4">({_.NAME})</span>
              </div>
            </div>
            <div
              className={contactBoxClassName}
              onClick={() => router.push(_.LINKEDIN)}
            >
              <FaLinkedin className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg mr-4">{_.LINKEDIN_DISPLAY_NAME}</span>
              </div>
            </div>
            <a href={_.EMAIL}>
              <div className={contactBoxClassName}>
                <FaEnvelopeOpenText className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
                <div>
                  <span className="text-lg mr-4">
                    {_.EMAIL_CONTACT_DISPLAY}
                  </span>
                </div>
              </div>
            </a>
            <a href={_.TEL} className="w-full">
              <div className={contactBoxClassName}>
                <FaPhone className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
                <div>
                  <span className="text-lg mr-4">{_.TEL_CONTACT_DISPLAY}</span>
                </div>
              </div>
            </a>
            <div className={contactBoxClassName} onClick={handleClickToCopy}>
              <FaDiscord className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg mr-4">
                  {_.DISCORD_DISPLAY_NAME}
                  <br />
                  {copyStatus && (
                    <span className="text-green-400"> ({copyStatus})</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
