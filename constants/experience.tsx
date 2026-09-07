import { StaticImageData } from "next/image";
import QUID from '../public/logos/quid.png';
import ACADEMIA from '../public/logos/academia.png';
import CIENET from '../public/logos/cienet.png';
import NSTC from '../public/logos/nstc.jpeg';
import NEUTONE from '../public/logos/neutone.svg';
import LINKEDIN from '../public/logos/linkedin.svg';
import InsightLink_Framework from '../public/project_img/imp_framework.png';
import IMV_Framework from '../public/project_img/imv_framework.png';
import area_pic from '../public/project_img/area_pic.png';
import QBSS from '../public/project_img/qbss.jpg';
import Dgrammar_Fig from '../public/project_img/dgrammar_fig1.png';
import LLMSys_Speedup from '../public/project_img/llmsys_speedup.png';

type ProjectDataType = [React.ReactNode, React.ReactNode, StaticImageData?];

type MetaItem = { label: string; value: React.ReactNode };

type WorkEntry = {
  org: React.ReactNode;
  logo: StaticImageData;
  title: string;
  meta: MetaItem[];
  bullets?: React.ReactNode[];
};

type SectionEntry = {
  org: React.ReactNode;
  meta: MetaItem[];
  bullets?: React.ReactNode[];
};

const industryData: WorkEntry[] = [
  {
    org: (
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        LinkedIn Corporation
      </a>
    ),
    logo: LINKEDIN,
    title: 'Machine Learning Engineer Intern',
    meta: [
      { label: 'Focus', value: 'Multi-agent systems for developer productivity' },
      { label: 'Location', value: 'Sunnyvale, CA' },
      { label: 'Dates', value: 'May. 2026 - Aug. 2026' },
    ],
    bullets: [
      <>
        Engineered a multi-agent tracing and profiling system supporting <b>60k+ daily PRs</b>, analyzing failure
        patterns, latency, token usage, and sub-agent parallelization bottlenecks to power a reflective prompt
        evolution framework that drives continuous system self-evolution.
      </>,
      <>
        Prototyped a reproducible benchmark assessing multi-agent alignment with historical human reviewer
        perspectives, using deterministic unit-test execution over <b>LLM-as-a-judge</b> to validate true error
        detection through fail-then-pass logic.
      </>,
    ],
  },
  {
    org: (
      <a href="https://neutone.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        Neutone Inc.
      </a>
    ),
    logo: NEUTONE,
    title: 'Research & Development Intern',
    meta: [
      { label: 'Focus', value: 'Real-time neural tone morphing' },
      { label: 'Location', value: 'Tokyo, Japan (Remote)' },
      { label: 'Dates', value: 'Dec. 2025 - Apr. 2026' },
    ],
    bullets: [
      <>
        Ported the in-house real-time tone-morphing plugin to a <b>SlowFast</b> training pipeline, mitigating
        low-buffer granular artifacts and degraded timbre transfer to improve out-of-distribution reliability while
        preserving low-latency real-time inference.
      </>,
    ],
  },
  {
    org: (
      <a href="https://www.iis.sinica.edu.tw/zh/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        Academia Sinica
      </a>
    ),
    logo: ACADEMIA,
    title: 'Machine Learning Research Intern',
    meta: [
      {
        label: 'Mentor',
        value: (
          <a href="https://www.linkedin.com/in/li-su-a38a8a78/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Prof. Li Su
          </a>
        ),
      },
      {
        label: 'Projects',
        value: (
          <>
            <a href="https://buffett0323.github.io/synthcloner/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
              SynthCloner
            </a>
            {', '}
            <a href="https://github.com/buffett0323/query_ss.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
              Query-Based Source Separation
            </a>
          </>
        ),
      },
      { label: 'Dates', value: 'Jul. 2024 - Aug. 2025' },
    ],
    bullets: [
      <>
        Outperformed state-of-the-art models on 2,500 hours of audio with a <b>47.3% reduction</b> in multi-scale STFT
        loss by proposing a factorized codec with attribute-specific auxiliary tasks and information perturbation,
        enabling controllable disentanglement in style transfer.
      </>,
      <>
        Achieved <b>86% k-NN top-1 similarity</b> across 75k+ Beatport segments with a zero-shot timbre encoder built
        on MoCo-v2 and a Swin Transformer, using sequence perturbation and temporal augmentation for timbre-invariant
        representation learning.
      </>,
    ],
  },
  {
    org: (
      <a href="https://www.quid.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        Quid Inc.
      </a>
    ),
    logo: QUID,
    title: 'Machine Learning Engineering Intern',
    meta: [
      {
        label: 'Mentor',
        value: (
          <a href="https://www.linkedin.com/in/larrick-chen-b346b933/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Larrick Chen
          </a>
        ),
      },
      { label: 'Team', value: 'Discover Analysis' },
      { label: 'Dates', value: 'Dec. 2024 - Jun. 2025' },
    ],
    bullets: [
      <>
        Cut manual prompt tuning by <b>10+ hours per week</b> by optimizing search-result similarity ranking and match
        scoring with <b>DSPy</b> under Chain-of-Thought and MIPROv2, and automating summary and title generation via an
        LLM-based assessment module.
      </>,
      <>
        Improved emerging-hashtag <b>Precision@50 by 18%</b> by combining BOCPD change-point signals with
        creator-conditioned engagement features in a LightGBM classifier, enabling early detection of volatile trends
        across 1M+ creators.
      </>,
    ],
  },
  {
    org: (
      <a href="https://www.cienet.com/zh-hant/overview" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        CIeNET Technology
      </a>
    ),
    logo: CIENET,
    title: 'Software Engineering Intern',
    meta: [
      {
        label: 'Mentor',
        value: (
          <a href="https://www.linkedin.com/in/jimmy-hsieh-12219b178/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Jimmy Hsieh
          </a>
        ),
      },
      { label: 'Dates', value: 'Dec. 2023 - Jun. 2024' },
    ],
  },
  {
    org: (
      <a href="https://www.nstc.gov.tw/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        National Science and Technology Council
      </a>
    ),
    logo: NSTC,
    title: 'Undergrad Researcher',
    meta: [
      {
        label: 'Mentor',
        value: (
          <a href="https://wenlab501.github.io/iGEAR/people_pi.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Prof. Tzai-Hung Wen
          </a>
        ),
      },
      {
        label: 'Project',
        value: (
          <a href="https://github.com/buffett0323/BS_Thesis.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Human Mobility Prediction
          </a>
        ),
      },
      { label: 'Dates', value: 'Sep. 2023 - Apr. 2024' },
    ],
  },
];

