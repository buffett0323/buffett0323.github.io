const industryData = [
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
          <b>{'Title: '}</b> Machine Learning Research Intern
        </div>
        <div className="text-black dark:text-white">
          <b>{'Project: '}</b>{' '}
          <a
            href="https://github.com/buffett0323/query_ss.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-300"
          >
            Query Source Separation
          </a>
        </div>
        <div>
          <b className="text-black dark:text-white">{'Dates: '}</b>
            Jun. 2024 - Present
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
          <b>{'Title: '}</b> Engineering Intern
        </div>
        <div>
          <b className="text-black dark:text-white">{'Dates: '}</b>
            Dec. 2023– Jun. 2024
        </div>
      </div>,
    ],
    
];

const projectData = [
    [
        <a
        href="https://github.com/imbensonchiu/newspaper-graph-rag"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        A GraphRAG & LLM-Powered Content Analysis Assistant
        </a>,
        <div>
        <div className="text-black dark:text-white">
            <b>{'Undergraduate Advisor: '}</b>
            <a
            href="https://shaohua0116.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-300"
            >
            Dr. Chia-Yen Lee & Dr. Tzu-Fen Chang
            </a>
        </div>
        <div>
            <b className="text-black dark:text-white">{'Dates: '}</b>
            Jan. 2022 - present
        </div>
        <div>
            <b className="text-black dark:text-white">{'Content: '}</b>
        </div>
        <ul className="ml-4 list-disc list-inside">
            <li>
                Collaborated with a team of 6 and California State University, Bakersfield to develop a <b>GraphRAG-based</b> news analysis tool, enabling efficient insight extraction from large datasets and reducing manual effort in social science research.
            </li>
            <li>
                Pre-processed and generated QA pairs on news articles data to <b>fine-tune GPT-4o-mini</b> within the GraphRAG framework.
            </li>
        </ul>
        </div>,
    ],
];

  
const researchData = [
[
    <a
    href="https://nturobotlearninglab.github.io/dbc/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline dark:text-blue-300"
    >
    Robot Learning Lab
    </a>,
    <div>
    <div className="text-black dark:text-white">
        <b>{'Undergraduate Advisor: '}</b>
        <a
        href="https://shaohua0116.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Shao-Hua Sun (孫紹華)
        </a>
    </div>
    <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        Jul. 2022 - present
    </div>
    <div>
        <b className="text-black dark:text-white">{'Projects: '}</b>
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
    href="https://research.tsmc.com/english/collaborations/academic/academic-programs.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline dark:text-blue-300"
    >
    TSMC Joint Development Programs
    </a>,
    <div>
    <div className="text-black dark:text-white">
        <b>{'Advisor: '}</b>
        <a
        href="https://shaohua0116.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Shao-Hua Sun (孫紹華)
        </a>
        ,{' '}
        <a
        href="https://www.linkedin.com/in/ken-chan-8450901b4/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Ken Chan (詹鈞翔)
        </a>
    </div>
    <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        Nov. 2022 - Sep. 2023
    </div>
    <div>
        <b className="text-black dark:text-white">{'Project: '}</b> Precision-Driven Pairwise Style
        Transfer for Ultra-High Resolution Images
    </div>
    </div>,
],
[
    <a
    href="https://speech.ee.ntu.edu.tw/~hylee/index.php"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline dark:text-blue-300"
    >
    Speech Processing and Machine Learning Lab
    </a>,
    <div>
    <div className="text-black dark:text-white">
        <b>{'Undergraduate Advisor: '}</b>
        <a
        href="https://speech.ee.ntu.edu.tw/~hylee/index.php"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Hung-Yi Lee (李宏毅)
        </a>
    </div>
    <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        Jul. 2022 - Sep. 2023
    </div>
    <div>
        <b className="text-black dark:text-white">{'Projects: '}</b>
    </div>
    <ul className="ml-4 list-disc">
        <li>
        <b>[ICASSP&apos;24]</b> AV-SUPERB: A Multi-Task Evaluation Benchmark for Audio-Visual
        Representation Models
        </li>
        <li>
        Impact of Language Family Distance on few-shot Transfer for Pretrained Speech Upstream
        Models
        </li>
    </ul>
    </div>,
],
[
    <a
    href="https://www.csie.ntu.edu.tw/~miulab/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline dark:text-blue-300"
    >
    Machine Intelligence & Understanding Laboratory
    </a>,
    <div>
    <div className="text-black dark:text-white">
        <b>{'Undergraduate Advisor: '}</b>
        <a
        href="https://www.csie.ntu.edu.tw/~yvchen/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        Yun-Nung (Vivian) Chen (陳縕儂)
        </a>
    </div>
    <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        Jul. 2021 - Sep. 2022
    </div>
    <div>
        <b className="text-black dark:text-white">{'Project: '}</b>
        <b>[SIGDIAL&apos;22]</b> Controllable User Dialogue Act Augmentation for Dialogue State
        Tracking
    </div>
    </div>,
],
];

export { industryData, projectData, researchData };