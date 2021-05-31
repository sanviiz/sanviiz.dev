import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AppContextWrapper } from "../contexts/state";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <AppContextWrapper>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppContextWrapper>
    </div>
  );
}

export default MyApp;
