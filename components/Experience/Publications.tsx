import React from 'react';

export default function Publications() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">Publications</h1>
      
      <div className="grid grid-cols-1 gap-8">
        {/* First Publication - ICASSP 2026 */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            ICASSP 2026
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Title:</strong> SynthCloner: Synthesizer Preset Conversion via Factorized Codec with Disentangled Timbre and ADSR Control 
          </p>


          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Authors:</strong> <b>Jeng-Yue Liu</b>, Ting-Chao Hsu, Yen-Tung Yeh, Li Su, Yi-Hsuan Yang
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Conference:</strong> IEEE International Conference on Acoustics, Speech and Signal Processing (under review)
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Institution:</strong> National Taiwan University, Academia Sinica
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Year:</strong> 2026
          </p>
          <div className="mt-4">
            <a
              href="/ICASSP_2026_final_0918.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View PDF
            </a>
          </div>
        </div>
        
        {/* Second Publication - BS Thesis */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Bachelor's Thesis
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Title:</strong> Trip-purpose-based methods for predicting human mobility’s next location
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Authors:</strong> <b>Jeng-Yue Liu</b>, Tzai-Hung Wen
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Conference:</strong> Annual Conference of the Population Association of Taiwan
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Institution:</strong> National Taiwan University
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Year:</strong> 2024
          </p>
          <div className="mt-4">
            <a
              href="/BS_Thesis.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View PDF
            </a>
          </div>
        </div>
      </div>

        

      {/* PDF Viewers Section
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-8">PDF Viewers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">ICASSP 2026 Paper</h3>
            <iframe
              src="/ICASSP_2026_final_0918.pdf#toolbar=1&navpanes=1&scrollbar=1"
              className="w-full h-96 border-0 rounded-lg"
              title="ICASSP 2026 Paper PDF"
            />
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Bachelor's Thesis</h3>
            <iframe
              src="/BS_Thesis.pdf#toolbar=1&navpanes=1&scrollbar=1"
              className="w-full h-96 border-0 rounded-lg"
              title="Bachelor's Thesis PDF"
            />
          </div>

        </div>
      </div> */}
    </div>
  );
}
