"use client";

import Image from "next/image";
import { StarFour } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = ["Hello!", "Ciao!", "Bonjour!", "Hola!", "Hallo!", "Hej!", "Tere!", "Merhaba!"] as const;

export function HeroPortrait() {
  const reduceMotion = useReducedMotion();
  const [activeGreeting, setActiveGreeting] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => setActiveGreeting(current => (current + 1) % greetings.length), 3200);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <motion.div className="hero-portrait" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: -5 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <StarFour weight="fill" className="portrait-spark spark-top" aria-hidden="true" />
      <StarFour weight="fill" className="portrait-spark spark-bottom" aria-hidden="true" />
      <div className="portrait-window">
        <Image src="/images/andrea-picture-hero.jpg" alt="Portrait of Andrea Milan" fill priority fetchPriority="high" className="object-cover object-top" sizes="(max-width: 600px) 76vw, (max-width: 1000px) 340px, 400px" />
      </div>
      <div className="portrait-greeting" aria-hidden="true">
        {reduceMotion ? <span>Hello!</span> : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={greetings[activeGreeting]} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.24 }}>{greetings[activeGreeting]}</motion.span>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}
