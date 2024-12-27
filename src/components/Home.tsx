import StandingImage from "/standing.png";
import GithubIcon from "/github.svg";
import LinkedInIcon from "/linkedin.svg";
import EmailIcon from "/email.svg";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState, RefObject } from "react";

export default function Home({
  headerRef,
}: {
  headerRef: RefObject<HTMLDivElement>;
}) {
  const homeRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const bio2Ref = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [bioWidth, setBioWidth] = useState(0);
  const [bio2Width, setBio2Width] = useState(0);

  const [isBioVisible, setBioVisible] = useState(true);

  const { scrollYProgress } = useScroll({
    target: homeRef,
  });

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 0.3) {
      setBioVisible(false);
    } else {
      setBioVisible(true);
    }
  });

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
    if (imgRef.current) {
      setImageWidth(imgRef.current.clientWidth);
    }
    if (bioRef.current) {
      setBioWidth(bioRef.current.clientWidth);
    }
    if (bio2Ref.current) {
      setBio2Width(bio2Ref.current.clientWidth);
    }
  }, []);

  const imgX = useTransform(scrollY, [0, 1], [0, imageWidth]);
  const bioX = useTransform(scrollY, [0, 0.75], [0, -bioWidth]);
  const bio2X = useTransform(scrollY, [0, 1], [0, -bio2Width]);

  useMotionValueEvent(scrollY, "change", (value) => {
    console.log(scrollY);
    console.log(value);
    // console.log(isBioVisible);
  });
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
        <div className="relative w-1/2 flex flex-col justify-center items-start">
          {/* BIO */}
          <div className={isBioVisible ? "" : "overflow-hidden"}>
            <motion.div
              className="text-center h-full flex flex-col justify-center min-w-min text-nowrap"
              ref={bioRef}
              style={{
                x: bioX,
              }}
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
          {/* BIO2 */}
          <motion.div
            ref={bio2Ref}
            className="absolute w-[35dvw] overflow-hidden space-y-4"
            style={{
              x: bio2X,
            }}
          >
            <h1 className="text-2xl font-bold">Let me introduce myself.</h1>
            <p className="text-justify">
              I am currently a BSMS Computer Science student (straight to
              Masters program) at De La Salle University-Manila and a research
              assistant at Andrew L. Tan Data Science Institute (ALTDSI) and
              Center for Automation Research (CAR).
            </p>
            <p className="text-justify">
              I am currently doing my research in the field of quantum computing
              but I am also interested in the following domains:
            </p>
            <ul className="list-disc list-inside">
              <li>Computational Physics</li>
              <li>High Performance Computing</li>
              <li>Computational Biology and Medicine</li>
              <li>Computer Science and Education</li>
              <li>Human-Computer Interaction</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
