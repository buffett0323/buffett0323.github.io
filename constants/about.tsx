import NTU from '../public/logos/ntu.jpeg';
import NTUGEOG from '../public/logos/ntugeog.jpeg';
import NTUIM from '../public/logos/ntuim.png';


const descriptionData = [
  <>
    My name is <b>Jeng-Yue (Buffett) Liu 劉正悦</b>. I am now a research assistant working with Prof. Yi-Hsuan Yang and Prof. Li Su at the{' '}
    <a
      href="http://www.apsipa.org/friendlab/Application/FriendLab.asp?user=citimaclab@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline"
    >
      Music and Audio Computing Lab, Academia Sinica
    </a>
    . I hold a dual Bachelor’s degree in Information Management (B.B.A.) and Geography (B.S.) from National Taiwan University.
  </>,
  <>
    My research focuses on the intersection of Natural Language Processing, Speech Processing, and Music, where I leverage language-query separation models to enhance specific-stem music source separation in the field of Electronic Dance Music (EDM) for AI-DJ. My work emphasizes deep generative models and unsupervised representation learning. Currently, I am exploring two key directions:
    (1) Adapting text-to-music generation models to disentangle pitch and timbre in music, enabling more effective feature separation.
    (2) Improving timbre transfer for auto-remixing by incorporating query-based methods to enhance creative and dynamic music manipulation.
  </>,
  <>
    <b>I am now applying for a CS & CSE Master starting in Fall 2025 and am excited to connect with and learn from professors and researchers who share similar interests!</b>
  </>,
];

const musicData = [
  <>
    <b>Music</b> has always been my universal language—a powerful way to connect with people beyond words. As a party DJ with over five years of experience, I thrive on creating electrifying atmospheres that captivate audiences. There’s nothing quite like seeing a crowd lose themselves in the music, dancing with unrestrained joy and energy. It’s this magical connection that draws me back to the stage time and time again.
  </>,
  <>
    Beyond performing, I co-manage a music bar that celebrates Taiwanese hip-hop while blending it with global music influences. This venture has been transformative, offering opportunities to engage with people from diverse cultural backgrounds. It has broadened my worldview and deepened my cultural sensitivity, allowing me to appreciate the unifying power of music even further.
  </>,
  <>
    My passion extends beyond performance—I am equally fascinated by the intersection of <b>AI and music</b>. DJing is more than syncing beats; it’s about reading the crowd, understanding the energy, and adapting in real time. This inspired me to explore AI-powered DJ controllers that analyze crowd reactions and track energy levels, helping DJs maintain peak performance and seamless transitions. I envision pushing this innovation further to revolutionize the performing arts industry with AI-driven solutions that enhance creativity and engagement.
  </>,
  <>
    <b>Teamwork</b> has been a cornerstone of my journey. From playing in school bands to leading the Geography Student Association during university, collaboration has always been at the heart of what I do. Whether organizing high school camps, cross-university events, or national sports competitions, I learned invaluable lessons in leadership, coordination, and adaptability. These experiences shaped me into a driven, resourceful individual, ready to tackle new challenges.
  </>,
  <>
    Music, innovation, and collaboration define who I am. I am eager to continue channeling these passions to connect with others, drive positive change, and create impactful experiences.
  </>,

];

const title = (
  <b>
    Machine Learning Engineer / Researcher
  </b>
);

const educationData = [
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
    ],
    departmentLogos: [
      { name: "Information Management", logo: NTUIM }, 
      { name: "Geography", logo: NTUGEOG }, 
    ],
  },
];


const awardData = [
  [
    2024,
    <a
      href="http://www.phitauphi.org.tw/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      The Phi Tau Phi Scholastic Honor Society of the Republic of China <br />{' '}
      (中華民國斐陶斐榮譽學會)
    </a>,
    'Honorary Member',
  ],
  [
    2024,
    <a
      href="https://drive.google.com/file/u/3/d/1H7lJWS4OiuomcfpvtB6dtNqnlNskq0ZV/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Bachelor Degree Thesis Award <br /> (臺大學士論文獎)
    </a>,
    'Top 3 of the department',
  ],
  [
    2023,
    <>
      NTU Presidential Award <br />
    </>,
    'Ranked 1/49 in department',
  ],
  [
    2023,
    <>
      NTU Dean’s List Award <br />
    </>,
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
      href="mailto:philip910323@gmail.com"
      className="ml-10 basis-full break-words font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
    >
      philip910323@gmail.com
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
      href="tel:+18583737788"
      className="ml-8 basis-full font-normal text-blue-500 hover:underline dark:text-blue-300 max-sm:ml-1"
    >
      +886 989-338-717
    </a>
  </>,
];

export { descriptionData, musicData, title, educationData, awardData, contactData };