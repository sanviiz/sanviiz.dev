import { useEffect, useState } from "react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import { AppContextWrapper } from "../contexts/state";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setDarkTheme(initialColorValue === "dark");
  }, []);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.className = "dark";
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.className = "light";
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppContextWrapper>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Component {...pageProps} />
      <Footer />
    </AppContextWrapper>
  );
}

export default MyApp;
