import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppContextWrapper({ children }) {
  const [windowTitle, setWindowTitle] = useState(``);
  const [descriptionContent, setDescriptionContent] = useState(``);
  const [keywordsContent, setKeywordsContent] = useState(``);
  const [ogDescriptionContent, setOgDescriptionContent] = useState(``);
  const [ogTitleContent, setOgTitleContent] = useState(``);

  const sharedState = {
    windowTitle: [windowTitle, setWindowTitle],
    descriptionContent: [descriptionContent, setDescriptionContent],
    keywordsContent: [keywordsContent, setKeywordsContent],
    ogDescriptionContent: [ogDescriptionContent, setOgDescriptionContent],
    ogTitleContent: [ogTitleContent, setOgTitleContent],
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
