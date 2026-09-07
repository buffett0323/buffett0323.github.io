import NTU from '../public/logos/ntu.jpeg';
import NTUGEOG from '../public/logos/ntugeog.jpeg';
import NTUIM from '../public/logos/ntuim.png';
import CMU from '../public/logos/cmu.png';

const descriptionData = [
  <>
    I am <b>Jeng-Yue (Buffett) Liu 劉正悦</b>, a Master&rsquo;s student in{' '}
    <a
      href="https://msaii.cs.cmu.edu/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Artificial Intelligence and Innovation
    </a>
    {' '}at the School of Computer Science, <b>Carnegie Mellon University</b>. My work sits at the intersection of
    {' '}<b>efficient machine learning systems</b> and <b>generative models</b>, building models that are not only
    capable, but fast, controllable, and reliable enough to run in the real world.
  </>,
  <>
    At the{' '}
    <a
      href="http://www.apsipa.org/friendlab/Application/FriendLab.asp?user=citimaclab@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Music and Audio Computing Lab, Academia Sinica
    </a>
    , advised by{' '}
    <a
      href="https://www.ee.ntu.edu.tw/profile1.php?id=1090726"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Prof. Yi-Hsuan Yang
    </a>
    {' '}and{' '}
    <a
      href="https://homepage.iis.sinica.edu.tw/pages/lisu/contact_en.html"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Prof. Li Su
    </a>
    , I proposed{' '}
    <a
      href="https://buffett0323.github.io/synthcloner/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      SynthCloner
    </a>
    {' '}(ICASSP 2026), a factorized codec disentangling timbre, content, and ADSR envelope for controllable
    synthesizer preset conversion, cutting multi-scale STFT loss by <b>47.3%</b> over state-of-the-art baselines. I then
    carried that line of work into production at{' '}
    <a
      href="https://neutone.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Neutone Inc.
    </a>
    , hardening their real-time tone-morphing plugin against out-of-distribution audio.
  </>,
  <>
    At CMU, my project work centers on making inference fast and dependable. I built grammar-constrained decoding for
    diffusion language models, along with CUDA sparse-attention kernels that reach a <b>22&ndash;50&times; speedup</b> on
    NVIDIA B200. I also shipped <b>Hypoll</b>, an AI-powered social platform for real-time voice streaming, to iOS.
    Before CMU, I earned dual Bachelor&rsquo;s degrees in Information Management (B.B.A.) and Geography (B.S.) from{' '}
    <b>National Taiwan University</b>, graduating summa cum laude in the top 1% of the school.
  </>,
  <>
    My interests center on:
    <br /><br />
    • Efficient LLM inference &amp; serving systems: constrained decoding, sparse attention, GPU kernels
    <br />
    • Diffusion and discrete-diffusion language models
    <br />
    • Controllable music and audio generation: timbre / content disentanglement
    <br /><br />
  </>,
  <>
    <b>
      I am actively seeking full-time Software Engineering / Machine Learning Engineering roles starting May 2028, and I
      am always glad to connect with engineers and researchers working on similar problems.
    </b>
  </>,
];


const title = (
  <>
    <b>Machine Learning Engineer &amp; Researcher</b>
    <br />
    <span className="text-base text-gray-500 dark:text-gray-400">
      Efficient LLM Systems &middot; Generative Models
    </span>
  </>
);

const educationData = [
  {
    university: "Carnegie Mellon University (CMU)",
    link: "https://msaii.cs.cmu.edu/",
    logo: CMU, // University Logo
    degree_type: "School of Computer Science",
    degree_name: "M.Sc. in Artificial Intelligence and Innovation",
    period: "Aug. 2025 - May. 2028",
    gpa: [
      { label: "Overall GPA", value: "3.88 / 4.0" },
      {label: "Current Coursework", value: "26' Spring: Diffusion and Flow Matching (10-799), Advanced NLP (11-711), LLM Systems (11-868), Intro to Deep Learning (11-785), AI Engineering (11-695), AI Venture Studio (11-681) | 25' Fall: Intro to Machine Learning (10-601), Coding Bootcamp (11-601), Gen AI for Music & Audio (15-798), AI & Future Markets (11-651), Law of Computer Technology (17-762) | 25' Summer: Intro to Computer Systems (15-503)"},
    ],
  },
  {
    university: "National Taiwan University (NTU)",
    link: "https://www.ntu.edu.tw/english/",
    logo: NTU, // University Logo
    degree_type: "Dual Degree:",
    degree_name: "B.B.A. in Information Management & B.S. in Geography",
    period: "Sep. 2020 - Jun. 2025",
    gpa: [
      { label: "Overall GPA", value: "3.95 / 4.3" },
      { label: "CS-related GPA", value: "4.15 / 4.3" },
      { label: "Honors", value: "Summa Cum Laude — top 1% of the school" },
    ],
    departmentLogos: [
      { name: "Information Management", logo: NTUIM }, 
      { name: "Geography", logo: NTUGEOG }, 
    ],
  },
];


const awardData = [
  [
    2025,
    <span>Summa Cum Laude, National Taiwan University</span>,
    'Graduated with the highest Latin honors, awarded to the top 1% of the school.',
  ],
  [
    2024,
    <a
      href="https://drive.google.com/file/d/1FVo-PSHxnAQLR8L9LbPS7BQQo95WQnsF/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      The Phi Tau Phi Scholastic Honor Society of the Republic of China
    </a>,
    'Inducted as an honorary member, recognizing the top 1% of students for outstanding academic performance at the university.',
  ],
  [
    2024,
    <a
      href="https://drive.google.com/file/d/15d4d4eqw26YqYZncAev5_K-zWhZKW77u/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Bachelor Degree Thesis Award <br /> 
      {/* (臺大學士論文獎)  */}
    </a>,
    'Ranked top 3 in department',
  ],
  [
    2023,
    <a
      href="https://drive.google.com/file/d/1FsIT1Eiwh_B4h_gfFSWbUxC5w5FYwJ63/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      NTU Presidential Award <br />
      {/* (臺大校長獎)  */}
    </a>,
    'Ranked 1/49 in department',
  ],
  [
    2023,
    <a
      href="https://drive.google.com/file/d/1p_h9Sx4lywC1N0eLBCFHUAA20uIgoNdz/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      NTU Dean’s List Award <br />
      {/* (臺大書卷獎)  */}
    </a>,
    'Twice',
  ],
];

const contactData = [
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="m-auto inline h-5 w-7 pr-2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
    <div className="max-sm:hidden">Email:</div>
    <a
      href="mailto:buffettl@andrew.cmu.edu"
      className="ml-10 basis-full break-words font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
    >
      buffettl@andrew.cmu.edu{/* philip910323@gmail.com */}
    </a>
  </>,
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="m-auto inline h-5 w-7 pr-2"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
    <div className="max-sm:hidden">LinkedIn:</div>
    <a
      href="https://www.linkedin.com/in/buffettliu/"
      className="ml-4 basis-full font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
    >
      Jeng-Yue Liu
    </a>
  </>,
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="m-auto inline h-5 w-7 pr-2"
      viewBox="0 0 28.314 28.323"
    >
      <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
    </svg>
    <div className="max-sm:hidden">Phone:</div>
    <a
      href="tel:+886989338717"
      className="ml-8 basis-full font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
    >
      {/* (+886) 989-338-717 */}
      (+1) 412-284-3635
    </a>
  </>,
];

export { descriptionData, title, educationData, awardData, contactData };