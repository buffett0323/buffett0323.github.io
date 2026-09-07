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
    linkLabel: 'OpenReview',
  },
  {
    category: 'ACL SRW 2026',
    title: 'Probing Functional Correctness in Diffusion Language Models',
    authors: ['Guan-Ming Chiu', 'Jeng-Yue Liu'],
    venue: 'ACL 2026 Student Research Workshop',
    link: 'https://aclanthology.org/2026.acl-srw.15/',
    linkLabel: 'ACL Anthology',
  },
  {
    category: 'ICASSP 2026',
    title:
      'SynthCloner: Synthesizer Preset Conversion via Factorized Codec with Disentangled Timbre and ADSR Control',
    authors: ['Jeng-Yue Liu', 'Ting-Chao Hsu', 'Yen-Tung Yeh', 'Li Su', 'Yi-Hsuan Yang'],
    venue: 'IEEE International Conference on Acoustics, Speech and Signal Processing 2026',
    link: 'https://arxiv.org/abs/2509.24286',
    linkLabel: 'arXiv',
  },
  {
    category: "Bachelor's Thesis",
    title: "Trip-purpose-based methods for predicting human mobility's next location",
    authors: ['Jeng-Yue Liu', 'Tzai-Hung Wen'],
    venue: 'Annual Conference of the Population Association of Taiwan 2024',
    link: 'https://github.com/buffett0323/BS_Thesis.git',
    linkLabel: 'GitHub',
  },
];

export default function Publications() {
  return (
    <div className="w-full rounded-lg bg-white px-4 py-10 shadow-md dark:bg-gray-600 sm:px-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">Publications</h1>

      <div className="flex flex-col gap-4">
        {publications.map((publication) => (
          <article
            key={`${publication.category}-${publication.title}`}
            className="rounded-lg border-l-4 border-blue-500 bg-gray-50 px-5 py-4 transition-shadow hover:shadow-md dark:border-blue-400 dark:bg-gray-700"
          >
            <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                {publication.category}
              </span>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-300"
              >
                {publication.linkLabel}
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-9 3 9.75-9.75M21 3h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>

            <h2 className="text-base font-bold leading-snug text-gray-900 dark:text-white sm:text-lg">
              {publication.title}
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {publication.authors.map((author, index) => (
                <React.Fragment key={`${publication.title}-${author}-${index}`}>
                  {index > 0 ? ', ' : ''}
                  {author === 'Jeng-Yue Liu' ? (
                    <strong className="text-gray-900 dark:text-white">{author}</strong>
                  ) : (
                    author
                  )}
                </React.Fragment>
              ))}
            </p>

            {(publication.venue || publication.institution || publication.year) && (
              <p className="mt-1 text-sm italic text-gray-500 dark:text-gray-400">
                {[publication.venue, publication.institution, publication.year]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
