import { forwardRef } from "react";

const Header = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="sticky top-0 flex justify-around py-4 z-20">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#career">Career</a>
    </div>
  );
});

export default Header;
