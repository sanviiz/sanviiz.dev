import "../styles/globals.css";
import Particles from "react-particles-js";
import particles from "../assets/config/particles.json";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AppContextWrapper } from "../contexts/state";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <AppContextWrapper>
        <Particles params={particles} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppContextWrapper>
    </div>
  );
}

export default MyApp;
