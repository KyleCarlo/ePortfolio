import StandingImage from "/standing.webp";
import { Github, LinkedIn, Email } from "./SVG";
import { email } from "../utils";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  RefObject,
  forwardRef,
  Dispatch,
  SetStateAction,
} from "react";

const Home = forwardRef<
  HTMLDivElement,
  {
    headerRef: RefObject<HTMLDivElement>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setHideSpinner: Dispatch<SetStateAction<boolean>>;
  }
>(({ headerRef, setLoading, setHideSpinner }, ref) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const bio2Ref = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [bioWidth, setBioWidth] = useState(0);
  const [bio2Width, setBio2Width] = useState(0);

  const [isBioVisible, setBioVisible] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement | null>,
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
  }, [headerRef, imgRef, bioRef, bio2Ref]);

  const imgX = useTransform(scrollY, [0, 1], [0, imageWidth]);
  const bioX = useTransform(scrollY, [0, 0.75], [0, -bioWidth]);
  const bio2X = useTransform(scrollY, [0, 1], ["150%", "0%"]);

  return (
    <div className="h-[1800px]" ref={ref}>
      <div className="flex sticky" style={{ top: headerHeight }}>
        <div className="w-1/2 flex justify-end">
          <motion.img
            src={StandingImage}
            ref={imgRef}
            style={{ x: imgX }}
            alt="My Picture"
            className="max-h-[85dvh] z-10"
            onLoad={() => {
              setTimeout(() => {
                setLoading(false);
              }, 2000);
              setTimeout(() => {
                setHideSpinner(true);
              }, 3000);
            }}
          />
        </div>
        <div className="relative w-1/2 flex flex-col justify-center items-start">
          {/* BIO1 */}
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
                <a
                  className="w-[48px] h-[46px]"
                  href="https://github.com/KyleCarlo"
                  target="_blank"
                >
                  <Github color="white" />
                </a>
                <a
                  className="w-[46px] h-[46px]"
                  href="https://www.linkedin.com/in/kylecarlo/"
                  target="_blank"
                >
                  <LinkedIn color="white" />
                </a>
                <a
                  className="w-[57px] h-[46px]"
                  href={`mailto: ${email}`}
                  target="_blank"
                >
                  <Email color="white" />
                </a>
              </div>
            </motion.div>
          </div>
          {/* BIO2 */}
          <motion.div
            ref={bio2Ref}
            className="absolute overflow-hidden w-full"
            style={{
              x: imgX,
              translateX: -bio2Width - imageWidth / 2,
            }}
          >
            <motion.div
              className="w-[35dvw] max-w-[800px] space-y-4"
              style={{
                x: bio2X,
              }}
            >
              <h1 className="text-2xl font-bold">Let me introduce myself.</h1>
              <p className="text-justify">
                I am currently a{" "}
                <span className="text-[--orange-highlight]">
                  BSMS Computer Science
                </span>{" "}
                student (straight to Masters program) at{" "}
                <span className="text-[--blue-highlight]">
                  De La Salle University-Manila
                </span>{" "}
                and a research assistant at Andrew L. Tan Data Science Institute
                (ALTDSI) and Center for Automation Research (CAR).
              </p>
              <p className="text-justify">
                I am currently doing my research in the field of{" "}
                <span className="text-nowrap font-bold italic text-[--orange-highlight]">
                  quantum computing
                </span>{" "}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Home;
