export const scrollToProgress = (progress: number) => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollY = scrollHeight * progress;
  window.scrollTo({ top: scrollY, behavior: "smooth" });
};

export const projectDetails = [
  {
    title: "Deterministic Pushdown Automata",
    topic: "Automata",
    toolStack: ["VanillaJS"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ad nulla nam ab vitae.",
    image: "/DPDA.png",
    collaborators: ["Maria Monica Manlises", "Daphne Janelyn Go"],
    contacts: [
      "https://github.com/mmonm17",
      "https://github.com/daphnejanelyn",
    ],
    ghlink: "",
    prevlink: "",
  },
];
