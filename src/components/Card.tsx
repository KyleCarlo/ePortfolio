export default function Card() {
  return (
    <div className="w-[350px] h-[390px] bg-red-600 rounded-xl">
      {/* IMAGE CONTAINER */}
      <div className="w-[350px] bg-white h-[220px] rounded-xl"></div>
      {/* TEXT CONTAINER */}
      <div className="px-8 py-3 space-y-1">
        <h1 className="font-bold text-xl leading-tight">
          Deterministic Pushdown Automata
        </h1>
        <p className="text-sm text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ad nulla
          nam ab vitae.
        </p>
      </div>
    </div>
  );
}
