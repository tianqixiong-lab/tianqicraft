import { motion } from 'motion/react';

// Figma-imported images
import imgImage8 from "figma:asset/3399a1b9fb319a43b2d3716f652b3dd5f33e06ea.png";
import imgP8EGksTk0YoG3HSrGRaRdJka9G81 from "figma:asset/02c47defe1baa0255c438079e8c2fc27fc408f70.png";
import imgImage7 from "figma:asset/f639654141f95f4aa88e7611a6e5bbe2bc088b69.png";
import imgImage9 from "figma:asset/c1611c5fc27b4338de95e4d1fd8268d4db505743.png";
import imgImage11 from "figma:asset/447196488d15eaa434ae773d0de668ebca67320f.png";
import imgImage12 from "figma:asset/4bdf38b1df58cea450ad190e47a41ba397c85612.png";
import imgImage13 from "figma:asset/961301b632ceb9f0c762fa1a892addd52f6b8941.png";
import imgImage14 from "figma:asset/d8169e15e4019f0abb67517a0fe5d8fdd552449e.png";
import imgImage15 from "figma:asset/5aba3bf604387639218942fc0997a6c3f3169e08.png";
import imgBildschirmFoto from "figma:asset/5a808334b97302f080c85e2871cff317dc44e225.png";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

export function Maxi3DDetail() {
  return (
    <div className="flex flex-col gap-16">

      {/* ── 01 // CONTEXT ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            01 // CONTEXT
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-6">
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
            The Challenge
          </motion.h4>
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              Forestry is vital to Sweden's economy and society, equipment failures in this productivity-driven sector lead to significant losses, making mechanics essential in minimizing downtime.
            </p>
            <p>
              However, the complexity of logging machinery creates high entry and communication barriers for new mechanics. The lack of standardized training and repair solutions further contributes to a labor shortage in this critical role.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgP8EGksTk0YoG3HSrGRaRdJka9G81} alt="Context overview" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* ── 02 // RESEARCH ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            02 // RESEARCH
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-10">
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
            User Insight
          </motion.h4>

          {/* Insight 1 */}
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              <span className="font-semibold">Slow information accessibility: </span>
              Time consuming transition between different platforms, and multiple Log-Ins are needed during mechanics daily routine.
            </p>
            <div className="w-full my-2">
              <img src={imgImage7} alt="Information accessibility analysis" className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Insight 2 */}
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              <span className="font-semibold">Navigation to information unclear: </span>
              Information in the system are not guided in the way a mechanic thinks.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div {...fadeUp} className="bg-neutral-200 p-8 my-2 border-l-4 border-black max-w-3xl">
            <p className="font-['IBM_Plex_Mono',monospace] text-sm italic">
              "I can look into a machine but I can't look into a software."
            </p>
          </motion.div>

          {/* Insight 3 */}
          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              <span className="font-semibold">Experience loss: </span>
              Tons of experience are locked in senior mechanics' heads, and disappear when they retire, leaving junior mechanics without a structured learning framework.
            </p>
            <div className="w-full my-2">
              <img src={imgBildschirmFoto} alt="Experience loss diagram" className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Takeaway */}
          <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
            For each task, mechanics need to put in some comments. But now even if it would need a description, mechanics wrote nothing simply because 'not worth mentioning'.
          </motion.p>
        </div>
      </div>

      {/* ── 03 // IDEATION ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            03 // IDEATION
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-10">
          {/* Definition */}
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
            Definition
          </motion.h4>
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              Our research identified a critical gap: mechanics need a bridge between their physical tools and digital workflows.
            </p>
            <p>
              We aimed to design an intuitive platform that uses AI to capture hands-on experience, transforming raw data into standardized, actionable knowledge.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full my-2">
            <img src={imgImage8} alt="Definition diagram" className="w-full object-cover" />
          </motion.div>

          {/* Attempts */}
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium mt-6">
            Attempts
          </motion.h4>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgImage9} alt="Design attempts and iterations" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* ── 04 // DESIGN ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            04 // DESIGN
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-10">
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
            Introducing Maxi3D
          </motion.h4>
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              Maxi 3D streamlines the transition between the digital and physical worlds for mechanics. It features a 3D digital twin that enables intuitive interactions—such as simple clicks and swipes—to visually indicate issues during senior-level consultations.
            </p>
            <p>
              To ensure no expertise is lost, Maxi 3D integrates AI to capture troubleshooting data from every call, turning individual problem-solving experiences into a permanent, valuable resource for learning.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full my-2">
            <img src={imgImage11} alt="Maxi3D overview" className="w-full object-cover" />
          </motion.div>

          {/* Feature 1 */}
          <motion.div {...fadeUp} className="flex flex-col gap-4 mt-6">
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              1. Map system integrated to take mechanics to machine location.
            </p>
            <div className="w-full">
              <img src={imgImage12} alt="Feature 1 - Map system" className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div {...fadeUp} className="flex flex-col gap-4 mt-6">
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              2. Customizable information visibility.
            </p>
            <div className="w-full">
              <img src={imgImage13} alt="Feature 2 - Customizable visibility" className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div {...fadeUp} className="flex flex-col gap-4 mt-6">
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              3. Digital twin of the machine to help mechanics navigate information and to support collaborative troubleshooting.
            </p>
            <div className="w-full">
              <img src={imgImage14} alt="Feature 3 - Digital twin" className="w-full object-cover" />
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div {...fadeUp} className="flex flex-col gap-4 mt-6">
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              4. Valuable experience stored in every spare part for learning.
            </p>
            <div className="w-full">
              <img src={imgImage15} alt="Feature 4 - Experience storage" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}