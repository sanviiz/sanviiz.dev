import { useState, useEffect } from "react";
import { useAppContext } from "../contexts/state";
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
  const sharedState = useAppContext();
  const setWindowTitle = sharedState.windowTitle[1];
  const setDescriptionContent = sharedState.descriptionContent[1];
  const setKeywordsContent = sharedState.keywordsContent[1];
  const setOgDescriptionContent = sharedState.ogDescriptionContent[1];
  const [copyStatus, setCopyStatus] = useState("");

  const handleClickToCopy = () => {
    navigator.clipboard.writeText(_.DISCORD);
    setCopyStatus(_.COPIED_STATUS);
    setTimeout(() => {
      setCopyStatus("");
    }, 1000);
  };

  useEffect(() => {
    setWindowTitle(SEO.CONTACT_PAGE_TITLE);
    setDescriptionContent(SEO.CONTACT_DESCRIPTION_CONTENT);
    setKeywordsContent(SEO.CONTACT_KEYWORDS_CONTENT);
    setOgDescriptionContent(SEO.CONTACT_OGDESCRIPTIONS_CONTENT);
  }, []);

  return (
    <div className="container mx-auto lg:mt-0 w-screen lg:h-screen mt-4">
      <main className="flex flex-col justify-center items-center h-full w-full lg:mt-0 mt-24 mb-16">
        <h1 className="md:text-7xl text-4xl font-bold lg:mb-10 mb-6">
          {_.CONTACT_GREETING_START}
          <span className="text-purple-700"> {_.CONTACT_GREETING_END}</span>
        </h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <a target="_blank" href={_.FACEBOOK}>
            <div className="w-80 h-32 border border-black lg:hover:border-purple-700 bg-white lg:hover:text-purple-700 rounded-lg cursor-pointer flex items-center lg:hover:transform lg:hover:scale-110 transition active:border-purple-700 active:text-purple-700 active:transform active:scale-110  ease-in-out">
              <FaFacebook className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg">{_.FACEBOOK_DISPLAY_NAME}</span>
              </div>
            </div>
          </a>
          <a target="_blank" href={_.GITHUB}>
            <div className="w-80 h-32 border border-black lg:hover:border-purple-700 bg-white lg:hover:text-purple-700 rounded-lg cursor-pointer flex items-center lg:hover:transform lg:hover:scale-110 transition active:border-purple-700 active:text-purple-700 active:transform active:scale-110 ease-in-out">
              <FaGithub className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg block">{_.GITHUB_DISPLAY_NAME}</span>
                <span className="text-lg">({_.NAME})</span>
              </div>
            </div>
          </a>
          <a target="_blank" href={_.LINKEDIN}>
            <div className="w-80 h-32 border border-black lg:hover:border-purple-700 bg-white lg:hover:text-purple-700 rounded-lg cursor-pointer flex items-center lg:hover:transform lg:hover:scale-110 transition active:border-purple-700 active:text-purple-700 active:transform active:scale-110  ease-in-out">
              <FaLinkedin className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg">{_.LINKEDIN_DISPLAY_NAME}</span>
              </div>
            </div>
          </a>
          <a href={_.EMAIL}>
            <div className="w-80 h-32 border border-black lg:hover:border-purple-700 bg-white lg:hover:text-purple-700 rounded-lg cursor-pointer flex items-center lg:hover:transform lg:hover:scale-110 transition active:border-purple-700 active:text-purple-700 active:transform active:scale-110  ease-in-out">
              <FaEnvelopeOpenText className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg">{_.EMAIL_CONTACT_DISPLAY}</span>
              </div>
            </div>
          </a>
          <a href={_.TEL}>
            <div className="w-80 h-32 border border-black lg:hover:border-purple-700 bg-white lg:hover:text-purple-700 rounded-lg cursor-pointer flex items-center lg:hover:transform lg:hover:scale-110 transition active:border-purple-700 active:text-purple-700 active:transform active:scale-110  ease-in-out">
              <FaPhone className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
              <div>
                <span className="text-lg">{_.TEL_CONTACT_DISPLAY}</span>
              </div>
            </div>
          </a>
          <div
            className="w-80 h-32 border border-black lg:hover:border-purple-700 bg-white lg:hover:text-purple-700 rounded-lg cursor-pointer flex items-center lg:hover:transform lg:hover:scale-110 transition active:border-purple-700 active:text-purple-700 active:transform active:scale-110  ease-in-out"
            onClick={handleClickToCopy}
          >
            <FaDiscord className="md:w-16 md:h-16 w-12 h-12 inline cursor-pointer mx-4" />
            <div>
              <span className="text-lg">
                {_.DISCORD_DISPLAY_NAME}
                {copyStatus && (
                  <span className="text-green-400"> ({copyStatus})</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
