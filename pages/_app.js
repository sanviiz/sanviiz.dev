import "../styles/globals.css";
import Particles from "react-particles-js";
import particles from "../assets/particles.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Particles params={particles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