const projectData: ProjectDataType[] = [
    [
        <span className="text-2xl font-bold text-blue-500 dark:text-blue-300">
        1. <b>Dgrammar</b>: Efficient Constrained Decoding for Diffusion Language Models
        </span>,
        <div>
        <div className="text-black dark:text-white">
            <b>{'Venue: '}</b>
            Anonymous ACL Submission
        </div>
        <div className="text-black dark:text-white">
            <b>{'Role: '}</b>
            Author
        </div>
        <div className="text-black dark:text-white">
            <b>{'Stack: '}</b>
            Diffusion LLMs (LLaDA-8B-Instruct), LLGuidance, PyTorch
        </div>
        <div>
            <b className="text-black dark:text-white">{'Dates: '}</b>
            Feb. 2026 - May. 2026
        </div>
        <div>
            <b className="text-black dark:text-white">{'Description: '}</b>
        </div>
        <ul className="ml-6 list-disc list-inside text-black dark:text-white">
            <li>
                Introduced <b>Dgrammar</b>, a grammar-constrained decoder for Diffusion Language Models (DLMs) that preserves block-parallel multi-token unmasking — unlike prior methods that fall back to single-token decoding on every grammar violation.
            </li>
            <li>
                Combines <b>frontier masking</b>, <b>Viterbi-based joint span repair</b>, selective remasking via logit truncation, and grammar-guided autoregressive tail completion to enforce formal grammar constraints in-place under the same forward-pass logits.
            </li>
            <li>
                Reaches <b>95.3% schema validity</b> on <b>JSONSchemaBench</b> (<b>+18%</b> over the previous state of the art) with <b>3×</b> faster inference.
            </li>
            <li>
                Cuts decoding latency <b>5.8× (mean)</b> and <b>9.4× (p95)</b> through async mask–GPU overlapping, AIMD multi-token unmasking, and zero-forward selective remasking on grammar violations, eliminating all 120 s timeouts.
            </li>
        </ul>
        </div>,
        Dgrammar_Fig,
    ],
    [
        <a
        href="https://github.com/buffett0323/mlsys_comp26_flashinfer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        2. Efficient GPU Kernel Design for Block-Sparse Attention in Long-Context LLMs
        </a>,
        <div>
        <div className="text-black dark:text-white">
            <b>{'Venue: '}</b>
            MLSys 2026 (FlashInfer AI Kernel Generation Contest)
        </div>
        <div className="text-black dark:text-white">
            <b>{'Authors: '}</b>
            Jeng-Yue Liu, Wilson Zheng, Haoling Pu — Carnegie Mellon University
        </div>
        <div>
            <b className="text-black dark:text-white">{'Dates: '}</b>
            Feb. 2026 - May. 2026
        </div>
        <div>
            <b className="text-black dark:text-white">{'Description: '}</b>
        </div>
        <ul className="ml-6 list-disc list-inside text-black dark:text-white">
            <li>
                Designed and optimized GPU kernels for both stages of the <b>DeepSeek Sparse Attention (DSA)</b> pipeline targeting 128K-token long-context LLM inference.
            </li>
            <li>
                <b>Stage 1 (Top-K Indexer)</b>: Triton-based indexer with FP8 dequantization, cuBLAS scoring, and a two-tier CUDA graph caching scheme for near-zero repeated-call overhead.
            </li>
            <li>
                <b>Stage 2 (Sparse Attention Kernel)</b>: CUDA kernel using WMMA m16n16k16 tensor cores, <code>cp.async</code> double-buffered KV gathering, and a split-K parallelization strategy that lifts SM utilization from ~5% to ~173% at small batch sizes.
            </li>
            <li>
                Achieves <b>22–50× speedup</b> over the PyTorch reference on NVIDIA B200, with kernel latency flat at 53–61 µs across all 23 benchmark workloads and abs_err = 1.56 × 10⁻², well below the contest tolerance.
            </li>
        </ul>
        </div>,
        LLMSys_Speedup,
    ],
    [
        <span className="text-2xl font-bold text-blue-500 dark:text-blue-300">
        3. <b>Hypoll</b>: Interactive Storytelling Social Platform
        </span>,
        <div>
        <div className="text-black dark:text-white">
            <b>{'Stack: '}</b>
            React, Expo, iOS, FastAPI, Qdrant, Docker, Google Cloud Platform
        </div>
        <div>
            <b className="text-black dark:text-white">{'Dates: '}</b>
            Oct. 2025 - Apr. 2026
        </div>
        <div>
            <b className="text-black dark:text-white">{'Description: '}</b>
        </div>
        <ul className="ml-6 list-disc list-inside text-black dark:text-white">
            <li>
                Launched an AI-powered social platform for <b>real-time voice streaming</b> with low-latency conversational AI — on-device ASR, semantic endpointing, live chat feedback, TTS, image generation, and conversation-grounded poll suggestions.
            </li>
            <li>
                Built semantic search infrastructure on the <b>Qdrant</b> vector database with OpenAI embeddings for content discovery and recommendation.
            </li>
            <li>
                Deployed on <b>GCP Cloud Run</b> with a multi-layer Docker CI/CD pipeline.
            </li>
        </ul>
        </div>,
    ],
    [
        <a
        href="https://github.com/buffett0323/graphrag_news_article.git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
        >
        4. <b>InsightLink</b>: An LLM-Powered Content Analysis Assistant
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
            Jan. 2024 - Dec. 2024
        </div>
        <div>
            <b className="text-black dark:text-white">{'Description: '}</b>
        </div>
        <ul className="ml-6 list-disc list-inside text-black dark:text-white">
            <li>
                <a href="https://docs.google.com/document/d/1OyaY9eteqoIlhMbj2NIpr0IEKBxsndb4tX-EshMHLKM/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">[Final report] </a>
                Collaborated with a team of 6 and California State University, Bakersfield to develop a <b>GraphRAG-based</b> news analysis tool, enabling efficient insight extraction from large datasets and reducing manual effort in social science research.
            </li>
            <li>
                Improved glossary adherence and cut token cost by <b>49%</b>, reaching <b>&gt;70% expert-validated alignment</b>, by fine-tuning <b>GPT-4o-mini</b> with a glossary-first QA pipeline that retrieved glossary chunks and constrained answers to glossary definitions.
            </li>
            <li>
                Eliminated <b>97%</b> of manual analysis effort by engineering GraphRAG indexing and an LLM-powered full-stack app that extracted entities, distilled cross-article insights, and surfaced shifts in public attitudes through temporal entity-frequency analysis.
            </li>
        </ul>
        </div>,
        InsightLink_Framework,
    ],
    [
      <a
      href="https://github.com/buffett0323/query_ss.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
      >
      5. Music Query-based Source Separation
      </a>,
      <div>
        <div className="text-black dark:text-white">
            <b>{'Advisor: '}</b>
            <a
            href="https://www.linkedin.com/in/li-su-a38a8a78/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline dark:text-blue-300"
            >
            Su Li (蘇黎)
            </a>
        </div>
        <div>
            <b className="text-black dark:text-white">{'Dates: '}</b>
            Jul. 2024 - Oct. 2024
        </div>
        <div>
            <b className="text-black dark:text-white">{'Description: '}</b>
        </div>
        <ul className="ml-6 list-disc list-inside text-black dark:text-white">
            <li>
              This project introduces a novel audio-query-based source separation approach, leveraging the Band-Split Mamba model and advanced latent diffusion techniques to overcome the limitations of traditional source separation methods.
            </li>
        </ul>
      </div>,
      QBSS,
    ],
    [
      <a
      href="https://github.com/buffett0323/IMV_NTU_2024.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
      >
      6. <b>CarbonSeeker 2.0</b>: Innovative Web Solutions for Agriculture (2024 IMV Contest)
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
            Jul. 2024 - Nov. 2024
        </div>
        <div>
            <b className="text-black dark:text-white">{'Description: '}</b>
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
      IMV_Framework,
    ],
    [
      <a
      href="https://github.com/buffett0323/Traffic-Simulation-Crowd-Evacuation-at-Taipei-Dome.git"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
      >
      7. Traffic Simulation at Taipei Dome Area with NetLogo
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
            Sep. 2022 - Dec. 2022
        </div>
        <div>
            <b className="text-black dark:text-white">{'Description: '}</b>
        </div>
        <ul className="ml-6 list-disc list-inside text-black dark:text-white">
            <li>
              This project presents a simplified traffic flow simulation focused on the Taipei Dome Area. Using the <b>NetLogo</b> environment, this model aims to simulate and analyze traffic dynamics under various scenarios.
            </li>
        </ul>
      </div>,
      area_pic,
    ],
    
];

  
const researchData: SectionEntry[] = [
  {
    org: (
      <a
        href="http://www.apsipa.org/friendlab/Application/FriendLab.asp?user=citimaclab@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
      >
        Music and Audio Computing Lab, Academia Sinica
      </a>
    ),
    meta: [
      {
        label: 'Advisor',
        value: (
          <>
            <a href="https://www.ee.ntu.edu.tw/profile1.php?id=1090726" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
              Yi-Hsuan Yang (楊奕軒)
            </a>
            {', '}
            <a
              href="https://homepage.iis.sinica.edu.tw/pages/lisu/contact_en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline dark:text-blue-300"
            >
              Li Su (蘇黎)
            </a>
          </>
        ),
      },
      { label: 'Dates', value: 'Jan. 2024 - Aug. 2025' },
    ],
    bullets: [
      <>
        Proposed a novel end-to-end <b>factorized codec</b> learning framework for timbre/style transfer models with
        information perturbation and supervision, achieving enhanced timbre-content-ADSR <b>disentanglement</b> for
        controllable synthesizer preset conversion and surpassing state-of-the-art synthesizer timbre transfer
        baselines with a multi-resolution STFT loss from 5.69 to <b>2.22</b>.{' '}
        <a href="https://buffett0323.github.io/synthcloner/" className="text-blue-600 italic" target="_blank" rel="noopener noreferrer">
          [GitHub]
        </a>
      </>,
      <>
        Developed an audio-query music <b>source separation</b> system using band-split <b>Mamba2</b> with hypernetwork
        conditioning, enhancing timbre conditioning and boosting instrument-specific SNR by 7%.
      </>,
    ],
  },
  {
    org: (
      <a href="http://polab.im.ntu.edu.tw/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        Productivity Optimization Lab, NTU
      </a>
    ),
    meta: [
      {
        label: 'Advisor',
        value: (
          <>
            <a href="http://polab.im.ntu.edu.tw/Bio.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
              Chia-Yen Lee (李家岩)
            </a>
            {', '}
            <a href="https://www.linkedin.com/in/tzufen-chang-9082b027" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
              Tzu-Fen Chang
            </a>
          </>
        ),
      },
      { label: 'Dates', value: 'Dec. 2023 - Dec. 2024' },
    ],
    bullets: [
      <>
        Collaborated with a team of 6 to develop a <b>GraphRAG</b>-based news content analysis tool, leveraging{' '}
        <b>LLMs</b> for insight extraction from large datasets and reducing manual effort in social science research.{' '}
        <a href="https://github.com/buffett0323/graphrag_news_article.git" className="text-blue-600 italic" target="_blank" rel="noopener noreferrer">
          [GitHub]
        </a>
      </>,
      <>
        Applied <b>NLP</b> techniques such as LDA and NMF to analyze attitude shifts surrounding the 2021 Atlanta spa
        shootings.
      </>,
    ],
  },
  {
    org: (
      <a href="https://homepage.ntu.edu.tw/~wenthung/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        Geospatial Computing Lab, NTU
      </a>
    ),
    meta: [
      {
        label: 'Advisor',
        value: (
          <a href="https://wenlab501.github.io/iGEAR/people_pi.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Tzai-Hung Wen (溫在弘)
          </a>
        ),
      },
      { label: 'Dates', value: 'Jan. 2022 - Jun. 2024' },
    ],
    bullets: [
      <>
        <b>[B.S. Thesis] </b>
        <a href="https://github.com/buffett0323/BS_Thesis.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
          Trip-purpose-based methods for predicting human mobility&rsquo;s next location
        </a>
      </>,
      <>
        Developed <b>multimodal spatio-temporal</b> models with a trip-purpose approach, achieving <b>80% accuracy</b>,
        and designed a data pipeline to integrate mobility data, Google Maps polygons, and remote sensing datasets for
        spatial analysis.
      </>,
      <>
        Reached IMV contest semifinals by building a digital transaction platform with <b>TypeScript (React)</b>,{' '}
        <b>Node.js</b>, and <b>MongoDB</b>, and developing a <b>Selenium</b> web crawler for real-time vegetable prices
        to optimize fertilizer use.{' '}
        <a href="https://github.com/buffett0323/IMV_NTU_2024.git" className="text-blue-600 italic" target="_blank" rel="noopener noreferrer">
          [GitHub]
        </a>
      </>,
      <>
        Simulated 3D crowd and vehicle flows in <b>NetLogo</b> and Python for safer Taipei Dome evacuations, informing
        exit planning.
      </>,
    ],
  },
];

