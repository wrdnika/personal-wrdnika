import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { y: "100%" },
    animate: { y: "0%" },
    exit: { y: "-100%" },
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  className,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className="inline-block overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={cn(className, "inline-block")}
          {...framerProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
