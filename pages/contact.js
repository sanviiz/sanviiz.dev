import { useEffect } from "react";
import { useAppContext } from "../contexts/state";
import * as _ from "../assets/constants";
import * as SEO from "../assets/seo";

export default function Contact() {
  const sharedState = useAppContext();
  const setWindowTitle = sharedState.windowTitle[1];
  const setDescriptionContent = sharedState.descriptionContent[1];
  const setKeywordsContent = sharedState.keywordsContent[1];
  const setOgDescriptionContent = sharedState.ogDescriptionContent[1];

  useEffect(() => {
    setWindowTitle(SEO.CONTACT_PAGE_TITLE);
    setDescriptionContent(SEO.CONTACT_DESCRIPTION_CONTENT);
    setKeywordsContent(SEO.CONTACT_KEYWORDS_CONTENT);
    setOgDescriptionContent(SEO.CONTACT_OGDESCRIPTIONS_CONTENT);
  }, []);

  return (
    <div className="flex h-screen justify-center items-center">
      <p>- Under maintenance 🔨 -</p>
    </div>
  );
}