const taData: SectionEntry[] = [
  {
    org: (
      <a href="https://www.csie.ntu.edu.tw/~htlin/course/ml23fall/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
        Machine Learning, NTU
      </a>
    ),
    meta: [
      {
        label: 'Mentor',
        value: (
          <a href="https://www.csie.ntu.edu.tw/~htlin/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Hsuan-Tien Lin (林軒田)
          </a>
        ),
      },
      {
        label: 'Dept',
        value: (
          <a href="https://www.csie.ntu.edu.tw//?locale=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Computer Science &amp; Information Engineering, NTU
          </a>
        ),
      },
      {
        label: 'Dates',
        value: (
          <>
            Jan. 2023 - Jan. 2024 (<b>2 semesters</b>)
          </>
        ),
      },
    ],
    bullets: [
      <>
        Designed assignments &amp; projects, and led TA sessions in English to support students with problem-solving
        and queries.
      </>,
      <>
        Conceived and led the{' '}
        <a
          href="https://drive.google.com/file/d/15_Zq-RQpNGXFjYSnHqSP1oA6xFjR6V-m/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline dark:text-blue-300"
        >
          final project
        </a>
        , originating from my idea. Utilized Generative Adversarial Networks (GANs) to generate a noisier dataset based
        on the original, increasing task difficulty in a student final project, then applied machine learning models to
        establish baselines.
      </>,
    ],
  },
  {
    org: (
      <a
        href="https://nol.ntu.edu.tw/nol/coursesearch/print_table.php?lang=EN&course_id=208%2011510&class=&dpt_code=2080&ser_no=69731&semester=110-2"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline dark:text-blue-300"
      >
        Computer Programming, NTU
      </a>
    ),
    meta: [
      {
        label: 'Mentor',
        value: (
          <a href="https://wenlab501.github.io/iGEAR/people_pi.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Tzai-Hung Wen (溫在弘)
          </a>
        ),
      },
      {
        label: 'Dept',
        value: (
          <a href="https://www.geog.ntu.edu.tw/index.php/en/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">
            Geography, NTU
          </a>
        ),
      },
      { label: 'Dates', value: 'Feb. 2022 - Jun. 2022' },
    ],
    bullets: [<>Led coding exercises, explained programming logic, and graded assignments &amp; exams.</>],
  },
];

