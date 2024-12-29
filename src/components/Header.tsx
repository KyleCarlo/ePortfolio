import { forwardRef, RefObject, useState, useEffect } from "react";

const Header = forwardRef<
  HTMLDivElement,
  { homeRef: RefObject<HTMLDivElement>; mainRef: RefObject<HTMLDivElement> }
>(({ homeRef, mainRef }, ref) => {
  const [homeFrac, setHomeFrac] = useState(0);

  useEffect(() => {
    if (homeRef.current && mainRef.current) {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const homeHeight = homeRef.current.clientHeight;
      const homeFrac = (homeHeight - window.innerHeight + 90) / scrollHeight;
      setHomeFrac(homeFrac);
    }
  }, [homeRef, mainRef]);

  return (
    <div
      ref={ref}
      className="sticky top-0 flex justify-around py-4 z-20 bg-gradient-to-b from-[--background-color]"
    >
      <a
        className="cursor-pointer"
        onClick={() => scrollToProgress(0)}
        href="#home"
      >
        Home
      </a>
      <a
        className="cursor-pointer"
        onClick={() => scrollToProgress(homeFrac)}
        href="#about"
      >
        About
      </a>
      <a className="cursor-pointer" href="#projects">
        Projects
      </a>
      <a className="cursor-pointer" href="#career">
        Career
      </a>
    </div>
  );
});

const scrollToProgress = (progress: number) => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollY = scrollHeight * progress;
  window.scrollTo({ top: scrollY, behavior: "smooth" });
};

export default Header;
