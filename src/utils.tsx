export const scrollToProgress = (progress: number) => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollY = scrollHeight * progress;
  window.scrollTo({ top: scrollY, behavior: "smooth" });
};

export const projectDetails = [
  {
    title: "Deterministic Pushdown Automata (DPDA)",
    topics: ["Automata"],
    toolStack: ["JS"],
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
    title: "OS Scheduler and Memory Management Simulation",
    topics: ["OS"],
    toolStack: ["C++"],
    description:
      "Implemented a simulation of an Operating System's scheduler and memory management system.",
    image: "/OPESY.png",
    collaborators: ["Alyanna Cabrera", "Robert Encinas", "Monica Manlises"],
    contacts: [
      "https://github.com/alyannacabrera",
      "https://github.com/RobertJoachimEncinas",
      "https://github.com/mmonm17",
    ],
    ghlink: "https://github.com/RobertJoachimEncinas/CSOPESY",
  },
  {
    title: "ETL and DB Concurrency-Recovery Simulation",
    topics: ["DB", "Viz"],
    toolStack: ["JS", "Python", "SQL"],
    description:
      "Implemented an ETL from different data sources, recovery for possible failure of distributed DB system, and handling of concurrency issues.",
    image: "/DB-Concurrency-Recovery.png",
    collaborators: ["Sealtiel Dy", "Camron Ong", "Monica Manlises"],
    contacts: [
      "https://github.com/SealTheTiel",
      "https://github.com/fir3yice",
      "https://github.com/mmonm17",
    ],
    ghlink:
      "https://github.com/KyleCarlo/DB-Concurrency-and-Recovery-Simulation",
  },
  {
    title: "IEEE Decimal-64 FP Converter",
    topics: ["Computer Architecture"],
    toolStack: ["JS"],
    description:
      "Web application that simulates the conversion of floating-point numbers to 64 bits based on the IEEE 754 standard.",
    image: "/IEEE-754.png",
    collaborators: ["Robert Encinas", "Monica Manlises"],
    contacts: [
      "https://github.com/RobertJoachimEncinas",
      "https://github.com/mmonm17",
    ],
    ghlink: "https://github.com/KyleCarlo/IEEE-Dec64-Converter",
    prevlink: "https://kylecarlo.github.io/IEEE-Dec64-Converter/",
  },
  {
    title: "Medical Logic-Based Chatbot",
    topics: ["AI"],
    toolStack: ["Prolog"],
    description:
      "Developed a chatbot that can diagnose diseases based on symptoms provided by the user and the knowledge base.",
    image: "/Chatbot.png",
    collaborators: ["Bianca Cuales", "Gabriel Bacosa", "Alyza Reynado"],
    contacts: ["https://github.com/bcuales", "", ""],
    ghlink: "https://github.com/KyleCarlo/Logic-Based-Chatbot",
  },
  {
    title: "Comparative Analysis of C and x86-64",
    topics: ["Assembly"],
    toolStack: ["C", "x86-64"],
    description:
      "Analyzed the differences between execution time of C and x86-64 assembly languages.",
    image: "/x86vsC.png",
    collaborators: ["Monica Manlises"],
    contacts: ["https://github.com/mmonm17"],
    ghlink: "https://github.com/KyleCarlo/C_vs_x86-64",
  },
  {
    title: "AnimoEats",
    topics: ["Web"],
    toolStack: ["ExpressJS", "MongoDB"],
    description:
      "Most of the time, students don't know where to eat. AnimoEats is a web application that helps students decide where to eat.",
    image: "/AnimoEats.png",
    collaborators: ["Sebastian Diaz", "Daphne Go", "Monica Manlises"],
    contacts: [
      "https://github.com/bastidiaz",
      "https://github.com/daphnejanelyn",
      "https://github.com/mmonm17",
    ],
    ghlink: "https://github.com/KyleCarlo/AnimoEats",
    prevlink: "https://animoeats.onrender.com/",
  },
  {
    title: "C Trading-Game (GoT Inspired)",
    topics: ["Logic", "Data Structures"],
    toolStack: ["C"],
    description:
      "This is my first C project. I created this project to become proficient in programming. This is inspired by the Game of Thrones series.",
    image: "/GoT.png",
    collaborators: [],
    contacts: [],
    description2: "I created this project individually 🫡",
    ghlink: "https://github.com/KyleCarlo/First-C-based-Mini-Game",
    prevlink: "",
  },
  {
    title: "Fakedex (Pokedex)",
    topics: ["Logic", "Data Structuress"],
    toolStack: ["C"],
    description:
      "This is my second C project. I created this project to become proficient in using data structures. This is inspired by the Pokedex in Pokemon series.",
    image: "/Fakedex.png",
    collaborators: ["Adam Mendoza"],
    contacts: [""],
    ghlink: "https://github.com/KyleCarlo/Fakedex",
    prevlink: "",
  },
  {
    title: "Farming Simulator",
    topics: ["OOP", "Multithread"],
    toolStack: ["Java"],
    description:
      "This is my first Java project. I created this project to become proficient in Object-Oriented Programming and get started with Multithreading.",
    image: "/Farming-Simulator.png",
    collaborators: [],
    contacts: [],
    description2: "I created this project individually 🫡",
    ghlink: "https://github.com/KyleCarlo/Farming-Simulator",
    prevlink: "",
  },
];