const openReviewData = [
  [
    <a
      href="https://2026.ieeeicassp.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      ICASSP 2026
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>{'Conference: '}</b>
        IEEE International Conference on Acoustics, Speech and Signal Processing
      </div>
      <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        2026
      </div>
      <div>
        <b className="text-black dark:text-white">{'Description: '}</b>
      </div>
      <ul className="ml-6 list-disc list-inside text-black dark:text-white">
        <li>
          Reviewing submissions for ICASSP 2026.
        </li>
      </ul>
    </div>,
  ],
  [
    <a
      href="https://aiformusicworkshop.github.io/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline dark:text-blue-300"
    >
      NeurIPS AI Music 2025
    </a>,
    <div>
      <div className="text-black dark:text-white">
        <b>{'Conference: '}</b>
        NeurIPS Workshop on AI for Music
      </div>
      <div>
        <b className="text-black dark:text-white">{'Dates: '}</b>
        2025
      </div>
      <div>
        <b className="text-black dark:text-white">{'Description: '}</b>
      </div>
      <ul className="ml-6 list-disc list-inside text-black dark:text-white">
        <li>
          Reviewing submissions for the NeurIPS Workshop on AI for Music 2025.
        </li>
      </ul>
    </div>,
  ],
];

type OssPullRequest = {
  title: string;
  refs: string;
  url: string;
  merged: boolean;
};

