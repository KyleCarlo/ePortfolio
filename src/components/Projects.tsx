import Card from "./Card";
import { projectDetails } from "../utils";

export default function Projects() {
  return (
    <div className="h-[1800px] flex justify-center pt-20" id="projects">
      {projectDetails.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          topic={project.topic}
          toolStack={project.toolStack}
          description={project.description}
          image={project.image}
          collaborators={project.collaborators}
          contacts={project.contacts}
          ghlink={project.ghlink}
          prevlink={project.prevlink}
        />
      ))}
    </div>
  );
}
