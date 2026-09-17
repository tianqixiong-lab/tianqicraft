import { motion } from 'motion/react';

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
              Distance improves safety, but it also removes sound, vibration, resistance and other subtle cues that once helped operators understand what a machine was doing.
            </p>
          </motion.div>
          <motion.p
            {...fadeUp}
            className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest text-black/40"
          >
            More content coming soon.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
