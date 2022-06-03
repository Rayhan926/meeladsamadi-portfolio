import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ToastContainer, toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        hideProgressBar
        position="bottom-center"
        autoClose={4000}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
