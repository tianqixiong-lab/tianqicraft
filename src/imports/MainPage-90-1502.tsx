import svgPaths from "./svg-v2lbv0hea7";

function Div() {
  return (
    <div className="absolute contents left-[40px] not-italic text-black top-[240px]" data-name="div">
      <p className="absolute css-4hzbpn font-['Redaction_50:Italic',sans-serif] leading-none left-[40px] text-[200px] top-[240px] w-[584px]">Tianqi Xiong</p>
      <p className="absolute bottom-[6547px] css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(60%+96px)] text-[24px] translate-y-[100%] w-[376px]">{`is an interaction designer works at the intersection of technology and art,  trying to add a little sparkling to the world.`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex font-['IBM_Plex_Mono:Regular',sans-serif] gap-[40px] items-center leading-[normal] left-[calc(80%-20px)] not-italic text-[20px] text-black top-[31px]">
      <p className="css-ew64yg relative shrink-0">WORK</p>
      <p className="css-ew64yg relative shrink-0">CV</p>
      <p className="css-ew64yg relative shrink-0">CONTACT</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(80%-20px)] top-[31px]">
      <Frame />
    </div>
  );
}

function ButtonHoverTurnBlue() {
  return (
    <div className="absolute inset-[0.47%_94.47%_99.22%_3.13%]" data-name="button-hover turn blue">
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
    <div className="absolute contents left-[40px] top-[31px]" data-name="Header">
      <Group1 />
      <ButtonHoverTurnBlue />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-[calc(60%+130px)] size-[16px] top-[745px]">
      <div className="absolute inset-[-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group 14">
            <g filter="url(#filter0_f_90_1514)" id="Ellipse 2">
              <circle cx="12" cy="12" fill="var(--fill-0, #1A00FF)" fillOpacity="0.2" r="8" />
            </g>
            <circle cx="12" cy="12" fill="var(--fill-0, #0033FF)" id="Ellipse 1" r="5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_f_90_1514" width="24" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_90_1514" stdDeviation="2" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(60%+130px)] top-[741px]">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(60%+162px)] not-italic text-[20px] text-black top-[741px]">Currently thesis worker at Eprioc</p>
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(20%+8px)] top-[729px]">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(30%-90px)] not-italic text-[20px] text-black top-[741px]">BMW Group</p>
      <div className="absolute h-[48px] left-[calc(20%+8px)] top-[729px] w-[175px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175 48">
          <path d={svgPaths.p24be2200} id="Ellipse 3" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[38px] top-[729px]">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[38px] not-italic text-[20px] text-black top-[741px]">Previously work with:</p>
      <Group3 />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute contents left-[38px] top-[729px]" data-name="div">
      <Group />
      <Group4 />
    </div>
  );
}

function WorkSectionHeading() {
  return (
    <div className="absolute contents left-[38px] top-[924px]" data-name="work section heading">
      <p className="absolute css-ew64yg font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[50px] text-black top-[924px]">Selected work*</p>
      <div className="absolute h-0 left-[40px] top-[982px] w-[301px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301 1">
            <line id="Line 2" stroke="var(--stroke-0, black)" x2="301" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="absolute contents left-[111px] top-[1080px]" data-name="project1">
      <div className="absolute bg-[#d9d9d9] h-[596px] left-[calc(50%-0.5px)] top-[1130px] translate-x-[-50%] w-[1057px]" />
      <p className="absolute css-ew64yg font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[114px] not-italic text-[#999] text-[20px] top-[1080px]">01/</p>
    </div>
  );
}

export default function MainPage() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="main page">
      <p className="absolute css-ew64yg font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[50px] text-black top-[3270px]">Playground</p>
      <Div />
      <div className="absolute bg-[#d9d9d9] h-[319px] left-[38px] top-[3401px] w-[566px]" />
      <div className="absolute bg-[#d9d9d9] h-[319px] left-[38px] top-[3766px] w-[566px]" />
      <div className="absolute bg-[#d9d9d9] h-[319px] left-[calc(40%+135px)] top-[3401px] w-[566px]" />
      <div className="absolute bg-[#d9d9d9] h-[319px] left-[calc(40%+135px)] top-[3766px] w-[566px]" />
      <Header />
      <div className="absolute font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[180px] text-black top-[6632px] w-[746px]">
        <p className="css-4hzbpn mb-0">Create</p>
        <p className="css-4hzbpn">Together</p>
      </div>
      <Div1 />
      <WorkSectionHeading />
      <p className="absolute css-ew64yg font-['Redaction_50:Italic',sans-serif] leading-none left-[38px] not-italic text-[50px] text-black top-[4193px]">Experiences</p>
      <Project />
    </div>
  );
}