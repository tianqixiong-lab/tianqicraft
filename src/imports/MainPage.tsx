import svgPaths from "./svg-1huywewlc3";

function Content() {
  return (
    <div className="absolute contents left-[38px] text-black top-[295px]" data-name="content">
      <p className="absolute css-4hzbpn font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[180px] top-[295px] w-[584px]">Tianqi Xiong</p>
      <p className="absolute css-4hzbpn font-['Dosis:Regular',sans-serif] font-normal leading-[normal] left-[837px] text-[24px] top-[535px] w-[376px]">{`is an interaction designer works at the intersection of technology and art,  trying to add a little sparkling to the world.`}</p>
    </div>
  );
}

function Loop() {
  return (
    <div className="absolute contents left-[268px] top-[765px]" data-name="loop">
      <p className="absolute css-ew64yg font-['Dosis:Regular',sans-serif] font-normal leading-[normal] left-[282px] text-[24px] text-black top-[768px]">BMW Group</p>
      <div className="absolute border border-black border-solid h-[36px] left-[268px] rounded-[15px] top-[765px] w-[136px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[38px] top-[765px]">
      <p className="absolute css-ew64yg font-['Dosis:Regular',sans-serif] font-normal leading-[normal] left-[38px] text-[24px] text-black top-[768px]">Previously work with:</p>
      <Loop />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[879px] top-[768px]">
      <p className="absolute css-ew64yg font-['Dosis:Regular',sans-serif] font-normal leading-[normal] left-[911px] text-[24px] text-black top-[768px]">Currently thesis worker at Eprioc</p>
      <div className="absolute left-[879px] size-[16px] top-[776px]">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g filter="url(#filter0_f_86_1201)" id="Ellipse 2">
              <circle cx="12" cy="12" fill="var(--fill-0, #1A00FF)" fillOpacity="0.2" r="8" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_f_86_1201" width="24" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_86_1201" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[882px] size-[10px] top-[779px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #0033FF)" id="Ellipse 1" r="5" />
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute contents left-[38px] top-[765px]" data-name="content">
      <Group />
      <Group1 />
    </div>
  );
}

function ButtonsScrammbleEffect() {
  return (
    <div className="absolute content-stretch flex font-['Dosis:Medium',sans-serif] font-medium gap-[63px] items-center leading-[normal] right-[67px] text-[24px] text-black top-[27px]" data-name="buttons-scrammble effect">
      <p className="css-ew64yg relative shrink-0">WORK</p>
      <p className="css-ew64yg relative shrink-0">CV</p>
      <p className="css-ew64yg relative shrink-0">CONTACT</p>
    </div>
  );
}

function ButtonHoverTurnBlue() {
  return (
    <div className="absolute inset-[0.44%_94.62%_99.25%_2.97%]" data-name="button-hover turn blue">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8 22">
        <g id="button-hover turn blue">
          <path d={svgPaths.p269fae00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[38px] top-[27px]" data-name="Header">
      <ButtonsScrammbleEffect />
      <ButtonHoverTurnBlue />
    </div>
  );
}

export default function MainPage() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="main page">
      <p className="absolute css-ew64yg font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[50px] text-black top-[911px]">Selected work*</p>
      <p className="absolute css-ew64yg font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[50px] text-black top-[3270px]">Playground</p>
      <p className="absolute css-ew64yg font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[50px] text-black top-[4166px]">Experiences</p>
      <Content />
      <Content1 />
      <div className="absolute bg-[#d9d9d9] h-[455px] left-[404px] top-[1039px] w-[809px]" />
      <div className="absolute bg-[#d9d9d9] h-[455px] left-[404px] top-[1604px] w-[809px]" />
      <div className="absolute bg-[#d9d9d9] h-[455px] left-[404px] top-[2169px] w-[809px]" />
      <div className="absolute bg-[#d9d9d9] h-[455px] left-[404px] top-[2734px] w-[809px]" />
      <div className="absolute bg-[#d9d9d9] h-[319px] left-[38px] top-[3401px] w-[566px]" />
      <div className="absolute bg-[#d9d9d9] h-[319px] left-[38px] top-[3766px] w-[566px]" />
      <div className="absolute bg-[#d9d9d9] h-[319px] left-[647px] top-[3401px] w-[566px]" />
      <div className="absolute bg-[#d9d9d9] h-[319px] left-[647px] top-[3766px] w-[566px]" />
      <Header />
      <div className="absolute font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[180px] text-black top-[6632px] w-[746px]">
        <p className="css-4hzbpn mb-0">Create</p>
        <p className="css-4hzbpn">Together</p>
      </div>
    </div>
  );
}