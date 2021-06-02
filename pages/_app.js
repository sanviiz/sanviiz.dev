import { useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import { AppContextWrapper } from "../contexts/state";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AppContextWrapper>
  );
}

export default MyApp;