type OssProject = {
  name: string;
  url: string;
  stars: string;
  description: string;
  prs: OssPullRequest[];
};

const openSourceStats: { label: string; value: string }[] = [
  { label: 'Pull Requests', value: '17' },
  { label: 'Merged', value: '9' },
  { label: 'Upstream Projects', value: '5' },
  { label: 'Combined Stars', value: '168k+' },
];

const openSourceData: OssProject[] = [
  {
    name: 'linkedin/Liger-Kernel',
    url: 'https://github.com/linkedin/Liger-Kernel',
    stars: '6.6k',
    description: 'Efficient Triton kernels for LLM training',
    prs: [
      {
        title: 'Add Liger Kernel support for Muse Glimmer',
        refs: '#1390',
        url: 'https://github.com/linkedin/Liger-Kernel/pull/1390',
        merged: true,
      },
      {
        title: '[Megatron] Add SwiGLU integration',
        refs: '#1326',
        url: 'https://github.com/linkedin/Liger-Kernel/pull/1326',
        merged: true,
      },
      {
        title:
          'Pinned fp64 scalar kernel parameters to fp32 across cross-entropy, RMSNorm, and GRPO loss kernels',
        refs: '#1358, #1362, #1364, #1366',
        url: 'https://github.com/linkedin/Liger-Kernel/pulls?q=is%3Apr+author%3Abuffett0323',
        merged: true,
      },
      {
        title: '[Bug] FLCE Triton fallback',
        refs: '#1396',
        url: 'https://github.com/linkedin/Liger-Kernel/pull/1396',
        merged: false,
      },
    ],
  },
  {
    name: 'huggingface/diffusers',
    url: 'https://github.com/huggingface/diffusers',
    stars: '34k',
    description: 'State-of-the-art diffusion models for image, video, and audio',
    prs: [
      {
        title: 'Add Stable Audio 3 pipeline',
        refs: '#14119',
        url: 'https://github.com/huggingface/diffusers/pull/14119',
        merged: true,
      },
      {
        title: 'Fix path-traversal / arbitrary out-of-directory file read vulnerability',
        refs: '#14182',
        url: 'https://github.com/huggingface/diffusers/pull/14182',
        merged: true,
      },
      {
        title: 'Add from_single_file() support for Ideogram4 and Krea2 transformers',
        refs: '#14126',
        url: 'https://github.com/huggingface/diffusers/pull/14126',
        merged: false,
      },
    ],
  },
  {
    name: 'sgl-project/sglang-omni',
    url: 'https://github.com/sgl-project/sglang-omni',
    stars: '1.1k',
    description: 'Serving framework for audio and omni-modal models (TTS, ASR)',
    prs: [
      {
        title: '[dots.tts] Fix non-deterministic reference encoding; add parity test',
        refs: '#1420',
        url: 'https://github.com/sgl-project/sglang-omni/pull/1420',
        merged: true,
      },
      {
        title: '[dots.tts] Measure codec lock contention with GPU span timing',
        refs: '#1459',
        url: 'https://github.com/sgl-project/sglang-omni/pull/1459',
        merged: false,
      },
      {
        title: '[dots.tts] Add per-call-site contention profiling for the shared codec',
        refs: '#1434',
        url: 'https://github.com/sgl-project/sglang-omni/pull/1434',
        merged: false,
      },
      {
        title: 'Fix code2wav initial chunk size',
        refs: '#1166',
        url: 'https://github.com/sgl-project/sglang-omni/pull/1166',
        merged: false,
      },
    ],
  },
  {
    name: 'vllm-project/vllm',
    url: 'https://github.com/vllm-project/vllm',
    stars: '91k',
    description: 'High-throughput, memory-efficient LLM inference and serving engine',
    prs: [
      {
        title: '[BugFix] Drafter attention backend auto-selection picks FlashAttention incorrectly',
        refs: '#48579',
        url: 'https://github.com/vllm-project/vllm/pull/48579',
        merged: false,
      },
    ],
  },
  {
    name: 'sgl-project/sglang',
    url: 'https://github.com/sgl-project/sglang',
    stars: '36k',
    description: 'High-performance serving framework for large language models',
    prs: [
      {
        title: 'Fix malformed Harmony output for gpt-oss with reasoning and JSON mode',
        refs: '#31602',
        url: 'https://github.com/sgl-project/sglang/pull/31602',
        merged: false,
      },
      {
        title: '[LoRA] Fix crash loading GDN in_proj_qkv / in_proj_z adapters',
        refs: '#30189',
        url: 'https://github.com/sgl-project/sglang/pull/30189',
        merged: false,
      },
    ],
  },
];

