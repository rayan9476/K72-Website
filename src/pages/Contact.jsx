import "../styles/contact.css";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactHeroSection from "../components/ContactHeroSection";
import useScrollToTop from "../components/hooks/useScrollToTop";
import { useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
function Contact() {
  //  email line animation start here
  const bannerRef = useRef(null);

  //  email line animation ends here

  useScrollToTop();

  //  dynamic page name change  logic start here
  useLayoutEffect(() => {
    document.title = "Contact — K72 Agency";
  }, []);
  //  dynamic page name change  logic ends here
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main ref={bannerRef} className="content_page   ">
        <ContactHeroSection />
      </main>
    </>
  );
}

export default Contact;
