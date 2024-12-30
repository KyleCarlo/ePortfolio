import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { BlochSphere, Vector } from "./SVG";

export default function Spinner({ loading }: { loading: boolean }) {
  return (
    <div className="w-dvw h-dvh flex flex-col justify-center items-center space-y-4">
      <div className="w-40 h-40">
        <Qubit superPosition={loading} />
      </div>
      <div className="flex justify-center w-full">
        {loading ? (
          <AnimatePresence>
            <motion.p
              key={"loading"}
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              exit={{ opacity: 0 }}
            >
              Loading...
            </motion.p>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.p
              key={"redirecting"}
              className="absolute min-w-min"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Redirecting...
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

export function Qubit({ superPosition }: { superPosition: boolean }) {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (superPosition) {
        setRotation(Math.random() * 360);
        setScale(Math.random() * 0.5 + 0.5);
      } else {
        setRotation(180);
        setScale(1);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [superPosition]);

  return (
    <div className="w-40">
      <div className="w-[inherit] h-[inherit] absolute">
        <BlochSphere color="#FFF" />
      </div>
      <motion.div
        className={`w-[inherit] h-[inherit] absolute ${
          superPosition ? "blur-sm" : ""
        }`}
        animate={{ rotate: rotation, scale }}
        transition={{ duration: 0, ease: "linear" }}
      >
        <Vector
          color={
            superPosition ? "var(--blue-highlight)" : "var(--orange-highlight)"
          }
        />
      </motion.div>
    </div>
  );
}
