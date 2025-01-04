export const scrollToProgress = (progress: number) => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollY = scrollHeight * progress;
  window.scrollTo({ top: scrollY, behavior: "smooth" });
};

export const projectDetails = [
  {
    title: "Deterministic Pushdown Automata (DPDA)",
    topic: "Automata",
    toolStack: ["VanillaJS"],
    description:
      "Simulated a Deterministic Pushdown Automaton (DPDA) as part of a project for Automata Theory, a foundational course in Computer Science.",
    image: "/DPDA.png",
    collaborators: ["Monica Manlises", "Daphne Go"],
    contacts: [
      "https://github.com/mmonm17",
      "https://github.com/daphnejanelyn",
    ],
    ghlink: "https://github.com/KyleCarlo/Deterministic-Pushdown-Automata",
    prevlink: "https://kylecarlo.github.io/Deterministic-Pushdown-Automata/",
  },
  {
    title: "ETL and DB Concurrency-Recovery Simulation",
    topic: "Database",
    toolStack: ["ExpressJS", "Python", "SQL"],
    description:
      "Implemented an ETL from different data sources, recovery for possible failure of distributed DB system, and handling of concurrency issues.",
    image: "",
    collaborators: ["Sealtiel Dy", "Camron Ong", "Monica Manlises"],
    contacts: [
      "https://github.com/SealTheTiel",
      "https://github.com/fir3yice",
      "https://github.com/mmonm17",
    ],
    ghlink:
      "https://github.com/KyleCarlo/DB-Concurrency-and-Recovery-Simulation",
  },
];
