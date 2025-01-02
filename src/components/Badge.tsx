export default function Badge({
  text,
  color,
}: {
  text: string;
  color: "orange" | "blue";
}) {
  return (
    <span
      className={`${
        color == "orange"
          ? "bg-[--orange] border-[--orange-highlight]"
          : "bg-[--blue] border-[--blue-highlight]"
      } border-2 text-xs rounded-lg px-2 text-white font-medium`}
    >
      {text}
    </span>
  );
}
