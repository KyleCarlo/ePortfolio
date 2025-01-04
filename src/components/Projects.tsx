import Card from "./Card";
import { projectDetails } from "../utils";

export default function Projects() {
  return (
    <div className="flex flex-wrap justify-evenly pt-20 gap-y-8" id="projects">
      {projectDetails.map((project, index) => (
        <div className="flex-[0_0_33.33%] flex justify-center">
          <Card
            key={index}
            title={project.title}
            topics={project.topics}
            toolStack={project.toolStack}
            description={project.description}
            image={project.image}
            collaborators={project.collaborators}
            contacts={project.contacts}
            ghlink={project.ghlink}
            prevlink={project.prevlink}
          />
        </div>
      ))}
    </div>
  );
}
