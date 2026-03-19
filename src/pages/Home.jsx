import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Herosectionvideo from "../components/Herosectionvideo";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  const bgVideoRef = useRef(null);
  useEffect(() => {
    if (location.pathname === "/") document.title = "Accueil — Agence K72";
  }, [location]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative h-screen  w-screen bg-black">
        <Herosectionvideo type="background" syncRef={bgVideoRef} />

        <div className="absolute h-screen  top-0 left-0 right-0">
          <Herosection bgVideoRef={bgVideoRef} />
        </div>
      </main>
    </>
  );
}

export default Home;
