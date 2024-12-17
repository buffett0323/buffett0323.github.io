const industryData = [
  [
    <a
      href="https://www.quid.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      NetBase Quid Inc.
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Title: </b> Machine Learning Engineering Intern
      </div>
      <div>
        <b className="text-black dark:text-white">Dates: </b> Dec. 2024 - Present
      </div>
    </div>,
  ],
  [
    <a
      href="https://www.iis.sinica.edu.tw/zh/index.html"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      Academia Sinica
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Title: </b> Research Assistant
      </div>
      <div className="text-black dark:text-white">
        <b>Mentor: </b>
        <a
          href="https://homepage.iis.sinica.edu.tw/pages/lisu/index_zh.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline dark:text-blue-300"
        >
          Prof. Li Su
        </a>
      </div>
      <div className="text-black dark:text-white">
        <b>Project: </b>
        <a
          href="https://github.com/buffett0323/query_ss.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline dark:text-blue-300"
        >
          Language-Query Source Separation
        </a>
      </div>
      <div>
        <b className="text-black dark:text-white">Dates: </b> Jun. 2024 - Present
      </div>
    </div>,
  ],
  [
    <a
      href="https://www.cienet.com/zh-hant/overview"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      CIeNET Technology
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Title: </b> Engineering Intern
      </div>
      <div>
        <b className="text-black dark:text-white">Dates: </b> Dec. 2023 - Jun. 2024
      </div>
    </div>,
  ],
  [
    <a
      href="https://www.cienet.com/zh-hant/overview"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      National Science and Technology Council (NSTC)
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>Title: </b> Undergraduate Researcher
      </div>
      <div className="text-black dark:text-white">
        <b>Mentor: </b>
        <a
          href="https://wenlab501.github.io/iGEAR/people_pi.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline dark:text-blue-300"
        >
          Prof. Tzai-Hung Wen
        </a>
      </div>
      <div>
        <b className="text-black dark:text-white">Dates: </b> Sep. 2023 – Apr. 2024
      </div>
    </div>,
  ],
];

