import { motion } from 'motion/react';

// Figma-imported images
import imgImage37 from "figma:asset/1c7b7bf9e1d468447f5c5d8e3490f8d0a40da951.png";
import imgImage38 from "figma:asset/387a1441bf4b102a17156285382519c9c45e8a46.png";
import imgImage39 from "figma:asset/ffec8fdaee05f6bfc07b5ea9f24ebe2681f83ccc.png";
import imgImage40 from "figma:asset/7136ee0935207fc8322810ad9c602e6b3c05be6a.png";
import imgImage41 from "figma:asset/9be3b8b6eb47a339efa09c4aa064597d8c0478e4.png";
import imgAdaptableChainsaw from "figma:asset/395b35d97248e32b08f19705470543f05eda5b32.png";
import imgBookDozes from "figma:asset/8e78f6574d17a323bc10356c0b6c41224fcc9e42.png";
import imgCyberFortune from "figma:asset/9aa941d7d5c5c4f59f63a9c401c7d3ec3c6ded59.png";
import imgGoldMiner from "figma:asset/fb5d58b193b3becab2f329c3251e7ab06785492c.png";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

export function OldieDetail() {
  return (
    <div className="flex flex-col gap-16">

      {/* ── 01 // PROTOTYPE ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            01 // Prototype
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-16">

          {/* Adaptable Chainsaw */}
          <div className="flex flex-col gap-6">
            <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
              Adaptable Chainsaw
            </motion.h4>
            <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              Using gyroscope inside Arduino and projector to help people using chainsaw find the right angle to cut a tree.
            </motion.p>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgAdaptableChainsaw} alt="Adaptable Chainsaw" className="w-full object-cover" />
            </motion.div>
          </div>

          {/* Book that dozes */}
          <div className="flex flex-col gap-6">
            <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
              Book that dozes
            </motion.h4>
            <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              Detecting eye movement and connect with GPT, the content appears following people's reading speed. And when people fall asleep it also stops. So you never forget where you last read.
            </motion.p>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgBookDozes} alt="Book that dozes" className="w-full object-cover" />
            </motion.div>
          </div>

          {/* Cyber Fortuneteller */}
          <div className="flex flex-col gap-6">
            <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
              Cyber Fortuneteller
            </motion.h4>
            <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              Combing ML5 gesture model in P5 with Arduino. Detect hand movement to trigger random combination of vague word diction inside and print.
            </motion.p>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgCyberFortune} alt="Cyber Fortuneteller" className="w-full object-cover" />
            </motion.div>
          </div>

          {/* Gold Miner */}
          <div className="flex flex-col gap-6">
            <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
              Gold Miner
            </motion.h4>
            <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              Testing accelerator inside Arduino to control computer game, and mapping accelerating value to ARROW_DOWN.
            </motion.p>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgGoldMiner} alt="Gold Miner" className="w-full object-cover" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── 02 // DESIGN ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            02 // Design
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-16">

          {/* Mobility as Physarum */}
          <div className="flex flex-col gap-6">
            <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
              Mobility as Physarum
            </motion.h4>
            <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
              <p>
                Exploring the tension between mobility and sustainability, we envision a future that moves beyond human dominance.
              </p>
              <p>
                By introducing a 'slime network' as a biological urban mediator, our design enables humans to communicate with nature through specialized devices, balancing transit needs with ecological preservation.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgImage37} alt="Mobility as Physarum" className="w-full object-cover" />
            </motion.div>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgImage38} alt="Mobility as Physarum detail" className="w-full object-cover" />
            </motion.div>
          </div>

          {/* Digital by Design */}
          <div className="flex flex-col gap-6">
            <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
              Digital by Design
            </motion.h4>
            <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              A VR design platform featuring direct volumetric interaction for seamless iteration and high-precision output of complex, controlled forms.
            </motion.p>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgImage39} alt="Digital by Design" className="w-full object-cover" />
            </motion.div>
          </div>

          {/* Bright up! */}
          <div className="flex flex-col gap-6">
            <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
              Bright up!
            </motion.h4>
            <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
              <p>
                This project investigates the intersection of lighting systems and user behavior within the College of Design and Innovation (D&I).
              </p>
              <p>
                By analyzing daily energy patterns, we developed sustainable lighting solutions for the campus, with findings featured in the BiDL publication: 'Living in the College's 1,001 Lights'.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgImage40} alt="Bright up!" className="w-full object-cover" />
            </motion.div>
          </div>

          {/* Nap Nap */}
          <div className="flex flex-col gap-6">
            <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
              Nap Nap
            </motion.h4>
            <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              AI Baby Sleep Management: Redefining family well-being through human-centered design. By leveraging AI to cultivate sleep habits and relieve parental stress, this project demonstrates how smart health technology can move toward the true benefit of human life.
            </motion.p>
            <motion.div {...fadeUp} className="w-full">
              <img src={imgImage41} alt="Nap Nap" className="w-full object-cover" />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
