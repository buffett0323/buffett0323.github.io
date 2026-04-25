import React from 'react';

type Publication = {
  category: string;
  title: string;
  authors: string[];
  venue?: string;
  institution?: string;
  year?: string;
  link: string;
  linkLabel: string;
};

const publications: Publication[] = [
  {
    category: 'ICML 2026 Position Paper',
    title: 'Position: AI Flaw Management Should Learn from the CVE Ecosystem',
    authors: ['Guan-Ming Chiu', 'Jeng-Yue Liu', 'Kuan-Wei Lee', 'Chiao-Chih Cheng'],
    venue: 'ICML 2026 Position Paper',
    link: 'https://openreview.net/forum?id=nrf6F0G2WN&noteId=DOGeGpC5Jl',
    linkLabel: 'View OpenReview',
  },
  {
    category: 'ACL SRW 2026',
    title: 'Probing Functional Correctness in Diffusion Language Models',
    authors: ['Guan-Ming Chiu', 'Jeng-Yue Liu'],
    venue: 'ACL 2026 Student Research Workshop',
    link: 'https://openreview.net/forum?id=nrf6F0G2WN&noteId=DOGeGpC5Jl',
    linkLabel: 'View OpenReview',
  },
  {
    category: 'ICASSP 2026',
    title: 'SynthCloner: Synthesizer Preset Conversion via Factorized Codec with Disentangled Timbre and ADSR Control',
    authors: ['Jeng-Yue Liu', 'Ting-Chao Hsu', 'Yen-Tung Yeh', 'Li Su', 'Yi-Hsuan Yang'],
    venue: 'IEEE International Conference on Acoustics, Speech and Signal Processing 2026',
    link: 'https://arxiv.org/abs/2509.24286',
    linkLabel: 'View Arxiv',
  },
  {
    category: "Bachelor's Thesis",
    title: "Trip-purpose-based methods for predicting human mobility's next location",
    authors: ['Jeng-Yue Liu', 'Tzai-Hung Wen'],
    venue: 'Annual Conference of the Population Association of Taiwan 2024',
    link: 'https://github.com/buffett0323/BS_Thesis.git',
    linkLabel: 'View GitHub',
  },
];

export default function Publications() {
  return (
    <div className="w-full rounded-lg bg-white px-4 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-10 text-center text-3xl font-bold text-black dark:text-white">Publications</h1>

      <div className="grid grid-cols-1 gap-8">
        {publications.map((publication) => (
          <article
            key={`${publication.category}-${publication.title}`}
            className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700"
          >
            <h2 className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">{publication.category}</h2>

            <ul className="list-disc space-y-2 pl-5 text-gray-700 marker:text-blue-500 dark:text-gray-300 dark:marker:text-blue-300">
              <li>{publication.title}</li>
              <li>
                {publication.authors.map((author, index) => (
                  <React.Fragment key={`${publication.title}-${author}-${index}`}>
                    {index > 0 ? ', ' : ''}
                    {author === 'Jeng-Yue Liu' ? <strong>{author}</strong> : author}
                  </React.Fragment>
                ))}
              </li>
              {publication.venue && <li>{publication.venue}</li>}
              {publication.institution && <li>{publication.institution}</li>}
              {publication.year && <li>{publication.year}</li>}
            </ul>

            <div className="mt-5">
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {publication.linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
