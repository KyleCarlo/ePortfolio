import { Qubit } from "./Spinner";
import { useState } from "react";
import { Email, Github, LinkedIn } from "./SVG";
import { motion } from "motion/react";
import { email } from "../utils";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwppaqqa");
  // const sendEmail = () => {};
  if (state.succeeded) {
    console.log("success");
  }
  return (
    <div id="contact" className="flex justify-evenly mb-12 px-20 h-[90dvh]">
      <div className="flex flex-col flex-[0_0_50%] justify-center items-center space-y-4">
        <h1 className="font-bold text-[--orange-highlight] text-xl">
          Connect with Me!
        </h1>
        <div className="flex justify-around p-4 space-x-12">
          <a
            className="w-[48px] h-[46px]"
            href="https://github.com/KyleCarlo"
            target="_blank"
          >
            <Github color="white" />
          </a>
          <a
            className="w-[46px] h-[46px]"
            href="https://www.linkedin.com/in/kylecarlo/"
            target="_blank"
          >
            <LinkedIn color="white" />
          </a>
          <a
            className="w-[57px] h-[46px]"
            href={`mailto: ${email}`}
            target="_blank"
          >
            <Email color="white" />
          </a>
        </div>
        <p className="relative w-[65%] text-justify">
          Got a question, an idea, or just want to chat? Don’t be shy—drop me a
          line, and let’s make something amazing happen!
        </p>
        <div className="w-40 h-40">
          <Qubit superPosition={true} />
        </div>
        <p className="w-[65%] text-center">
          Qubit is in superposition. You won't know the outcome until you send
          me a message. 😉
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col flex-[0_0_50%] justify-center space-y-2"
      >
        <Input id="email" label="Email" type="input" />
        <Input id="subject" label="Subject" type="input" />
        <Input
          id="message"
          label="Message"
          type="textarea"
          height="h-[200px]"
        />
        <div className="flex justify-center">
          <motion.button
            type="submit"
            className="w-3/5 bg-[--blue] text-white font-bold rounded-md p-2"
            whileHover={{
              backgroundColor: "var(--blue-highlight)",
            }}
          >
            Send
          </motion.button>
        </div>
      </form>
    </div>
  );
}

function Input({
  id,
  label,
  type,
  height,
}: {
  id: string;
  label: string;
  type: "input" | "textarea";
  height?: string;
}) {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <label htmlFor="name" className="text-sm pl-2 pb-1 w-3/5">
        {label}
      </label>
      {type === "input" ? (
        <input
          autoComplete="off"
          autoSave="off"
          type="text"
          className="w-3/5 rounded-md bg-[--tertiary-color] border-2 border-[--secondary-color] p-2 active:border-[--blue] focus:border-[--blue] shadow-sm shadow-[--blue] focus:outline-none"
          id={id}
          name={id}
        />
      ) : (
        <div
          className={`w-3/5 rounded-md bg-[--tertiary-color] border-2 focus:outline-none shadow-sm shadow-[--blue] ${height} ${
            active ? "border-[--blue]" : "border-[--secondary-color]"
          }`}
        >
          <textarea
            id={id}
            name={id}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            className="resize-none w-full h-full p-2 bg-transparent outline-none overflow-y-hidden"
          ></textarea>
        </div>
      )}
    </div>
  );
}
