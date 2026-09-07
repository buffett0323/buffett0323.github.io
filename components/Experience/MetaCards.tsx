import React from 'react';

type MetaCardEntry = {
  org: React.ReactNode;
  meta: { label: string; value: React.ReactNode }[];
  bullets?: React.ReactNode[];
};

/**
 * Shared three-row card layout: organization on top, metadata in the middle,
 * bullet points at the bottom. Used by Research and Teaching Assistant sections.
 */
export default function MetaCards({ heading, entries }: { heading: string; entries: MetaCardEntry[] }) {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{heading}</h1>

      <div className="flex flex-col gap-5">
        {entries.map((entry, idx) => (
          <article key={idx} className="rounded-lg bg-gray-50 p-5 shadow-sm dark:bg-gray-700">
            {/* Row 1 — organization */}
            <div className="border-b border-gray-200 pb-3 dark:border-gray-600">
              <h2 className="text-lg font-bold text-black dark:text-white">{entry.org}</h2>
            </div>

            {/* Row 2 — remaining metadata */}
            <div className="flex flex-wrap gap-x-6 gap-y-1 py-3 text-sm text-gray-600 dark:text-gray-300">
              {entry.meta.map((item) => (
                <div key={item.label}>
                  <b className="text-black dark:text-white">{item.label}: </b>
                  {item.value}
                </div>
              ))}
            </div>

            {/* Row 3 — bullet points */}
            {entry.bullets && (
              <ul className="ml-5 list-disc space-y-1.5 text-sm text-gray-600 marker:text-blue-500 dark:text-gray-300 dark:marker:text-blue-300">
                {entry.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>{bullet}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
