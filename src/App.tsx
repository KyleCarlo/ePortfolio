import Header from "./components/Header";
import StandingImage from "/standing.png";

export default function App() {
  return (
    <>
      <Header />
      <section className="" id="home">
        <div className="flex">
          <div className="w-1/2 flex justify-end">
            <img
              src={StandingImage}
              alt="My Picture"
              className="max-h-[85dvh]"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start">
            <div className="text-center h-full flex flex-col justify-center">
              <h1 className="text-[--orange-highlight] text-[2rem] font-bold">
                KYLE CARLO C. LASALA
              </h1>
              <p>Computer Science Student | Aspiring Researcher</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
