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
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
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
