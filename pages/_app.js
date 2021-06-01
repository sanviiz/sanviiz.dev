import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AppContextWrapper } from "../contexts/state";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextWrapper>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AppContextWrapper>
  );
}

export default MyApp;
