import Head from "next/head";
import { useEffect } from "react";
import * as _ from "../assets/constants";
import { useAppContext } from "../contexts/state";

export default function _Head() {
  const sharedState = useAppContext();
  const windowTitle = sharedState.windowTitle[0];
  const descriptionContent = sharedState.descriptionContent[0];
  const keywordsContent = sharedState.keywordsContent[0];
  const ogDescriptionContent = sharedState.ogDescriptionContent[0];
  const ogTitleContent = sharedState.ogTitleContent[0];
  const setOgTitleContent = sharedState.ogTitleContent[1];
  const fullTitle = (windowTitle && windowTitle + ` | `) + _.WINDOW_TITLE;

  const setOgTitleContentAswindowTitle = () => {
    setOgTitleContent(fullTitle);
  };

  useEffect(() => {
    setOgTitleContentAswindowTitle();
  }, [windowTitle]);

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="icon" href={_.WINDOW_ICON} />
      <meta name="viewport" content={_.VIEWPORT_CONTENT} />
      <meta name="description" content={descriptionContent} />
      <meta name="keywords" content={keywordsContent} />
      <meta property="og:title" content={ogTitleContent} />
      <meta property="og:description" content={ogDescriptionContent} />
    </Head>
  );
}
