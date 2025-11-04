"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-center">
        My <span className="text-purple">𝐹𝑜𝒸𝓊𝓈 </span>&
        <span className="text-purple"> 𝒮𝓉𝓇𝒶𝓉𝑒𝑔𝒾𝑒𝓈</span>
      </h1>

      {/* Grid layout for 6 cards */}
      <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
        {/* Phase 1 */}
        <Card
          title="Foundation Building"
          icon={<AceternityIcon order="Phase 1" />}
          des="Started with the core of web development—HTML, CSS, and JavaScript—while understanding how communication between client and server powers modern applications. 
          Strengthened the ability to think logically and design structured, accessible interfaces. 
          Built a consistent learning habit focused on clarity, precision, and creative exploration."
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        {/* Phase 2 */}
        <Card
          title="Portfolio Creation"
          icon={<AceternityIcon order="Phase 2" />}
          des="Developed a personal portfolio to showcase creativity and technical depth through design and storytelling. 
          Focused on combining minimal aesthetics with meaningful interactions to communicate personality through visuals. 
          Emphasized strong narrative flow—turning code into identity and style into substance."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>

        {/* Phase 3 */}
        <Card
          title="Collaborative Projects"
          icon={<AceternityIcon order="Phase 3" />}
          des="Worked on team projects to strengthen collaboration, communication, and version control proficiency. 
          Learned how clear coordination enhances productivity and how teamwork transforms ideas into execution. 
          Gained practical insight into managing roles, merging creativity with functionality, and aligning with collective goals."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>

        {/* Phase 4 */}
        <Card
          title="Creative Communication"
          icon={<AceternityIcon order="Phase 4" />}
          des="Focused on transforming technical skills into expressive, communicative designs that engage users. 
          Practiced delivering concepts visually and verbally in a way that connects emotion with technology. 
          Developed storytelling as a skill—where each interface, animation, and detail speaks its own narrative."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-indigo-800 rounded-3xl overflow-hidden"
            colors={[
              [192, 132, 252],
              [165, 180, 252],
            ]}
          />
        </Card>

        {/* Phase 5 */}
        <Card
          title="Real-World Exposure"
          icon={<AceternityIcon order="Phase 5" />}
          des="Gained exposure through hackathons and innovative idea submissions, exploring challenges beyond comfort zones. 
          Learned to turn complex problems into achievable milestones under real constraints. 
          Embraced feedback, adaptability, and creative pressure as part of personal and professional growth."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-amber-800 rounded-3xl overflow-hidden"
            colors={[
              [253, 224, 71],
              [250, 204, 21],
            ]}
          />
        </Card>

        {/* Phase 6 */}
        <Card
          title="Personal Growth & Vision"
          icon={<AceternityIcon order="Phase 6" />}
          des="Evolving through each project with a vision to build purposeful and human-centered digital experiences. 
          Developed strong self-awareness and adaptability to communicate ideas effectively. 
          Aiming to inspire, learn, and collaborate—where growth meets gratitude and design meets meaning."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-800 rounded-3xl overflow-hidden"
            colors={[
              [216, 180, 254],
              [192, 132, 252],
            ]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] w-full max-w-sm mx-auto p-4 relative lg:h-[38rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%]
          translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200
          min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>

        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white
          group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>

        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4
          group-hover/canvas-card:text-white text-center group-hover/canvas-card:-translate-y-2
          transition duration-200"
          style={{
            color: "#E4ECFF",
            textAlign: "justify",
            lineHeight: "1.7",
          }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
          bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
