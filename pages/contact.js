import { useState } from "react";
import Head from "next/head";
import * as _ from "../assets/constants";
import * as SEO from "../assets/seo";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelopeOpenText,
  FaPhone,
  FaDiscord,
} from "react-icons/fa";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");

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
          property="og:title"
          content={SEO.CONTACT_PAGE_TITLE + _.WINDOW_TITLE}
        />
        <meta
          property="og:description"
          content={SEO.CONTACT_OGDESCRIPTIONS_CONTENT}
        />
      </Head>

      <div className="container mx-auto xl:mt-0 w-screen xl:h-screen mt-4">
        <main className="flex flex-col justify-center items-center h-full w-full xl:mt-0 mt-24 mb-20">
          <h1 className="md:text-7xl text-4xl font-bold xl:mb-10 mb-6">
            {_.CONTACT_GREETING_START}
            <span className="text-purple-700"> {_.CONTACT_GREETING_END}</span>
          </h1>
          <div className="grid xl:grid-cols-3 gap-8 place-items-center">
            <a
              target="_blank"
              rel="noopener"
              href={_.FACEBOOK}
              className="w-full"
            >
              <div className="md:w-80 w-full h-32 border border-black xl:hover:border-purple-700 bg-white xl:hover:text-purple-700 rounded-lg cursor-pointer flex items-center xl:hover:transform xl:hover:scale-110 transition active:border-purple-700 active:text-purple-700 ease-in-out">
                <FaFacebook className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
                <div>
                  <span className="text-lg mr-4">
                    {_.FACEBOOK_DISPLAY_NAME}
                  </span>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href={_.GITHUB}
              className="w-full"
            >
              <div className="md:w-80 w-full h-32 border border-black xl:hover:border-purple-700 bg-white xl:hover:text-purple-700 rounded-lg cursor-pointer flex items-center xl:hover:transform xl:hover:scale-110 transition active:border-purple-700 active:text-purple-700 ease-in-out">
                <FaGithub className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
                <div>
                  <span className="text-lg block">{_.GITHUB_DISPLAY_NAME}</span>
                  <span className="text-lg mr-4">({_.NAME})</span>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href={_.LINKEDIN}
              className="w-full"
            >
              <div className="md:w-80 w-full h-32 border border-black xl:hover:border-purple-700 bg-white xl:hover:text-purple-700 rounded-lg cursor-pointer flex items-center xl:hover:transform xl:hover:scale-110 transition active:border-purple-700 active:text-purple-700 ease-in-out">
                <FaLinkedin className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
                <div>
                  <span className="text-lg mr-4">
                    {_.LINKEDIN_DISPLAY_NAME}
                  </span>
                </div>
              </div>
            </a>
            <a href={_.EMAIL}>
              <div className="md:w-80 w-full h-32 border border-black xl:hover:border-purple-700 bg-white xl:hover:text-purple-700 rounded-lg cursor-pointer flex items-center xl:hover:transform xl:hover:scale-110 transition active:border-purple-700 active:text-purple-700 ease-in-out">
                <FaEnvelopeOpenText className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
                <div>
                  <span className="text-lg mr-4">
                    {_.EMAIL_CONTACT_DISPLAY}
                  </span>
                </div>
              </div>
            </a>
            <a href={_.TEL} className="w-full">
              <div className="md:w-80 w-full h-32 border border-black xl:hover:border-purple-700 bg-white xl:hover:text-purple-700 rounded-lg cursor-pointer flex items-center xl:hover:transform xl:hover:scale-110 transition active:border-purple-700 active:text-purple-700 ease-in-out">
                <FaPhone className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
                <div>
                  <span className="text-lg mr-4">{_.TEL_CONTACT_DISPLAY}</span>
                </div>
              </div>
            </a>
            <div
              className="md:w-80 w-full h-32 border border-black xl:hover:border-purple-700 bg-white xl:hover:text-purple-700 rounded-lg cursor-pointer flex items-center xl:hover:transform xl:hover:scale-110 transition active:border-purple-700 active:text-purple-700 ease-in-out"
              onClick={handleClickToCopy}
            >
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
