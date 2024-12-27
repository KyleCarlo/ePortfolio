import StandingImage from "/standing.png";
import GithubIcon from "/github.svg";
import LinkedInIcon from "/linkedin.svg";
import EmailIcon from "/email.svg";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useEffect, useRef, useState, RefObject } from "react";

export default function Home({
  headerRef,
}: {
  headerRef: RefObject<HTMLDivElement>;
}) {
  const homeRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(0);
  const [bioWidth, setBioWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: homeRef,
  });
  const scrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });
  const imgX = useTransform(scrollY, [0, 0.8], [0, imageWidth]);
  const bioX = useTransform(scrollY, [0, 0.8], [0, -bioWidth]);
  useEffect(() => {
    if (headerRef.current) {
      console.log(headerRef.current.clientHeight);
      setHeaderHeight(headerRef.current.clientHeight);
    }
    if (imgRef.current) {
      console.log(imgRef.current.clientWidth);
      setImageWidth(imgRef.current.clientWidth);
    }
    if (bioRef.current) {
      console.log(bioRef);
      setBioWidth(bioRef.current.clientWidth);
    }
  }, []);
  return (
    <section className="h-[1800px]" id="home" ref={homeRef}>
      <div className="flex sticky" style={{ top: headerHeight }}>
        <div className="w-1/2 flex justify-end">
          <motion.img
            src={StandingImage}
            ref={imgRef}
            style={{ x: imgX }}
            alt="My Picture"
            className="max-h-[85dvh] z-10"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start">
          <motion.div
            className="text-center h-full flex flex-col justify-center"
            ref={bioRef}
            style={{ x: bioX }}
          >
            <h1 className="text-[--orange-highlight] text-[2rem] font-bold">
              KYLE CARLO C. LASALA
            </h1>
            <p>Computer Science Student | Aspiring Researcher</p>
            <div className="flex justify-around p-4">
              <img src={GithubIcon} alt="GitHub" width={48} height={46} />
              <img src={LinkedInIcon} alt="LinkedIn" width={46} height={46} />
              <img src={EmailIcon} alt="Email" width={57} height={46} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
