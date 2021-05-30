import "../styles/globals.css";
import Particles from "react-particles-js";
import particles from "../assets/particles.json";
import _Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AppContextWrapper } from "../contexts/state";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextWrapper>
      <Particles params={particles} />
      <Navbar />
      <_Head />
      <Component {...pageProps} />
      <Footer />
    </AppContextWrapper>
  );
}

export default MyApp;