const projectData = [
    [
        <a
        href="https://github.com/buffett0323/graphrag_news_article.git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        A GraphRAG & LLM-Powered Content Analysis Assistant
        </a>,
        <div>
        <div className="text-black dark:text-white">
            <b>{'Advisor: '}</b>
            <a
            href="http://polab.im.ntu.edu.tw/Bio.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-300"
            >
            Chia-Yen Lee (李家岩)
            </a>
            ,{' '}
            <a
            href="https://www.linkedin.com/in/tzufen-chang-9082b027"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-300"
            >
            Tzu-Fen Chang
            </a>
        </div>
        <div>
            <b className="text-black dark:text-white">{'Dates: '}</b>
            Jan. 2022 - Dec. 2024
        </div>
        <div>
            <b className="text-black dark:text-white">{'Content: '}</b>
        </div>
        <ul className="ml-6 list-disc list-inside text-black dark:text-white">
            <li>
                Collaborated with a team of 6 and California State University, Bakersfield to develop a <b>GraphRAG-based</b> news analysis tool, enabling efficient insight extraction from large datasets and reducing manual effort in social science research.
            </li>
            <li>
                Pre-processed and generated QA pairs on news articles data to <b>fine-tune GPT-4o-mini</b> within the GraphRAG framework.
            </li>
        </ul>
        </div>,
    ],
    [
      <a
      href="https://github.com/buffett0323/IMV_NTU_2024.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
      >
      Innovative Web Solutions for Agriculture: 2024 IMV Contest
      </a>,
      <div>
        <div className="text-black dark:text-white">
            <b>{'Advisor: '}</b>
            <a
            href="https://www.geog.ntu.edu.tw/index.php/en/people/professors?id=896"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-300"
            >
            Jr-Chuan Huang (黃誌川)
            </a>
        </div>
        <div>
            <b className="text-black dark:text-white">{'Dates: '}</b>
            Jul. 2022 - Dec. 2024
        </div>
        <div>
            <b className="text-black dark:text-white">{'Content: '}</b>
        </div>
        <ul className="ml-6 list-disc list-inside text-black dark:text-white">
            <li>
                Advanced to the contest <b>semifinals</b> by building a digital transaction platform for agricultural goods in 2 months using <b>TypeScript (React)</b>, <b>Node.js</b>, and <b>MongoDB</b>, deployed via Render and Vercel.
            </li>
            <li>
                Developed a <b>Selenium</b> web crawler for real-time vegetable prices to optimize fertilizer ratios for carbon reduction.
            </li>
        </ul>
      </div>,
    ],
    
];

  
const researchData = [
[
    <a
    href="http://www.apsipa.org/friendlab/Application/FriendLab.asp?user=citimaclab@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline dark:text-blue-300"
    >
    Music and Audio Computing Lab (MAC Lab), Academia Sinica
    </a>,
    <div>
    <div className="text-black dark:text-white">
        <b>{'Advisor: '}</b>
        <a
        href="https://www.ee.ntu.edu.tw/profile1.php?id=1090726"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Yi-Hsuan Yang (楊奕軒)
        </a>
        ,{' '}
        <a
        href="https://homepage.iis.sinica.edu.tw/pages/lisu/contact_en.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Li Su (蘇黎)
        </a>
    </div>
    <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        Jan. 2024 - present
    </div>
    <div>
        <b className="text-black dark:text-white">{'Projects: '}</b>
    </div>
    <ul className="ml-4 list-disc">
      <li>
        Researched <b>Music AI DJ</b> in query-based music source separation, leveraging Band-Split Mamba2 models and <b>Hypernetwork conditioning</b> to enhance instrument-specific separation, boosting Signal-to-Noise Ratio (SNR) by 7%.
      </li>
      <li>
        Designed pre-trained encoders to disentangle pitch and timbre, enabling precise target source isolation from mixture audio.
      </li>
    </ul>

    </div>,
],
[
    <a
    href="http://polab.im.ntu.edu.tw/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline dark:text-blue-300"
    >
    Productivity Optimization Lab (PO Lab), NTU
    </a>,
    <div>
    <div className="text-black dark:text-white">
        <b>{'Advisor: '}</b>
        <a
        href="http://polab.im.ntu.edu.tw/Bio.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Chia-Yen Lee (李家岩)
        </a>
        ,{' '}
        <a
        href="https://www.linkedin.com/in/tzufen-chang-9082b027"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Tzu-Fen Chang
        </a>
    </div>
    <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        Dec. 2023 - present
    </div>
    <div>
        <b className="text-black dark:text-white">{'Project: '}</b> 
        Collaborated with a team of 6 and California State University, Bakersfield to develop a GraphRAG-based news analysis tool, 
        enabling efficient insight extraction from large datasets and reducing manual effort in social science research.
    </div>
    </div>,
],
[
    <a
    href="https://homepage.ntu.edu.tw/~wenthung/index.htm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline dark:text-blue-300"
    >
    Geospatial Computing Lab, NTU
    </a>,
    <div>
    <div className="text-black dark:text-white">
        <b>{'Advisor: '}</b>
        <a
        href="https://wenlab501.github.io/iGEAR/people_pi.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Tzai-Hung Wen (溫在弘)
        </a>
    </div>
    <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        Jan. 2022 - Jun. 2024
    </div>
    <div>
        <b className="text-black dark:text-white">{'Projects: '}</b>
    </div>
    <ul className="ml-4 list-disc">
        <li>
            <b>[B.S. Thesis] </b>
            <a
                href="https://github.com/buffett0323/BS_Thesis.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline dark:text-blue-300"
            >
                Trip-purpose-based methods for predicting human mobility’s next location
            </a>
        </li>
        <li>
            <a
                href="https://github.com/buffett0323/Traffic-Simulation-Crowd-Evacuation-at-Taipei-Dome.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline dark:text-blue-300"
            >
                Traffic Simulation at Taipei Dome Area with NetLogo
            </a>
        </li>
    </ul>
    </div>,
],

];

const researchInterests = [
  'Machine Learning',
  'Representation Learning',
  'Sound Separation',
  'Text-to-Music Generation',
  'Unsupervised Learning',
  'Natural Language Processing',
];

export { industryData, projectData, researchData, researchInterests };