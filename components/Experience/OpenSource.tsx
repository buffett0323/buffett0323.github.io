import React from 'react';
import { openSourceData, openSourceStats } from '../../constants/experience';

export default function OpenSource() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-3 text-center text-3xl font-bold">{'Open Source Contribution'}</h1>
      <p className="mb-8 text-center text-base text-gray-500 dark:text-gray-300">
        Public contributions from{' '}
        <a
          href="https://github.com/buffett0323"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline dark:text-blue-300"
        >
          @buffett0323
        </a>
        , mostly across the LLM inference, serving, and kernel ecosystem.
      </p>

      {/* Aggregate stats */}
      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {openSourceStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg bg-gray-100 px-3 py-5 text-center shadow-sm dark:bg-gray-800"
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-300">{stat.value}</div>
            <div className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Per-project breakdown */}
      <div className="space-y-6">
        {openSourceData.map((project) => (
          <div key={project.name} className="rounded-lg bg-gray-50 p-5 dark:bg-gray-700">
            <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-blue-600 hover:underline dark:text-blue-300"
              >
                {project.name}
              </a>
              <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-600 dark:text-gray-200">
                ★ {project.stars}
              </span>
            </div>
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-300">{project.description}</p>

            <ul className="space-y-2">
              {project.prs.map((pr) => (
                <li key={pr.refs} className="flex flex-wrap items-baseline gap-x-2 text-sm">
                  <span
                    className={`shrink-0 rounded px-2 py-0.5 text-xs font-semibold ${
                      pr.merged
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200'
                        : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                    }`}
                  >
                    {pr.merged ? 'merged' : 'open'}
                  </span>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-xs text-blue-500 hover:underline dark:text-blue-300"
                  >
                    {pr.refs}
                  </a>
                  <span className="text-gray-700 dark:text-gray-200">{pr.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}
