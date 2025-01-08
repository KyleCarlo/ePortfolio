import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Spinner from "./components/Spinner";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { scrollToProgress } from "./utils";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hideSpinner, setHideSpinner] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mainRef,
  });

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  usePreventZoom();
  useEffect(() => {
    if (hideSpinner) {
      scrollToProgress(0);
    }
  }, [hideSpinner]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[--background-color] z-30 ${
          hideSpinner ? "hidden" : ""
        }`}
      >
        <Spinner loading={loading} />
      </div>
      <main ref={mainRef} className="scrollbar-hide">
        <motion.div
          style={{ scaleX: scrollY }}
          className={`fixed top-0 left-0 w-full h-1 bg-[--blue-highlight] z-30 ${
            hideSpinner ? "" : "hidden"
          }`}
        />
        <Header ref={headerRef} homeRef={homeRef} mainRef={mainRef} />
        <Home
          ref={homeRef}
          headerRef={headerRef}
          setLoading={setLoading}
          setHideSpinner={setHideSpinner}
        />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

function usePreventZoom(scrollCheck = true, keyboardCheck = true) {
  useEffect(() => {
    const handleKeydown = (e: globalThis.KeyboardEvent) => {
      if (
        keyboardCheck &&
        e.ctrlKey &&
        (e.key == "=" || e.key == "+" || e.key == "-")
      ) {
        e.preventDefault();
        console.log(e);
        console.log(e.ctrlKey);
      }
    };

    const handleWheel = (e: globalThis.WheelEvent) => {
      if (scrollCheck && e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [scrollCheck, keyboardCheck]);
}
