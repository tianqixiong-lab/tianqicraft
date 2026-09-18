import { motion } from 'motion/react';
import contextImage from '../assets/where-control-softens-context.png';
import weakMachineImage from '../assets/where-control-softens-weak-machine.png';
import modelOneImage from '../assets/where-control-softens-model-1.png';
import modelTwoImage from '../assets/where-control-softens-model-2.png';
import modelThreeImage from '../assets/where-control-softens-model-3.png';
import hapticSurfaceImage from '../assets/where-control-softens-haptic-surface.png';
import refusingButtonVideo from '../assets/where-control-softens-refusing-button.mp4';
import machineMemoryVideo from '../assets/where-control-softens-machine-memory.mp4';

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

export function WhereControlSoftensDetail() {
  return (
    <div className="flex flex-col gap-16">
      <div className="case-study-section">
        <div>
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            01 // CONTEXT
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              As mining moves toward zero-entry operations, operators are increasingly separated from the machines they control.
            </p>
            <p>
              Distance improves safety, but it also removes sensory cues such as sound, vibration, resistance and physical contact — cues that once helped operators understand what a machine was doing.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={contextImage}
              alt="Remote mining operators separated from on-board sensory cues"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="case-study-section">
        <div>
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            02 // WEAK MACHINE
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              Automation often presents machines as certain, seamless and self-sufficient.
            </p>
            <p>
              I explored an alternative: a Weak Machine that reveals its limits and uncertainty, leaving space for human interpretation and negotiation.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={weakMachineImage}
              alt="Weak machine diagram showing uncertainty between on-board and remote operation"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="case-study-section">
        <div>
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            03 // INTERACTION MODELS
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              I translated the idea of a Weak Machine into three physical–digital interaction models, each exploring a different way for operators to perceive, understand and negotiate with automated machines.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={modelOneImage}
              alt="Interaction model 01 perceive haptic surface"
              className="w-full object-cover"
            />
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={modelTwoImage}
              alt="Interaction model 02 understand machine memory"
              className="w-full object-cover"
            />
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={modelThreeImage}
              alt="Interaction model 03 negotiate refusing button"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="case-study-section">
        <div>
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            04 // NEGOTIATE
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              The Refusing Button gives machine uncertainty a physical form.
            </p>
            <p>
              Through OK, MAYBE and NO, the control becomes less willing to accept an action as confidence decreases.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <video
              src={refusingButtonVideo}
              className="w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </div>
      </div>

      <div className="case-study-section">
        <div>
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            05 // UNDERSTAND
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              Machine Memory turns recent machine activity into something that can be physically revisited.
            </p>
            <p>
              Sliding backwards through time lets operators retrace recent events, while haptic cues draw attention to significant moments.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <video
              src={machineMemoryVideo}
              className="w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </div>
      </div>

      <div className="case-study-section">
        <div>
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            06 // PERCEIVE
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              Haptic Surface translates machine–material contact into tactile feedback, allowing remote operators to feel differences in what the machine encounters.
            </p>
            <p>
              Sounds generated by different material interactions are captured through a microphone, classified by an audio recognition model, and mapped to distinct LRA vibration patterns that are reproduced through the surface.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={hapticSurfaceImage}
              alt="Haptic surface system diagram with microphone, audio classification and haptics"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