const skillCategories: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['Python', 'C', 'C++', 'CUDA', 'Java', 'JavaScript', 'TypeScript', 'R', 'Swift', 'SQL', 'Shell'],
  },
  {
    label: 'ML / Frameworks',
    items: [
      'PyTorch',
      'Triton',
      'NumPy',
      'Librosa',
      'Hugging Face',
      'Diffusers',
      'LangChain',
      'DSPy',
      'JAX',
      'vLLM',
      'SGLang',
      'React',
      'Next.js',
      'FastAPI',
      'Flask',
    ],
  },
  {
    label: 'Infra / DevOps',
    items: [
      'Docker',
      'Kubernetes',
      'Helm',
      'Argo CD',
      'Linux',
      'Google Cloud Platform',
      'GitHub Actions',
      'Postman',
    ],
  },
  {
    label: 'Data / Tools',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Qdrant', 'Neo4j', 'Apache Kafka', 'Prometheus', 'Grafana'],
  },
];

const researchInterests = [
  'Efficient LLM Inference',
  'Constrained Decoding',
  'Diffusion Language Models',
  'GPU Kernel Optimization',
  'Representation Learning',
  'Music & Audio Generation',
  'Source Separation',
  'Natural Language Processing',
  'Self-Supervised Learning',
];

export {
  industryData,
  projectData,
  researchData,
  taData,
  openReviewData,
  researchInterests,
  skillCategories,
  openSourceData,
  openSourceStats,
};