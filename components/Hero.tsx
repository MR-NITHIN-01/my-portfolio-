"use client";

import { TbHandClick } from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-16 overflow-hidden pt-24">
      {/* Background Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Background Glow Grid */}
      <div
        className="absolute inset-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] 
        bg-grid-black-100/[0.2] z-0"
      >
        <div
          className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* --- LEFT: Text Content --- */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl space-y-6"
      >
        <p className="uppercase tracking-widest text-xs text-blue-100">
          Unveiling My Portfolio with Next
        </p>

        <TextGenerateEffect
          words="Flowing From Concept to Connections"
          className="text-[38px] md:text-5xl lg:text-6xl font-bold leading-tight"
        />

        <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-xl">
          Hi! I&apos;m <span className="text-purple-400 font-semibold">Nithin Guguloth</span> — a
          passionate Full-Stack Developer who loves transforming creative ideas into real-world
          digital products.
        </p>

        <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
          I blend clean design, efficient code, and strong logic to craft modern web experiences.
          Always learning, building, and pushing the boundaries of what’s possible in web
          development.
        </p>

        <a href="#overview">
          <MagicButton title="Know Me ?" icon={<TbHandClick />} position="right" />
        </a>
      </motion.div>

      {/* --- RIGHT: Animated Profile --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mt-10 lg:mt-0 lg:ml-20 z-10"
      >
        {/* Glow Aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/40 via-blue-500/30 to-transparent blur-3xl animate-pulse"></div>

        {/* Profile Image with Floating Effect */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] border-purple-400 shadow-[0_0_60px_10px_rgba(168,85,247,0.3)]"
        >
          <Image
            src="/WhatsApp Image 2025-11-04 at 17.17.21_ccccc9f4.jpg" // 👈 place your photo inside /public folder
            alt="Nithin Guguloth"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
