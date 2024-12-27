import Header from "./components/Header";
import Home from "./components/Home";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
  });
  const scrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });
  const scaleX = useTransform(scrollY, [0, 1], [0, 1]);

  return (
    <main ref={mainRef}>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 w-full h-1 bg-[--blue-highlight] z-30"
      ></motion.div>
      <Header ref={headerRef} />
      <Home headerRef={headerRef} />
      <section className="h-[1800px]">
        <p>Projects Section</p>
      </section>
    </main>
  );
}
