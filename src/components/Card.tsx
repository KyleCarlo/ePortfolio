import Badge from "./Badge";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react";
import { Github, Link, Person, More } from "./SVG";
import { useState } from "react";

export default function Card({
  title,
  topics,
  toolStack,
  description,
  image,
  collaborators,
  contacts,
  ghlink,
  prevlink,
}: {
  title: string;
  topics: string[];
  toolStack: string[];
  description: string;
  image: string;
  collaborators: string[];
  contacts: string[];
  ghlink: string | undefined;
  prevlink: string | undefined;
}) {
  const [front, setFront] = useState(true);
  const rotateY = useMotionValue(0);

  useMotionValueEvent(rotateY, "change", (latest) => {
    if (latest >= 90) {
      setFront(false);
    } else {
      setFront(true);
    }
  });

  return (
    <motion.div
      className="perspective-1600 perspective-origin-top w-[350px] h-[390px] flex justify-center"
      onClick={() => {
        animate(rotateY, rotateY.get() == 0 ? 180 : 0, {
          duration: 0.5,
        });
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* FRONT */}
      <motion.div
        className={`w-[350px] h-[390px] flex justify-center items-center rounded-xl absolute overflow-hidden ${
          front ? "z-10" : "hidden"
        }`}
        style={{ rotateY }}
      >
        {/* HIGHLIGHT */}
        <motion.div
          className="absolute bg-gradient-to-r from-transparent from-25% via-[--orange-highlight] to-transparent to-75% w-[inherit] h-[200%] rounded-xl"
          animate={{ rotateZ: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            type: "tween",
            ease: "linear",
          }}
        />
        <div className="absolute w-[99%] h-[99%] rounded-xl bg-gradient-to-bl from-neutral-950 from-5% via-neutral-900 to-neutral-950 to-95% via-60%">
          {/* IMAGE CONTAINER */}
          <div
            className="w-full bg-white h-1/2 rounded-xl transition-all duration-1000"
            style={{
              backgroundImage: `url(/ePortfolio/${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* DETAILS */}
          <div className="px-8 py-3 space-y-1">
            <h1 className="font-bold text-xl leading-tight">{title}</h1>
            <div className="flex space-x-1">
              {topics.map((topic, index) => (
                <Badge key={index} text={topic} color="orange" />
              ))}
              {toolStack.map((tool, index) => (
                <Badge key={index} text={tool} color="blue" />
              ))}
            </div>
            <p className="text-sm text-justify">{description}</p>
          </div>
        </div>
        <div className="absolute space-x-1 bottom-0 right-0 hover:cursor-pointer mr-2 mb-2">
          <div className="w-5">
            <More color="white" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className={`absolute rounded-xl w-[350px] h-[390px] flex justify-center items-center overflow-hidden ${
          front ? "hidden" : ""
        }`}
        style={{ rotateY }}
      >
        {/* BACK HIGHLIGHT */}
        <motion.div
          className="absolute bg-gradient-to-r from-transparent from-25% via-[--orange-highlight] to-transparent to-75% w-[inherit] h-[200%] rounded-xl"
          animate={{ rotateZ: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            type: "tween",
            ease: "linear",
          }}
        />
        <div className="w-[99%] h-[99%] transform rotate-y-180 rounded-xl bg-gradient-to-bl from-neutral-950 from-5% via-neutral-900 to-neutral-950 to-95% via-50% flex flex-col justify-evenly items-center">
          <div className="flex items-center justify-center space-x-12">
            {ghlink && (
              <div className="w-1/5 flex flex-col justify-center items-center space-y-2">
                <a
                  href={ghlink}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  <Github color="white" />
                </a>
                <p>Repo</p>
              </div>
            )}
            {prevlink && (
              <div className="w-1/5 flex flex-col justify-center items-center space-y-2">
                <a
                  href={prevlink}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  <Link color="white" />
                </a>
                <p>Preview</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-2xl font-bold text-[--blue-highlight]">
              Collaborators
            </h1>
            <ul className="space-y-1">
              {collaborators.map((collaborator, index) => (
                <li key={index} className="flex space-x-2">
                  <div className="w-5">
                    <Person color="white" />
                  </div>
                  {contacts[index] != "" ? (
                    <a
                      className="hover:underline underline-offset-2"
                      target="_blank"
                      href={contacts[index]}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {collaborator}
                    </a>
                  ) : (
                    <p>{collaborator}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute space-x-1 bottom-0 right-0 hover:cursor-pointer mr-2 mb-2">
            <div className="w-5 transform rotate-x-40">
              <More color="white" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
