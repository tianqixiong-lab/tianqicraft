import { motion } from "motion/react";

// Figma-imported images
import imgImage16 from "figma:asset/cc38ae756bb7fa5a7d709f057c915e10dcaf3893.png";
import imgImage17 from "figma:asset/0c105196453e7d683352e630a01a7c121435ccf5.png";
import imgImg55301 from "figma:asset/6e2136644e346bd84be10cfadfa37d39b816ff26.png";
import imgImage18 from "figma:asset/bcccef2cb57968203daffaad0367fa1421c6f49f.png";
import imgImage19 from "figma:asset/6e87e353580f4be83127d2883b1dbe2d8caca9a7.png";
import imgImage20 from "figma:asset/2eb8ba4fe3de773ed5e5b4c33ab26782ebacb85f.png";
import imgImage21 from "figma:asset/ae4e46c32760ea63740a022ae9700326c0fd4071.png";
import imgImage22 from "figma:asset/36fa98c551547551e032352768981edc0fe243fc.png";
import imgImage23 from "figma:asset/383554da7cc9360610a7ab5696e5b155104a30dd.png";
import imgImage24 from "figma:asset/9078c52ad85c257efd4aed96cace3c6fc042bf1f.png";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export function ElfDetail() {
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
          {/* Who is Försäkringskassan? */}
          <motion.h4
            {...fadeUp}
            className="font-['DM_Sans'] text-2xl font-medium"
          >
            Who is Försäkringskassan?
          </motion.h4>
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              It is Sweden's Social Insurance Agency that
              supports individuals financially through key life
              events including illness, parental leave, and
              unemployment.
            </p>
            <p>
              It delivers services such as sickness benefits,
              child support, and housing assistance, helping
              people maintain their well-being.
            </p>
          </motion.div>

          {/* The challenge */}
          <motion.h4
            {...fadeUp}
            className="font-['DM_Sans'] text-2xl font-medium mt-6"
          >
            The Challenge
          </motion.h4>
          <motion.p
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl"
          >
            New immigrants encounter barriers to accessing and
            fully understanding their rights within the
            governmental framework. It's like a transparent
            bubble which they can not enter.
          </motion.p>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={imgImage16}
              alt="Challenge visualization"
              className="w-full object-cover"
            />
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
          {/* Approach */}
          <motion.h4
            {...fadeUp}
            className="font-['DM_Sans'] text-2xl font-medium"
          >
            Approach
          </motion.h4>
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              We began our exploration by engaging with
              individuals from diverse backgrounds, each with
              their own unique experiences and perspectives.
            </p>
            <p>
              Through open conversations and workshops, we
              sought to understand the stories behind their
              interactions with the government.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={imgImage17}
              alt="Research workshops"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Quotes */}
          <motion.p
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl"
          >
            And there's some quotes from them:
          </motion.p>
          <motion.div
            {...fadeUp}
            className="bg-neutral-200 p-8 border-l-4 border-black max-w-3xl"
          >
            <p className="font-['IBM_Plex_Mono',monospace] text-sm italic">
              "I always have questions but I don't know who to
              ask and how to ask"
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="bg-neutral-200 p-8 border-l-4 border-black max-w-3xl"
          >
            <p className="font-['IBM_Plex_Mono',monospace] text-sm italic">
              "It feels like unless I ask what rights I have, I
              will never even get visibility in it"
            </p>
          </motion.div>

          {/* Mapping */}
          <motion.p
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl"
          >
            By mapping personal stories across different life
            stages, we visualized the citizen-government
            relationship and pinpointed critical gaps for
            meaningful dialogue.
          </motion.p>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={imgImg55301}
              alt="Journey mapping"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Key insights */}
          <motion.h4
            {...fadeUp}
            className="font-['DM_Sans'] text-2xl font-medium mt-6"
          >
            Key Insights
          </motion.h4>
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <ol className="list-decimal list-inside flex flex-col gap-4">
              <li>
                The system often feels fragmented, requiring
                interaction with multiple agencies like
                Skatteverket, Arbetsförmedlingen, and CSN.
              </li>
              <li>
                Citizens' understanding of their rights varies
                widely, leading to a lack of trust and
                engagement.
              </li>
              <li>
                Government communication struggles to meet
                diverse language, cultural, and technological
                needs.
              </li>
            </ol>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={imgImage18}
              alt="Key insights diagram"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Iceberg analogy */}
          <motion.p
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl"
          >
            Using an 'iceberg' analogy, we visualized the
            disparity in Swedish society: while integrated
            citizens enjoy a nuanced understanding of their
            rights, first-generation immigrants often remain
            'beneath the surface' due to systemic barriers.
          </motion.p>
        </div>
      </div>

      {/* ── 03 // SOLUTION ── */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4">
          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">
            03 // SOLUTION
          </h3>
        </div>
        <div className="md:w-3/4 flex flex-col gap-10">
          {/* Core question */}
          <motion.h4
            {...fadeUp}
            className="font-['DM_Sans'] text-2xl font-medium"
          >
            Core Question
          </motion.h4>
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              How might we design for transparency, visibility
              and access for first generation immigrants?
            </p>
            <p>How do we make the blur bubble permeable?</p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={imgImage19}
              alt="Core question framework"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Elf */}
          <motion.h4
            {...fadeUp}
            className="font-['DM_Sans'] text-2xl font-medium mt-6"
          >
            Elf
          </motion.h4>
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              A bridge between citizens and the state, Elf is
              designed to simplify complex governmental
              information through every life stage.
            </p>
            <p>
              It empowers individuals by reshaping traditional
              power hierarchies, fostering a more transparent
              relationship between the government and the
              community.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={imgImage20}
              alt="Elf concept overview"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Interaction with Elf */}
          <motion.h4
            {...fadeUp}
            className="font-['DM_Sans'] text-2xl font-medium mt-6"
          >
            Interaction with Elf
          </motion.h4>
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              Elf simplifies government complexity by redefining
              interactions as 'life events.' Whether navigating
              individual needs like sick leave or intersecting
              benefits like parental allowance, Elf proactively
              guides citizens—especially immigrants—through
              every touchpoint.
            </p>
            <p>
              By providing timely notifications and clear
              pathways, Elf makes vital information transparent
              and accessible to everyone.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={imgImage21}
              alt="Elf interaction flow"
              className="w-full object-cover"
            />
          </motion.div>

          {/* 24/7 Support */}
          <motion.h4
            {...fadeUp}
            className="font-['DM_Sans'] text-2xl font-medium mt-6"
          >
            24/7 Support
          </motion.h4>
          <motion.div
            {...fadeUp}
            className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl flex flex-col gap-4"
          >
            <p>
              Elf lives on all your connected devices as a
              passive widget, alerting you only when urgent
              action is needed. At other times, you can activate
              Elf during your moments of check-in in your life.
            </p>
            <p>
              You control Elf's presence in your life, deciding
              how often it appears. Your data remains yours —
              shared information is used solely to provide you
              with accurate access and information.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="w-full">
            <img
              src={imgImage22}
              alt="24/7 support across devices"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Encountering Elf */}
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-4 mt-6"
          >
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              Encountering Elf:
            </p>
            <div className="w-full">
              <img
                src={imgImage23}
                alt="Encountering Elf"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Checking in with Elf */}
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-4 mt-6"
          >
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
              Checking in with Elf:
            </p>
            <div className="w-full">
              <img
                src={imgImage24}
                alt="Checking in with Elf"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}