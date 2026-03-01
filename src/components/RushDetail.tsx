import { motion } from 'motion/react';

// Figma-imported images
import imgImage25 from "figma:asset/9e0c07756d55ba164523c5bad35927e2bb73e58c.png";
import imgImage28 from "figma:asset/a7ed577762b94810fa89eba6f9b23d2bf7a68e65.png";
import imgImage29 from "figma:asset/e5060de7c4307f787290c37380964d00cacc4271.png";
import imgImage30 from "figma:asset/34f82386cddb3f60efdac5ed168727f084fd7654.png";
import imgImage31 from "figma:asset/a0e774215adca01b2445b18b47a491f9e3e1ed8e.png";
import imgImage32 from "figma:asset/839da9d3ce7f9b20198d6edd719375daa1646915.png";
import imgImage33 from "figma:asset/e4c9b27e5d692bf1fe0e3a9333ad3007377496f3.png";
import imgImage34 from "figma:asset/1eaf76d717fa2914e279abea3d817c92aa91a64c.png";
import imgImage35 from "figma:asset/62dfe1943b3fbf4ea0d0a1a4062f6ad2e5001401.png";
import imgSound1 from "figma:asset/61595b63263adea1c8259a61291bc0863736f33b.png";
import imgRealTimeScan from "figma:asset/c122f0d5d774f8624d833cbeb5da524122fc15e9.png";
import imgLogoAnimation from "figma:asset/7bddaf5165e714a5b94d71c081e1f9d2034b207b.png";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

export function RushDetail() {
  return (
    <div className="flex flex-col gap-16">

      {/* ── 01 // CONTEXT ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            01 // Context
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-6">
          {/* Starting point */}
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
            Starting point
          </motion.h4>
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              Drowning has become the 3rd unintentional death cause in the world. According to data from WHO, 37200 people die from drowning every year, which means 42 people die every hour per day.
            </p>
            <p>
              After desk research, we mapped out various time period when a person is drowning, starting from pre-event to afterwards.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgImage25} alt="Drowning research timeline" className="w-full object-cover" />
          </motion.div>

          {/* The challenge */}
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium mt-6">
            The Challenge
          </motion.h4>
          <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
            HOW MIGHT WE enable drowning people to communicate with lifeguards and survive in such short time emergency with easy access and understanding of important information?
          </motion.p>
        </div>
      </div>

      {/* ── 02 // IDEATION ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            02 // Ideation
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-10">
          {/* Definition */}
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
            Definition
          </motion.h4>
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              After brainstorming about the function of our products, we decided that our device should aim for low-tech, portable and easy to activate.
            </p>
            <p>
              Then we started to prototype on both physical and digital form of our product.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgImage28} alt="Brainstorming and ideation" className="w-full object-cover" />
          </motion.div>

          {/* User journey */}
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium mt-6">
            User journey
          </motion.h4>
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              To ensure seamless integration into the beach environment, the device doubles as a secure locker key.
            </p>
            <p>
              For safety, it features dual-trigger protection: manual SOS activation for immediate help, and continuous biometric monitoring that automatically alerts lifeguards to physiological distress or emergencies.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-4 w-full">
            <img src={imgImage29} alt="User journey scenario 1" className="w-full object-cover" />
            <img src={imgImage30} alt="User journey scenario 2" className="w-full object-cover" />
          </motion.div>

          {/* Lifeguard interface description */}
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              Lifeguards utilize a precise mapping interface to oversee beach safety.
            </p>
            <p>
              The system instantly flags entry into restricted areas or potential emergency, providing response plan to ensure rapid and effective rescue operations.
            </p>
          </motion.div>

          {/* User test */}
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium mt-6">
            User test
          </motion.h4>
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              We first test different prototypes with potential user to validate and improve our concept.
            </p>
            <p>
              Then we test our selected prototype underwater to get a better understanding of the usage scenario and environment.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgImage31} alt="User testing prototypes" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* ── 03 // DESIGN ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            03 // Design
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-10">
          {/* Rush naming & logo */}
          <motion.h4 {...fadeUp} className="font-['DM_Sans'] text-2xl font-medium">
            Rush
          </motion.h4>
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              Considering our device's function and it's nature of emergency, we named the product RUSH and created LOGO for it.
            </p>
            <p>
              Origins from Chinese character '冲' which means toward, we changed the form of this character to the wristband version of RUSH.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full flex justify-center">
            <img src={imgLogoAnimation} alt="RUSH logo animation" className="h-[200px] object-contain" />
          </motion.div>

          {/* Emergency activation */}
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              In an emergency, swimmers can instantly alert lifeguards by simply pulling the device's top cap to trigger a distress signal.
            </p>
            <p>
              If the user is incapacitated, the system identifies irregular vital signs and immediately notifies the rescue team, ensuring response even without manual activation.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgSound1} alt="RUSH device activation" className="w-full object-cover" />
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgImage35} alt="RUSH device details" className="w-full object-cover" />
          </motion.div>

          {/* Lifeguard interface */}
          <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
            For lifeguards, the interface shows precise location of every person wearing this device and the safe area boundaries in the sea.
          </motion.p>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgImage32} alt="Lifeguard mapping interface" className="w-full object-cover" />
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgRealTimeScan} alt="Real-time scan interface" className="w-full object-cover" />
          </motion.div>

          {/* AR scan */}
          <motion.div {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4">
            <p>
              During emergencies, lifeguards can activate an AR-enhanced scan to instantly locate victims.
            </p>
            <p>
              The interface overlays critical data—including time in distress and predicted drift—while highlighting the fastest rescue route and the optimal water entry point.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgImage33} alt="AR rescue interface" className="w-full object-cover" />
          </motion.div>

          {/* Versatile wearable */}
          <motion.p {...fadeUp} className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
            RUSH can be more than a wrist band. By using the clip on its back, you can place it also on everywhere on your clothes.
          </motion.p>
          <motion.div {...fadeUp} className="w-full">
            <img src={imgImage34} alt="RUSH worn on clothes" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}