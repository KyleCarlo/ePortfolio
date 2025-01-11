import { Qubit } from "./Spinner";
import { useState, useEffect, FormEvent } from "react";
import { Email, Github, LinkedIn } from "./SVG";
import { motion } from "motion/react";
import { email } from "../utils";
import { useForm } from "@formspree/react";
import validator from "validator";

export default function Contact() {
  const [superPosition, setSuperPosition] = useState(true);
  const [state, handleSubmit] = useForm("xwppaqqa");
  const [errors, setErrors] = useState<{
    email: string;
    subject: string;
    message: string;
  }>({ email: "", subject: "", message: "" });

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = document.getElementById("email") as HTMLInputElement;
    const subject = document.getElementById("subject") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLTextAreaElement;

    setErrors({
      message: message.value ? "" : "Required",
      subject: subject.value ? "" : "Required",
      email: email.value ? "" : "Required",
    });
    if (!message.value) {
      message.focus();
    }
    if (!subject.value) {
      subject.focus();
    }
    if (!email.value) {
      email.focus();
    }
    if (email.value && !validator.isEmail(email.value)) {
      setErrors({ ...errors, email: "Invalid email" });
      email.focus();
    }
    if (message.value && subject.value && email.value) {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setSuperPosition(false);
    }
  }, [state.succeeded]);

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
          <Qubit superPosition={superPosition} />
        </div>
        <div className="relative w-full h-12 text-center flex justify-center">
          <motion.p
            className="absolute w-[65%] text-center"
            animate={{ opacity: superPosition ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Qubit is in superposition. You won't know the outcome until you send
            me a message. 😉
          </motion.p>
          <motion.p
            className="absolute w-[65%] text-center"
            animate={{ opacity: superPosition ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            Qubit has collapsed to{" "}
            <span className="font-bold text-[var(--orange-highlight)]">
              ∣1⟩
            </span>
            ! Thank you for sending me a message. I'll get back to you as soon
            as I can. 😊
          </motion.p>
        </div>
      </div>
      <motion.form
        onSubmit={formSubmit}
        method="POST"
        className="flex flex-col flex-[0_0_50%] justify-center space-y-2"
        animate={{ opacity: superPosition ? 1 : 0.7 }}
      >
        <Input
          id="email"
          label="Email"
          type="input"
          error={errors["email"]}
          disable={!superPosition || state.submitting}
        />
        <Input
          id="subject"
          label="Subject"
          type="input"
          error={errors["subject"]}
          disable={!superPosition || state.submitting}
        />
        <Input
          id="message"
          label="Message"
          type="textarea"
          height="h-[200px]"
          error={errors["message"]}
          disable={!superPosition || state.submitting}
        />
        <div className="flex justify-center">
          <motion.button
            type="submit"
            disabled={state.submitting || !superPosition}
            className={`w-3/5 bg-[--blue] text-white font-bold rounded-md p-2 ${
              state.submitting || !superPosition
                ? "cursor-not-allowed opacity-80"
                : "cursor-pointer"
            }`}
            whileHover={{
              backgroundColor: "var(--blue-highlight)",
            }}
          >
            {state.submitting
              ? "Sending..."
              : !superPosition
              ? "Message Sent!"
              : "Send"}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}

function Input({
  id,
  label,
  type,
  height,
  error,
  disable,
}: {
  id: string;
  label: string;
  type: "input" | "textarea";
  height?: string;
  error?: string;
  disable: boolean;
}) {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm px-2 pb-1 w-3/5 flex justify-between items-baseline">
        <label htmlFor="name">{label}</label>
        {error && <span className="text-red-500 text-xs italic">{error}</span>}
      </div>
      {type === "input" ? (
        <>
          <input
            autoComplete="off"
            autoSave="off"
            type="text"
            className="w-3/5 rounded-md bg-[--tertiary-color] border-2 border-[--secondary-color] p-2 active:border-[--blue] focus:border-[--blue] shadow-sm shadow-[--blue] focus:outline-none"
            id={id}
            name={id}
            disabled={disable}
          />
        </>
      ) : (
        <div
          className={`w-3/5 rounded-md bg-[--tertiary-color] border-2 focus:outline-none shadow-sm shadow-[--blue] ${height} ${
            active ? "border-[--blue]" : "border-[--secondary-color]"
          }`}
        >
          <textarea
            disabled={disable}
            id={id}
            name={id}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            className="rounded-md resize-none w-full h-full p-2 bg-transparent outline-none overflow-y-hidden"
          ></textarea>
        </div>
      )}
    </div>
  );
}
