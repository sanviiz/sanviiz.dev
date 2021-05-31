import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppContextWrapper({ children }) {
  const sharedState = {};

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
