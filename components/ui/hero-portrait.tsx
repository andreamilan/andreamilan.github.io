"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroPortrait() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reduceMotion ? {} : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[18.5rem] sm:max-w-[20rem] lg:max-w-[22.5rem]"
    >
      <div className="absolute -inset-3 rounded-[2.4rem] border border-[rgba(246,241,232,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(246,241,232,0.1)] bg-[rgba(255,255,255,0.03)] shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
        <div className="relative aspect-[4/5]">
          <Image
            src="/images/andrea-picture.png"
            alt="Portrait of Andrea Milan"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 280px, 352px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,15,25,0)_50%,rgba(17,15,25,0.26)_100%)]" />
        </div>
      </div>
      <div className="absolute -bottom-4 left-4 rounded-full border border-[rgba(246,241,232,0.12)] bg-[rgba(17,15,25,0.82)] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--text-soft)] shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-md">
        Milan, Italy
      </div>
    </motion.div>
  );
}
