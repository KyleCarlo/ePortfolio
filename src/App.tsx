import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Spinner from "./components/Spinner";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(0);
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
    const timer = setTimeout(() => {
      setLoading(1);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (loading == 1) {
      const timer = setTimeout(() => {
        setLoading(2);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading]);

  if (loading != 2) {
    switch (loading) {
      case 0:
        return <Spinner loading={true} />;
      case 1:
        return <Spinner loading={false} />;
      default:
        break;
    }
  }

  return (
    <main ref={mainRef} className="w-full h-full overflow-hidden">
      <motion.div
        style={{ scaleX: scrollY }}
        className="fixed top-0 left-0 w-full h-1 bg-[--blue-highlight] z-30"
      />
      <Header ref={headerRef} homeRef={homeRef} mainRef={mainRef} />
      <Home ref={homeRef} headerRef={headerRef} />
      <Projects />
    </main>
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
