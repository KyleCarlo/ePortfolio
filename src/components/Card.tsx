import Badge from "./Badge";

export default function Card({
  title,
  topic,
  toolStack,
  description,
  image,
}: {
  title: string;
  topic: string;
  toolStack: string[];
  description: string;
  image: string;
}) {
  return (
    <div className="border-[--secondary-color] border-[1px] rounded-xl max-h-min">
      <div className="w-[350px] h-[390px] rounded-xl bg-gradient-to-bl from-neutral-950 from-5% via-neutral-900 to-neutral-950 to-95% via-60%">
        {/* IMAGE CONTAINER */}
        <div
          className="w-[350px] bg-white h-[220px] rounded-xl"
          style={{
            backgroundImage: `url(/ePortfolio/${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* TEXT CONTAINER */}
        <div className="px-8 py-3 space-y-1">
          <h1 className="font-bold text-xl leading-tight">{title}</h1>
          <div className="flex space-x-2">
            <Badge text={topic} color="orange" />
            {toolStack.map((tool, index) => (
              <Badge key={index} text={tool} color="blue" />
            ))}
          </div>
          <p className="text-sm text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}
