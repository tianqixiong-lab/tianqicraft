import { motion } from 'motion/react';
import { memo } from 'react';

interface ExperienceItem {
  type: 'Work' | 'Education' | 'Award' | 'Exhibit';
  role: string;
  organization: string;
  period: string;
  description?: string;
}

const experiences: ExperienceItem[] = [
  // Work
  {
    type: 'Work',
    role: 'Thesis Worker',
    organization: 'Epiroc',
    period: '2026 - Present',
    description: 'Explore how interaction design can soften the relationship between humans and automated mining systems; Design for human-in-the-loop situation;',
  },
  {
    type: 'Work',
    role: 'HMI Design Intern',
    organization: 'BMW Group',
    period: '2025 - 2026',
    description: 'Design & Prototype in-car central display interfaces; Conduct competitive benchmarking; Lead conceptual explorations of future scenarios;',
  },  
  {
    type: 'Work',
    role: 'UX Design Intern',
    organization: 'Volvo Cars',
    period: '2025',
    description: 'Design & refine DIM to ensure clarity and seamless information delivery; Conduct internal & external usability test; Optimize interaction logic and information hierarchy;',
  },
  {
    type: 'Work',
    role: 'UX Design Intern',
    organization: 'Cyclone Robotics',
    period: '2022 - 2023',
    description: 'Design core products’ interfaces, responsible for process from strategy to execution; Assist in usability test and information architecture;',
  },
  {
    type: 'Work',
    role: 'Industrial Design Intern',
    organization: 'HOTO Tools',
    period: '2022',
    description: 'Lead stool structure course and physical prototyping; Guide students in structural design, iterative prototyping, and feasibility refinement.',
  },
  // Education
  {
    type: 'Education',
    role: 'MFA, Interaction Design',
    organization: 'Umeå Institute of Design',
    period: '2023 - 2026',
  },
  {
    type: 'Education',
    role: 'BEng, Industrial Design',
    organization: 'Tongji University',
    period: '2019 - 2023',
  },
  // Awards
  {
    type: 'Award',
    role: 'Core77 Design Awards',
    organization: 'Core77 Design Awards',
    period: 'Student Runner Up',
  },
  {
    type: 'Award',
    role: 'UN International Student Conference',
    organization: 'UN International Student Conference on Sustainability ',
    period: 'First Prize',
  },
  {
    type: 'Award',
    role: 'British Ecology Design',
    organization: 'British Ecology Design',
    period: 'Silver Prize',
  },
  {
    type: 'Award',
    role: 'D&I GAC In-Curation Camp',
    organization: 'British Ecology Design',
    period: 'First Prize',
  },
  {
    type: 'Award',
    role: 'Shanghai ThinkYouth Competition',
    organization: 'British Ecology Design',
    period: 'First Prize',
  },
  // Exhibits
  {
    type: 'Exhibit',
    role: 'Waag Future Lab',
    organization: 'Umeå Institute of Design',
    period: '2025',
  },
  {
    type: 'Exhibit',
    role: 'Dutch Design Week',
    organization: 'Tongji Design Week',
    period: '2024',
  },
  {
    type: 'Exhibit',
    role: 'World’s Design Capital Conference',
    organization: 'Tongji Design Week',
    period: '2022',
  },
  {
    type: 'Exhibit',
    role: 'Surrounding Tongji Design Week',
    organization: 'Tongji Design Week',
    period: '2021',
  },
  {
    type: 'Exhibit',
    role: 'Yuz Art Museum',
    organization: 'Tongji Design Week',
    period: '2021',
  },
];

// Pre-filter experiences to avoid recalculation on every render
const works = experiences.filter(e => e.type === 'Work');
const educations = experiences.filter(e => e.type === 'Education');
const awards = experiences.filter(e => e.type === 'Award');
const exhibits = experiences.filter(e => e.type === 'Exhibit');

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-[#f5f5f5] min-h-screen">
      <div className="w-full px-4 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Redaction_50'] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-black mb-20 sm:mb-32"
        >
          Experiences
        </motion.h2>

        <div className="flex flex-col gap-24 sm:gap-32">
           <ExperienceSection title="WORK" items={works} />
           <ExperienceSection title="EDUCATION" items={educations} />
           <ExperienceSection title="AWARDS" items={awards} />
           <ExperienceSection title="EXHIBITS" items={exhibits} />
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({ title, items }: { title: string, items: ExperienceItem[] }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 border-t border-black/30 pt-8 lg:pt-0 lg:border-t-0">
      {/* Section Title - Sticky on Desktop */}
      <div className="lg:w-1/4 shrink-0">
        <div className="lg:sticky lg:top-32 lg:border-t lg:border-black/30 lg:pt-4 inline-block">
          <h3 className="font-['IBM_Plex_Mono'] text-lg sm:text-xl font-light tracking-tight text-black/50">
            {title}
          </h3>
        </div>
      </div>

      {/* Items List */}
      <div className="lg:w-3/4 flex flex-col lg:border-t-0">
        {items.map((item, index) => (
          <ExperienceRow key={index} item={item} isLast={index === items.length - 1} />
        ))}
      </div>
    </div>
  );
}

const ExperienceRow = memo(function ExperienceRow({ item, isLast }: { item: ExperienceItem; isLast: boolean }) {
  const showOrganization = item.type !== 'Award' && item.type !== 'Exhibit';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative w-full border-t border-black/30 ${isLast ? 'border-b' : ''} group`}
    >
      <div className="relative w-full py-6 sm:py-8 px-2 sm:px-6 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-0">
        {/* Left: Role & Org */}
        <div className="flex flex-col gap-2 w-full md:w-2/3">
           <h4 className="font-['DM_Sans'] text-xl sm:text-2xl font-normal leading-tight">
             {item.role}
           </h4>
           {showOrganization && (
             <div className="font-['IBM_Plex_Mono'] text-sm opacity-60">
               {item.organization}
             </div>
           )}
           {item.description && (
             <p className="font-['DM_Sans'] text-sm sm:text-base mt-2 opacity-70 max-w-xl">
               {item.description}
             </p>
           )}
        </div>

        {/* Right: Period */}
        <div className="flex items-start justify-start md:justify-end w-full md:w-1/3 shrink-0 pt-1">
          <span className="font-['IBM_Plex_Mono'] text-sm tracking-wide opacity-50">
            {item.period}
          </span>
        </div>
      </div>
    </motion.div>
  );
});